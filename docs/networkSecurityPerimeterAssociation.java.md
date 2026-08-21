# `networkSecurityPerimeterAssociation` Submodule <a name="`networkSecurityPerimeterAssociation` Submodule" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkSecurityPerimeterAssociation <a name="NetworkSecurityPerimeterAssociation" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/network_security_perimeter_association azurerm_network_security_perimeter_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.Initializer"></a>

```java
import io.cdktn.providers.azurerm.network_security_perimeter_association.NetworkSecurityPerimeterAssociation;

NetworkSecurityPerimeterAssociation.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accessMode(java.lang.String)
    .name(java.lang.String)
    .networkSecurityPerimeterProfileId(java.lang.String)
    .resourceId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(NetworkSecurityPerimeterAssociationTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.Initializer.parameter.accessMode">accessMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/network_security_perimeter_association#access_mode NetworkSecurityPerimeterAssociation#access_mode}. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/network_security_perimeter_association#name NetworkSecurityPerimeterAssociation#name}. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.Initializer.parameter.networkSecurityPerimeterProfileId">networkSecurityPerimeterProfileId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/network_security_perimeter_association#network_security_perimeter_profile_id NetworkSecurityPerimeterAssociation#network_security_perimeter_profile_id}. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.Initializer.parameter.resourceId">resourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/network_security_perimeter_association#resource_id NetworkSecurityPerimeterAssociation#resource_id}. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/network_security_perimeter_association#id NetworkSecurityPerimeterAssociation#id}. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeouts">NetworkSecurityPerimeterAssociationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accessMode`<sup>Required</sup> <a name="accessMode" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.Initializer.parameter.accessMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/network_security_perimeter_association#access_mode NetworkSecurityPerimeterAssociation#access_mode}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/network_security_perimeter_association#name NetworkSecurityPerimeterAssociation#name}.

---

##### `networkSecurityPerimeterProfileId`<sup>Required</sup> <a name="networkSecurityPerimeterProfileId" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.Initializer.parameter.networkSecurityPerimeterProfileId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/network_security_perimeter_association#network_security_perimeter_profile_id NetworkSecurityPerimeterAssociation#network_security_perimeter_profile_id}.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.Initializer.parameter.resourceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/network_security_perimeter_association#resource_id NetworkSecurityPerimeterAssociation#resource_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/network_security_perimeter_association#id NetworkSecurityPerimeterAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeouts">NetworkSecurityPerimeterAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/network_security_perimeter_association#timeouts NetworkSecurityPerimeterAssociation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.putTimeouts"></a>

```java
public void putTimeouts(NetworkSecurityPerimeterAssociationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeouts">NetworkSecurityPerimeterAssociationTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkSecurityPerimeterAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.isConstruct"></a>

```java
import io.cdktn.providers.azurerm.network_security_perimeter_association.NetworkSecurityPerimeterAssociation;

NetworkSecurityPerimeterAssociation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.isTerraformElement"></a>

```java
import io.cdktn.providers.azurerm.network_security_perimeter_association.NetworkSecurityPerimeterAssociation;

NetworkSecurityPerimeterAssociation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.isTerraformResource"></a>

```java
import io.cdktn.providers.azurerm.network_security_perimeter_association.NetworkSecurityPerimeterAssociation;

NetworkSecurityPerimeterAssociation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.generateConfigForImport"></a>

```java
import io.cdktn.providers.azurerm.network_security_perimeter_association.NetworkSecurityPerimeterAssociation;

NetworkSecurityPerimeterAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),NetworkSecurityPerimeterAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a NetworkSecurityPerimeterAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the NetworkSecurityPerimeterAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing NetworkSecurityPerimeterAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/network_security_perimeter_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the NetworkSecurityPerimeterAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference">NetworkSecurityPerimeterAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.accessModeInput">accessModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.networkSecurityPerimeterProfileIdInput">networkSecurityPerimeterProfileIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.resourceIdInput">resourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeouts">NetworkSecurityPerimeterAssociationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.accessMode">accessMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.networkSecurityPerimeterProfileId">networkSecurityPerimeterProfileId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.timeouts"></a>

```java
public NetworkSecurityPerimeterAssociationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference">NetworkSecurityPerimeterAssociationTimeoutsOutputReference</a>

---

##### `accessModeInput`<sup>Optional</sup> <a name="accessModeInput" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.accessModeInput"></a>

```java
public java.lang.String getAccessModeInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkSecurityPerimeterProfileIdInput`<sup>Optional</sup> <a name="networkSecurityPerimeterProfileIdInput" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.networkSecurityPerimeterProfileIdInput"></a>

```java
public java.lang.String getNetworkSecurityPerimeterProfileIdInput();
```

