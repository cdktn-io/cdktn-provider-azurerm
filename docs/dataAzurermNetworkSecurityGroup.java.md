# `dataAzurermNetworkSecurityGroup` Submodule <a name="`dataAzurermNetworkSecurityGroup` Submodule" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermNetworkSecurityGroup <a name="DataAzurermNetworkSecurityGroup" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/network_security_group azurerm_network_security_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_network_security_group.DataAzurermNetworkSecurityGroup;

DataAzurermNetworkSecurityGroup.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DataAzurermNetworkSecurityGroupTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/network_security_group#name DataAzurermNetworkSecurityGroup#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/network_security_group#resource_group_name DataAzurermNetworkSecurityGroup#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/network_security_group#id DataAzurermNetworkSecurityGroup#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeouts">DataAzurermNetworkSecurityGroupTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/network_security_group#name DataAzurermNetworkSecurityGroup#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/network_security_group#resource_group_name DataAzurermNetworkSecurityGroup#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/network_security_group#id DataAzurermNetworkSecurityGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeouts">DataAzurermNetworkSecurityGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/network_security_group#timeouts DataAzurermNetworkSecurityGroup#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.putTimeouts"></a>

```java
public void putTimeouts(DataAzurermNetworkSecurityGroupTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeouts">DataAzurermNetworkSecurityGroupTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAzurermNetworkSecurityGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.isConstruct"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_network_security_group.DataAzurermNetworkSecurityGroup;

DataAzurermNetworkSecurityGroup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.isTerraformElement"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_network_security_group.DataAzurermNetworkSecurityGroup;

DataAzurermNetworkSecurityGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.isTerraformDataSource"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_network_security_group.DataAzurermNetworkSecurityGroup;

DataAzurermNetworkSecurityGroup.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.generateConfigForImport"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_network_security_group.DataAzurermNetworkSecurityGroup;

DataAzurermNetworkSecurityGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAzurermNetworkSecurityGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAzurermNetworkSecurityGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAzurermNetworkSecurityGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAzurermNetworkSecurityGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/network_security_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAzurermNetworkSecurityGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.securityRule">securityRule</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleList">DataAzurermNetworkSecurityGroupSecurityRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.tags">tags</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference">DataAzurermNetworkSecurityGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeouts">DataAzurermNetworkSecurityGroupTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `securityRule`<sup>Required</sup> <a name="securityRule" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.securityRule"></a>

```java
public DataAzurermNetworkSecurityGroupSecurityRuleList getSecurityRule();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleList">DataAzurermNetworkSecurityGroupSecurityRuleList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.tags"></a>

```java
public StringMap getTags();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.timeouts"></a>

```java
public DataAzurermNetworkSecurityGroupTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference">DataAzurermNetworkSecurityGroupTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.timeoutsInput"></a>

```java
public IResolvable|DataAzurermNetworkSecurityGroupTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeouts">DataAzurermNetworkSecurityGroupTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermNetworkSecurityGroupConfig <a name="DataAzurermNetworkSecurityGroupConfig" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupConfig.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_network_security_group.DataAzurermNetworkSecurityGroupConfig;

DataAzurermNetworkSecurityGroupConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DataAzurermNetworkSecurityGroupTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/network_security_group#name DataAzurermNetworkSecurityGroup#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/network_security_group#resource_group_name DataAzurermNetworkSecurityGroup#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/network_security_group#id DataAzurermNetworkSecurityGroup#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeouts">DataAzurermNetworkSecurityGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/network_security_group#name DataAzurermNetworkSecurityGroup#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/network_security_group#resource_group_name DataAzurermNetworkSecurityGroup#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/network_security_group#id DataAzurermNetworkSecurityGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupConfig.property.timeouts"></a>

```java
public DataAzurermNetworkSecurityGroupTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeouts">DataAzurermNetworkSecurityGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/network_security_group#timeouts DataAzurermNetworkSecurityGroup#timeouts}

---

### DataAzurermNetworkSecurityGroupSecurityRule <a name="DataAzurermNetworkSecurityGroupSecurityRule" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRule.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_network_security_group.DataAzurermNetworkSecurityGroupSecurityRule;

DataAzurermNetworkSecurityGroupSecurityRule.builder()
    .build();
