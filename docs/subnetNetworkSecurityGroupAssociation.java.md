# `subnetNetworkSecurityGroupAssociation` Submodule <a name="`subnetNetworkSecurityGroupAssociation` Submodule" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SubnetNetworkSecurityGroupAssociation <a name="SubnetNetworkSecurityGroupAssociation" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/subnet_network_security_group_association azurerm_subnet_network_security_group_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.Initializer"></a>

```java
import io.cdktn.providers.azurerm.subnet_network_security_group_association.SubnetNetworkSecurityGroupAssociation;

SubnetNetworkSecurityGroupAssociation.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .networkSecurityGroupId(java.lang.String)
    .subnetId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(SubnetNetworkSecurityGroupAssociationTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.Initializer.parameter.networkSecurityGroupId">networkSecurityGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/subnet_network_security_group_association#network_security_group_id SubnetNetworkSecurityGroupAssociation#network_security_group_id}. |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.Initializer.parameter.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/subnet_network_security_group_association#subnet_id SubnetNetworkSecurityGroupAssociation#subnet_id}. |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/subnet_network_security_group_association#id SubnetNetworkSecurityGroupAssociation#id}. |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeouts">SubnetNetworkSecurityGroupAssociationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `networkSecurityGroupId`<sup>Required</sup> <a name="networkSecurityGroupId" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.Initializer.parameter.networkSecurityGroupId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/subnet_network_security_group_association#network_security_group_id SubnetNetworkSecurityGroupAssociation#network_security_group_id}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.Initializer.parameter.subnetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/subnet_network_security_group_association#subnet_id SubnetNetworkSecurityGroupAssociation#subnet_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/subnet_network_security_group_association#id SubnetNetworkSecurityGroupAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeouts">SubnetNetworkSecurityGroupAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/subnet_network_security_group_association#timeouts SubnetNetworkSecurityGroupAssociation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.putTimeouts"></a>

```java
public void putTimeouts(SubnetNetworkSecurityGroupAssociationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeouts">SubnetNetworkSecurityGroupAssociationTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SubnetNetworkSecurityGroupAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.isConstruct"></a>

```java
import io.cdktn.providers.azurerm.subnet_network_security_group_association.SubnetNetworkSecurityGroupAssociation;

SubnetNetworkSecurityGroupAssociation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.isTerraformElement"></a>

```java
import io.cdktn.providers.azurerm.subnet_network_security_group_association.SubnetNetworkSecurityGroupAssociation;

SubnetNetworkSecurityGroupAssociation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.isTerraformResource"></a>

```java
import io.cdktn.providers.azurerm.subnet_network_security_group_association.SubnetNetworkSecurityGroupAssociation;

SubnetNetworkSecurityGroupAssociation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.generateConfigForImport"></a>

```java
import io.cdktn.providers.azurerm.subnet_network_security_group_association.SubnetNetworkSecurityGroupAssociation;

SubnetNetworkSecurityGroupAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SubnetNetworkSecurityGroupAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SubnetNetworkSecurityGroupAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SubnetNetworkSecurityGroupAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SubnetNetworkSecurityGroupAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/subnet_network_security_group_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SubnetNetworkSecurityGroupAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference">SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.networkSecurityGroupIdInput">networkSecurityGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeouts">SubnetNetworkSecurityGroupAssociationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.networkSecurityGroupId">networkSecurityGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.timeouts"></a>

```java
public SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference">SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `networkSecurityGroupIdInput`<sup>Optional</sup> <a name="networkSecurityGroupIdInput" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.networkSecurityGroupIdInput"></a>

```java
public java.lang.String getNetworkSecurityGroupIdInput();
```

- *Type:* java.lang.String

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.timeoutsInput"></a>

```java
public IResolvable|SubnetNetworkSecurityGroupAssociationTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeouts">SubnetNetworkSecurityGroupAssociationTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `networkSecurityGroupId`<sup>Required</sup> <a name="networkSecurityGroupId" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.networkSecurityGroupId"></a>

```java
public java.lang.String getNetworkSecurityGroupId();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SubnetNetworkSecurityGroupAssociationConfig <a name="SubnetNetworkSecurityGroupAssociationConfig" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationConfig.Initializer"></a>

```java
import io.cdktn.providers.azurerm.subnet_network_security_group_association.SubnetNetworkSecurityGroupAssociationConfig;

SubnetNetworkSecurityGroupAssociationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .networkSecurityGroupId(java.lang.String)
    .subnetId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(SubnetNetworkSecurityGroupAssociationTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationConfig.property.networkSecurityGroupId">networkSecurityGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/subnet_network_security_group_association#network_security_group_id SubnetNetworkSecurityGroupAssociation#network_security_group_id}. |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationConfig.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/subnet_network_security_group_association#subnet_id SubnetNetworkSecurityGroupAssociation#subnet_id}. |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/subnet_network_security_group_association#id SubnetNetworkSecurityGroupAssociation#id}. |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeouts">SubnetNetworkSecurityGroupAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `networkSecurityGroupId`<sup>Required</sup> <a name="networkSecurityGroupId" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationConfig.property.networkSecurityGroupId"></a>

```java
public java.lang.String getNetworkSecurityGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/subnet_network_security_group_association#network_security_group_id SubnetNetworkSecurityGroupAssociation#network_security_group_id}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationConfig.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/subnet_network_security_group_association#subnet_id SubnetNetworkSecurityGroupAssociation#subnet_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/subnet_network_security_group_association#id SubnetNetworkSecurityGroupAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationConfig.property.timeouts"></a>

```java
public SubnetNetworkSecurityGroupAssociationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeouts">SubnetNetworkSecurityGroupAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/subnet_network_security_group_association#timeouts SubnetNetworkSecurityGroupAssociation#timeouts}

---

### SubnetNetworkSecurityGroupAssociationTimeouts <a name="SubnetNetworkSecurityGroupAssociationTimeouts" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeouts.Initializer"></a>

```java
import io.cdktn.providers.azurerm.subnet_network_security_group_association.SubnetNetworkSecurityGroupAssociationTimeouts;

SubnetNetworkSecurityGroupAssociationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/subnet_network_security_group_association#create SubnetNetworkSecurityGroupAssociation#create}. |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/subnet_network_security_group_association#delete SubnetNetworkSecurityGroupAssociation#delete}. |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/subnet_network_security_group_association#read SubnetNetworkSecurityGroupAssociation#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/subnet_network_security_group_association#create SubnetNetworkSecurityGroupAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/subnet_network_security_group_association#delete SubnetNetworkSecurityGroupAssociation#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/subnet_network_security_group_association#read SubnetNetworkSecurityGroupAssociation#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference <a name="SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.subnet_network_security_group_association.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference;

new SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeouts">SubnetNetworkSecurityGroupAssociationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|SubnetNetworkSecurityGroupAssociationTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeouts">SubnetNetworkSecurityGroupAssociationTimeouts</a>

---