- *Type:* java.lang.String

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.resourceIdInput"></a>

```java
public java.lang.String getResourceIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.timeoutsInput"></a>

```java
public IResolvable|NetworkSecurityPerimeterAssociationTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeouts">NetworkSecurityPerimeterAssociationTimeouts</a>

---

##### `accessMode`<sup>Required</sup> <a name="accessMode" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.accessMode"></a>

```java
public java.lang.String getAccessMode();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `networkSecurityPerimeterProfileId`<sup>Required</sup> <a name="networkSecurityPerimeterProfileId" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.networkSecurityPerimeterProfileId"></a>

```java
public java.lang.String getNetworkSecurityPerimeterProfileId();
```

- *Type:* java.lang.String

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkSecurityPerimeterAssociationConfig <a name="NetworkSecurityPerimeterAssociationConfig" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationConfig.Initializer"></a>

```java
import io.cdktn.providers.azurerm.network_security_perimeter_association.NetworkSecurityPerimeterAssociationConfig;

NetworkSecurityPerimeterAssociationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accessMode(java.lang.String)
    .name(java.lang.String)
    .networkSecurityPerimeterProfileId(java.lang.String)
    .resourceId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(NetworkSecurityPerimeterAssociationTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationConfig.property.accessMode">accessMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/network_security_perimeter_association#access_mode NetworkSecurityPerimeterAssociation#access_mode}. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/network_security_perimeter_association#name NetworkSecurityPerimeterAssociation#name}. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationConfig.property.networkSecurityPerimeterProfileId">networkSecurityPerimeterProfileId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/network_security_perimeter_association#network_security_perimeter_profile_id NetworkSecurityPerimeterAssociation#network_security_perimeter_profile_id}. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationConfig.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/network_security_perimeter_association#resource_id NetworkSecurityPerimeterAssociation#resource_id}. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/network_security_perimeter_association#id NetworkSecurityPerimeterAssociation#id}. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeouts">NetworkSecurityPerimeterAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accessMode`<sup>Required</sup> <a name="accessMode" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationConfig.property.accessMode"></a>

```java
public java.lang.String getAccessMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/network_security_perimeter_association#access_mode NetworkSecurityPerimeterAssociation#access_mode}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/network_security_perimeter_association#name NetworkSecurityPerimeterAssociation#name}.

---

##### `networkSecurityPerimeterProfileId`<sup>Required</sup> <a name="networkSecurityPerimeterProfileId" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationConfig.property.networkSecurityPerimeterProfileId"></a>

```java
public java.lang.String getNetworkSecurityPerimeterProfileId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/network_security_perimeter_association#network_security_perimeter_profile_id NetworkSecurityPerimeterAssociation#network_security_perimeter_profile_id}.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationConfig.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/network_security_perimeter_association#resource_id NetworkSecurityPerimeterAssociation#resource_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/network_security_perimeter_association#id NetworkSecurityPerimeterAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationConfig.property.timeouts"></a>

```java
public NetworkSecurityPerimeterAssociationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeouts">NetworkSecurityPerimeterAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/network_security_perimeter_association#timeouts NetworkSecurityPerimeterAssociation#timeouts}

---

### NetworkSecurityPerimeterAssociationTimeouts <a name="NetworkSecurityPerimeterAssociationTimeouts" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeouts.Initializer"></a>

```java
import io.cdktn.providers.azurerm.network_security_perimeter_association.NetworkSecurityPerimeterAssociationTimeouts;

NetworkSecurityPerimeterAssociationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/network_security_perimeter_association#create NetworkSecurityPerimeterAssociation#create}. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/network_security_perimeter_association#delete NetworkSecurityPerimeterAssociation#delete}. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/network_security_perimeter_association#read NetworkSecurityPerimeterAssociation#read}. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/network_security_perimeter_association#update NetworkSecurityPerimeterAssociation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/network_security_perimeter_association#create NetworkSecurityPerimeterAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/network_security_perimeter_association#delete NetworkSecurityPerimeterAssociation#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/network_security_perimeter_association#read NetworkSecurityPerimeterAssociation#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/network_security_perimeter_association#update NetworkSecurityPerimeterAssociation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkSecurityPerimeterAssociationTimeoutsOutputReference <a name="NetworkSecurityPerimeterAssociationTimeoutsOutputReference" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.network_security_perimeter_association.NetworkSecurityPerimeterAssociationTimeoutsOutputReference;

new NetworkSecurityPerimeterAssociationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeouts">NetworkSecurityPerimeterAssociationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|NetworkSecurityPerimeterAssociationTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeouts">NetworkSecurityPerimeterAssociationTimeouts</a>

---



