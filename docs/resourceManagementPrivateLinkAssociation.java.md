# `resourceManagementPrivateLinkAssociation` Submodule <a name="`resourceManagementPrivateLinkAssociation` Submodule" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ResourceManagementPrivateLinkAssociation <a name="ResourceManagementPrivateLinkAssociation" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/resource_management_private_link_association azurerm_resource_management_private_link_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.Initializer"></a>

```java
import io.cdktn.providers.azurerm.resource_management_private_link_association.ResourceManagementPrivateLinkAssociation;

ResourceManagementPrivateLinkAssociation.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .managementGroupId(java.lang.String)
    .publicNetworkAccessEnabled(java.lang.Boolean|IResolvable)
    .resourceManagementPrivateLinkId(java.lang.String)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .timeouts(ResourceManagementPrivateLinkAssociationTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.Initializer.parameter.managementGroupId">managementGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/resource_management_private_link_association#management_group_id ResourceManagementPrivateLinkAssociation#management_group_id}. |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.Initializer.parameter.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/resource_management_private_link_association#public_network_access_enabled ResourceManagementPrivateLinkAssociation#public_network_access_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.Initializer.parameter.resourceManagementPrivateLinkId">resourceManagementPrivateLinkId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/resource_management_private_link_association#resource_management_private_link_id ResourceManagementPrivateLinkAssociation#resource_management_private_link_id}. |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/resource_management_private_link_association#id ResourceManagementPrivateLinkAssociation#id}. |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/resource_management_private_link_association#name ResourceManagementPrivateLinkAssociation#name}. |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeouts">ResourceManagementPrivateLinkAssociationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `managementGroupId`<sup>Required</sup> <a name="managementGroupId" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.Initializer.parameter.managementGroupId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/resource_management_private_link_association#management_group_id ResourceManagementPrivateLinkAssociation#management_group_id}.

---

##### `publicNetworkAccessEnabled`<sup>Required</sup> <a name="publicNetworkAccessEnabled" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.Initializer.parameter.publicNetworkAccessEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/resource_management_private_link_association#public_network_access_enabled ResourceManagementPrivateLinkAssociation#public_network_access_enabled}.

---

##### `resourceManagementPrivateLinkId`<sup>Required</sup> <a name="resourceManagementPrivateLinkId" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.Initializer.parameter.resourceManagementPrivateLinkId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/resource_management_private_link_association#resource_management_private_link_id ResourceManagementPrivateLinkAssociation#resource_management_private_link_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/resource_management_private_link_association#id ResourceManagementPrivateLinkAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/resource_management_private_link_association#name ResourceManagementPrivateLinkAssociation#name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeouts">ResourceManagementPrivateLinkAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/resource_management_private_link_association#timeouts ResourceManagementPrivateLinkAssociation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.putTimeouts"></a>

```java
public void putTimeouts(ResourceManagementPrivateLinkAssociationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeouts">ResourceManagementPrivateLinkAssociationTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.resetId"></a>

```java
public void resetId()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.resetName"></a>

```java
public void resetName()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ResourceManagementPrivateLinkAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.isConstruct"></a>

```java
import io.cdktn.providers.azurerm.resource_management_private_link_association.ResourceManagementPrivateLinkAssociation;

ResourceManagementPrivateLinkAssociation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.isTerraformElement"></a>

```java
import io.cdktn.providers.azurerm.resource_management_private_link_association.ResourceManagementPrivateLinkAssociation;

ResourceManagementPrivateLinkAssociation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.isTerraformResource"></a>

```java
import io.cdktn.providers.azurerm.resource_management_private_link_association.ResourceManagementPrivateLinkAssociation;

ResourceManagementPrivateLinkAssociation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.generateConfigForImport"></a>

```java
import io.cdktn.providers.azurerm.resource_management_private_link_association.ResourceManagementPrivateLinkAssociation;

ResourceManagementPrivateLinkAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ResourceManagementPrivateLinkAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ResourceManagementPrivateLinkAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ResourceManagementPrivateLinkAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ResourceManagementPrivateLinkAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/resource_management_private_link_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ResourceManagementPrivateLinkAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference">ResourceManagementPrivateLinkAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.managementGroupIdInput">managementGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.publicNetworkAccessEnabledInput">publicNetworkAccessEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.resourceManagementPrivateLinkIdInput">resourceManagementPrivateLinkIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeouts">ResourceManagementPrivateLinkAssociationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.managementGroupId">managementGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.resourceManagementPrivateLinkId">resourceManagementPrivateLinkId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.timeouts"></a>

```java
public ResourceManagementPrivateLinkAssociationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference">ResourceManagementPrivateLinkAssociationTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `managementGroupIdInput`<sup>Optional</sup> <a name="managementGroupIdInput" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.managementGroupIdInput"></a>

```java
public java.lang.String getManagementGroupIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `publicNetworkAccessEnabledInput`<sup>Optional</sup> <a name="publicNetworkAccessEnabledInput" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.publicNetworkAccessEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getPublicNetworkAccessEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `resourceManagementPrivateLinkIdInput`<sup>Optional</sup> <a name="resourceManagementPrivateLinkIdInput" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.resourceManagementPrivateLinkIdInput"></a>

```java
public java.lang.String getResourceManagementPrivateLinkIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.timeoutsInput"></a>

```java
public IResolvable|ResourceManagementPrivateLinkAssociationTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeouts">ResourceManagementPrivateLinkAssociationTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `managementGroupId`<sup>Required</sup> <a name="managementGroupId" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.managementGroupId"></a>

```java
public java.lang.String getManagementGroupId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `publicNetworkAccessEnabled`<sup>Required</sup> <a name="publicNetworkAccessEnabled" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.publicNetworkAccessEnabled"></a>

```java
public java.lang.Boolean|IResolvable getPublicNetworkAccessEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `resourceManagementPrivateLinkId`<sup>Required</sup> <a name="resourceManagementPrivateLinkId" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.resourceManagementPrivateLinkId"></a>

```java
public java.lang.String getResourceManagementPrivateLinkId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ResourceManagementPrivateLinkAssociationConfig <a name="ResourceManagementPrivateLinkAssociationConfig" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationConfig.Initializer"></a>

```java
import io.cdktn.providers.azurerm.resource_management_private_link_association.ResourceManagementPrivateLinkAssociationConfig;

ResourceManagementPrivateLinkAssociationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .managementGroupId(java.lang.String)
    .publicNetworkAccessEnabled(java.lang.Boolean|IResolvable)
    .resourceManagementPrivateLinkId(java.lang.String)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .timeouts(ResourceManagementPrivateLinkAssociationTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationConfig.property.managementGroupId">managementGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/resource_management_private_link_association#management_group_id ResourceManagementPrivateLinkAssociation#management_group_id}. |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationConfig.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/resource_management_private_link_association#public_network_access_enabled ResourceManagementPrivateLinkAssociation#public_network_access_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationConfig.property.resourceManagementPrivateLinkId">resourceManagementPrivateLinkId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/resource_management_private_link_association#resource_management_private_link_id ResourceManagementPrivateLinkAssociation#resource_management_private_link_id}. |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/resource_management_private_link_association#id ResourceManagementPrivateLinkAssociation#id}. |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/resource_management_private_link_association#name ResourceManagementPrivateLinkAssociation#name}. |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeouts">ResourceManagementPrivateLinkAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `managementGroupId`<sup>Required</sup> <a name="managementGroupId" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationConfig.property.managementGroupId"></a>

```java
public java.lang.String getManagementGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/resource_management_private_link_association#management_group_id ResourceManagementPrivateLinkAssociation#management_group_id}.

---

##### `publicNetworkAccessEnabled`<sup>Required</sup> <a name="publicNetworkAccessEnabled" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationConfig.property.publicNetworkAccessEnabled"></a>

```java
public java.lang.Boolean|IResolvable getPublicNetworkAccessEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/resource_management_private_link_association#public_network_access_enabled ResourceManagementPrivateLinkAssociation#public_network_access_enabled}.

---

##### `resourceManagementPrivateLinkId`<sup>Required</sup> <a name="resourceManagementPrivateLinkId" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationConfig.property.resourceManagementPrivateLinkId"></a>

```java
public java.lang.String getResourceManagementPrivateLinkId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/resource_management_private_link_association#resource_management_private_link_id ResourceManagementPrivateLinkAssociation#resource_management_private_link_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/resource_management_private_link_association#id ResourceManagementPrivateLinkAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/resource_management_private_link_association#name ResourceManagementPrivateLinkAssociation#name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationConfig.property.timeouts"></a>

```java
public ResourceManagementPrivateLinkAssociationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeouts">ResourceManagementPrivateLinkAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/resource_management_private_link_association#timeouts ResourceManagementPrivateLinkAssociation#timeouts}

---

### ResourceManagementPrivateLinkAssociationTimeouts <a name="ResourceManagementPrivateLinkAssociationTimeouts" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeouts.Initializer"></a>

```java
import io.cdktn.providers.azurerm.resource_management_private_link_association.ResourceManagementPrivateLinkAssociationTimeouts;

ResourceManagementPrivateLinkAssociationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/resource_management_private_link_association#create ResourceManagementPrivateLinkAssociation#create}. |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/resource_management_private_link_association#delete ResourceManagementPrivateLinkAssociation#delete}. |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/resource_management_private_link_association#read ResourceManagementPrivateLinkAssociation#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/resource_management_private_link_association#create ResourceManagementPrivateLinkAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/resource_management_private_link_association#delete ResourceManagementPrivateLinkAssociation#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/resource_management_private_link_association#read ResourceManagementPrivateLinkAssociation#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### ResourceManagementPrivateLinkAssociationTimeoutsOutputReference <a name="ResourceManagementPrivateLinkAssociationTimeoutsOutputReference" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.resource_management_private_link_association.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference;

new ResourceManagementPrivateLinkAssociationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeouts">ResourceManagementPrivateLinkAssociationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|ResourceManagementPrivateLinkAssociationTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeouts">ResourceManagementPrivateLinkAssociationTimeouts</a>

---