```


### DataAzurermNetworkSecurityGroupTimeouts <a name="DataAzurermNetworkSecurityGroupTimeouts" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeouts.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_network_security_group.DataAzurermNetworkSecurityGroupTimeouts;

DataAzurermNetworkSecurityGroupTimeouts.builder()
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/network_security_group#read DataAzurermNetworkSecurityGroup#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/network_security_group#read DataAzurermNetworkSecurityGroup#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermNetworkSecurityGroupSecurityRuleList <a name="DataAzurermNetworkSecurityGroupSecurityRuleList" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleList.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_network_security_group.DataAzurermNetworkSecurityGroupSecurityRuleList;

new DataAzurermNetworkSecurityGroupSecurityRuleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleList.get"></a>

```java
public DataAzurermNetworkSecurityGroupSecurityRuleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermNetworkSecurityGroupSecurityRuleOutputReference <a name="DataAzurermNetworkSecurityGroupSecurityRuleOutputReference" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_network_security_group.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference;

new DataAzurermNetworkSecurityGroupSecurityRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.access">access</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.destinationAddressPrefix">destinationAddressPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.destinationAddressPrefixes">destinationAddressPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.destinationApplicationSecurityGroupIds">destinationApplicationSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.destinationPortRange">destinationPortRange</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.destinationPortRanges">destinationPortRanges</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.direction">direction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.sourceAddressPrefix">sourceAddressPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.sourceAddressPrefixes">sourceAddressPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.sourceApplicationSecurityGroupIds">sourceApplicationSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.sourcePortRange">sourcePortRange</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.sourcePortRanges">sourcePortRanges</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRule">DataAzurermNetworkSecurityGroupSecurityRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `access`<sup>Required</sup> <a name="access" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.access"></a>

```java
public java.lang.String getAccess();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `destinationAddressPrefix`<sup>Required</sup> <a name="destinationAddressPrefix" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.destinationAddressPrefix"></a>

```java
public java.lang.String getDestinationAddressPrefix();
```

- *Type:* java.lang.String

---

##### `destinationAddressPrefixes`<sup>Required</sup> <a name="destinationAddressPrefixes" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.destinationAddressPrefixes"></a>

```java
public java.util.List<java.lang.String> getDestinationAddressPrefixes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `destinationApplicationSecurityGroupIds`<sup>Required</sup> <a name="destinationApplicationSecurityGroupIds" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.destinationApplicationSecurityGroupIds"></a>

```java
public java.util.List<java.lang.String> getDestinationApplicationSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `destinationPortRange`<sup>Required</sup> <a name="destinationPortRange" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.destinationPortRange"></a>

```java
public java.lang.String getDestinationPortRange();
```

- *Type:* java.lang.String

---

##### `destinationPortRanges`<sup>Required</sup> <a name="destinationPortRanges" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.destinationPortRanges"></a>

```java
public java.util.List<java.lang.String> getDestinationPortRanges();
```

- *Type:* java.util.List<java.lang.String>

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `sourceAddressPrefix`<sup>Required</sup> <a name="sourceAddressPrefix" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.sourceAddressPrefix"></a>

```java
public java.lang.String getSourceAddressPrefix();
```

- *Type:* java.lang.String

---

##### `sourceAddressPrefixes`<sup>Required</sup> <a name="sourceAddressPrefixes" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.sourceAddressPrefixes"></a>

```java
public java.util.List<java.lang.String> getSourceAddressPrefixes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sourceApplicationSecurityGroupIds`<sup>Required</sup> <a name="sourceApplicationSecurityGroupIds" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.sourceApplicationSecurityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSourceApplicationSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sourcePortRange`<sup>Required</sup> <a name="sourcePortRange" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.sourcePortRange"></a>

```java
public java.lang.String getSourcePortRange();
```

- *Type:* java.lang.String

---

##### `sourcePortRanges`<sup>Required</sup> <a name="sourcePortRanges" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.sourcePortRanges"></a>

```java
public java.util.List<java.lang.String> getSourcePortRanges();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.internalValue"></a>

```java
public DataAzurermNetworkSecurityGroupSecurityRule getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRule">DataAzurermNetworkSecurityGroupSecurityRule</a>

---


### DataAzurermNetworkSecurityGroupTimeoutsOutputReference <a name="DataAzurermNetworkSecurityGroupTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_network_security_group.DataAzurermNetworkSecurityGroupTimeoutsOutputReference;

new DataAzurermNetworkSecurityGroupTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeouts">DataAzurermNetworkSecurityGroupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataAzurermNetworkSecurityGroupTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeouts">DataAzurermNetworkSecurityGroupTimeouts</a>

---



