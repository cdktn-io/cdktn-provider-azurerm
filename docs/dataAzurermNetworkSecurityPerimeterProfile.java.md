# `dataAzurermNetworkSecurityPerimeterProfile` Submodule <a name="`dataAzurermNetworkSecurityPerimeterProfile` Submodule" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermNetworkSecurityPerimeterProfile <a name="DataAzurermNetworkSecurityPerimeterProfile" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/network_security_perimeter_profile azurerm_network_security_perimeter_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_network_security_perimeter_profile.DataAzurermNetworkSecurityPerimeterProfile;

DataAzurermNetworkSecurityPerimeterProfile.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .networkSecurityPerimeterId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DataAzurermNetworkSecurityPerimeterProfileTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/network_security_perimeter_profile#name DataAzurermNetworkSecurityPerimeterProfile#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.Initializer.parameter.networkSecurityPerimeterId">networkSecurityPerimeterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/network_security_perimeter_profile#network_security_perimeter_id DataAzurermNetworkSecurityPerimeterProfile#network_security_perimeter_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/network_security_perimeter_profile#id DataAzurermNetworkSecurityPerimeterProfile#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeouts">DataAzurermNetworkSecurityPerimeterProfileTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/network_security_perimeter_profile#name DataAzurermNetworkSecurityPerimeterProfile#name}.

---

##### `networkSecurityPerimeterId`<sup>Required</sup> <a name="networkSecurityPerimeterId" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.Initializer.parameter.networkSecurityPerimeterId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/network_security_perimeter_profile#network_security_perimeter_id DataAzurermNetworkSecurityPerimeterProfile#network_security_perimeter_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/network_security_perimeter_profile#id DataAzurermNetworkSecurityPerimeterProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeouts">DataAzurermNetworkSecurityPerimeterProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/network_security_perimeter_profile#timeouts DataAzurermNetworkSecurityPerimeterProfile#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.putTimeouts"></a>

```java
public void putTimeouts(DataAzurermNetworkSecurityPerimeterProfileTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeouts">DataAzurermNetworkSecurityPerimeterProfileTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAzurermNetworkSecurityPerimeterProfile resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.isConstruct"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_network_security_perimeter_profile.DataAzurermNetworkSecurityPerimeterProfile;

DataAzurermNetworkSecurityPerimeterProfile.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.isTerraformElement"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_network_security_perimeter_profile.DataAzurermNetworkSecurityPerimeterProfile;

DataAzurermNetworkSecurityPerimeterProfile.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.isTerraformDataSource"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_network_security_perimeter_profile.DataAzurermNetworkSecurityPerimeterProfile;

DataAzurermNetworkSecurityPerimeterProfile.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.generateConfigForImport"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_network_security_perimeter_profile.DataAzurermNetworkSecurityPerimeterProfile;

DataAzurermNetworkSecurityPerimeterProfile.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAzurermNetworkSecurityPerimeterProfile.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAzurermNetworkSecurityPerimeterProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAzurermNetworkSecurityPerimeterProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAzurermNetworkSecurityPerimeterProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/network_security_perimeter_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAzurermNetworkSecurityPerimeterProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference">DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.networkSecurityPerimeterIdInput">networkSecurityPerimeterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeouts">DataAzurermNetworkSecurityPerimeterProfileTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.networkSecurityPerimeterId">networkSecurityPerimeterId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.timeouts"></a>

```java
public DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference">DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkSecurityPerimeterIdInput`<sup>Optional</sup> <a name="networkSecurityPerimeterIdInput" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.networkSecurityPerimeterIdInput"></a>

```java
public java.lang.String getNetworkSecurityPerimeterIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.timeoutsInput"></a>

```java
public IResolvable|DataAzurermNetworkSecurityPerimeterProfileTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeouts">DataAzurermNetworkSecurityPerimeterProfileTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `networkSecurityPerimeterId`<sup>Required</sup> <a name="networkSecurityPerimeterId" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.networkSecurityPerimeterId"></a>

```java
public java.lang.String getNetworkSecurityPerimeterId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermNetworkSecurityPerimeterProfileConfig <a name="DataAzurermNetworkSecurityPerimeterProfileConfig" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileConfig.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_network_security_perimeter_profile.DataAzurermNetworkSecurityPerimeterProfileConfig;

DataAzurermNetworkSecurityPerimeterProfileConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .networkSecurityPerimeterId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DataAzurermNetworkSecurityPerimeterProfileTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/network_security_perimeter_profile#name DataAzurermNetworkSecurityPerimeterProfile#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileConfig.property.networkSecurityPerimeterId">networkSecurityPerimeterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/network_security_perimeter_profile#network_security_perimeter_id DataAzurermNetworkSecurityPerimeterProfile#network_security_perimeter_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/network_security_perimeter_profile#id DataAzurermNetworkSecurityPerimeterProfile#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeouts">DataAzurermNetworkSecurityPerimeterProfileTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/network_security_perimeter_profile#name DataAzurermNetworkSecurityPerimeterProfile#name}.

---

##### `networkSecurityPerimeterId`<sup>Required</sup> <a name="networkSecurityPerimeterId" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileConfig.property.networkSecurityPerimeterId"></a>

```java
public java.lang.String getNetworkSecurityPerimeterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/network_security_perimeter_profile#network_security_perimeter_id DataAzurermNetworkSecurityPerimeterProfile#network_security_perimeter_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/network_security_perimeter_profile#id DataAzurermNetworkSecurityPerimeterProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileConfig.property.timeouts"></a>

```java
public DataAzurermNetworkSecurityPerimeterProfileTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeouts">DataAzurermNetworkSecurityPerimeterProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/network_security_perimeter_profile#timeouts DataAzurermNetworkSecurityPerimeterProfile#timeouts}

---

### DataAzurermNetworkSecurityPerimeterProfileTimeouts <a name="DataAzurermNetworkSecurityPerimeterProfileTimeouts" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeouts.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_network_security_perimeter_profile.DataAzurermNetworkSecurityPerimeterProfileTimeouts;

DataAzurermNetworkSecurityPerimeterProfileTimeouts.builder()
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/network_security_perimeter_profile#read DataAzurermNetworkSecurityPerimeterProfile#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/network_security_perimeter_profile#read DataAzurermNetworkSecurityPerimeterProfile#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference <a name="DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_network_security_perimeter_profile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference;

new DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeouts">DataAzurermNetworkSecurityPerimeterProfileTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataAzurermNetworkSecurityPerimeterProfileTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeouts">DataAzurermNetworkSecurityPerimeterProfileTimeouts</a>

---



