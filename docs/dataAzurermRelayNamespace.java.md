# `dataAzurermRelayNamespace` Submodule <a name="`dataAzurermRelayNamespace` Submodule" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermRelayNamespace <a name="DataAzurermRelayNamespace" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/data-sources/relay_namespace azurerm_relay_namespace}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_relay_namespace.DataAzurermRelayNamespace;

DataAzurermRelayNamespace.Builder.create(Construct scope, java.lang.String id)
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
//  .timeouts(DataAzurermRelayNamespaceTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/data-sources/relay_namespace#name DataAzurermRelayNamespace#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/data-sources/relay_namespace#resource_group_name DataAzurermRelayNamespace#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/data-sources/relay_namespace#id DataAzurermRelayNamespace#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeouts">DataAzurermRelayNamespaceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/data-sources/relay_namespace#name DataAzurermRelayNamespace#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/data-sources/relay_namespace#resource_group_name DataAzurermRelayNamespace#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/data-sources/relay_namespace#id DataAzurermRelayNamespace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeouts">DataAzurermRelayNamespaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/data-sources/relay_namespace#timeouts DataAzurermRelayNamespace#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.putTimeouts"></a>

```java
public void putTimeouts(DataAzurermRelayNamespaceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeouts">DataAzurermRelayNamespaceTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAzurermRelayNamespace resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.isConstruct"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_relay_namespace.DataAzurermRelayNamespace;

DataAzurermRelayNamespace.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.isTerraformElement"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_relay_namespace.DataAzurermRelayNamespace;

DataAzurermRelayNamespace.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.isTerraformDataSource"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_relay_namespace.DataAzurermRelayNamespace;

DataAzurermRelayNamespace.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.generateConfigForImport"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_relay_namespace.DataAzurermRelayNamespace;

DataAzurermRelayNamespace.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAzurermRelayNamespace.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAzurermRelayNamespace resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAzurermRelayNamespace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAzurermRelayNamespace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/data-sources/relay_namespace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAzurermRelayNamespace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.metricId">metricId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.primaryConnectionString">primaryConnectionString</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.primaryKey">primaryKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.secondaryConnectionString">secondaryConnectionString</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.secondaryKey">secondaryKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.skuName">skuName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.tags">tags</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference">DataAzurermRelayNamespaceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeouts">DataAzurermRelayNamespaceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `metricId`<sup>Required</sup> <a name="metricId" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.metricId"></a>

```java
public java.lang.String getMetricId();
```

- *Type:* java.lang.String

---

##### `primaryConnectionString`<sup>Required</sup> <a name="primaryConnectionString" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.primaryConnectionString"></a>

```java
public java.lang.String getPrimaryConnectionString();
```

- *Type:* java.lang.String

---

##### `primaryKey`<sup>Required</sup> <a name="primaryKey" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.primaryKey"></a>

```java
public java.lang.String getPrimaryKey();
```

- *Type:* java.lang.String

---

##### `secondaryConnectionString`<sup>Required</sup> <a name="secondaryConnectionString" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.secondaryConnectionString"></a>

```java
public java.lang.String getSecondaryConnectionString();
```

- *Type:* java.lang.String

---

##### `secondaryKey`<sup>Required</sup> <a name="secondaryKey" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.secondaryKey"></a>

```java
public java.lang.String getSecondaryKey();
```

- *Type:* java.lang.String

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.skuName"></a>

```java
public java.lang.String getSkuName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.tags"></a>

```java
public StringMap getTags();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.timeouts"></a>

```java
public DataAzurermRelayNamespaceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference">DataAzurermRelayNamespaceTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.timeoutsInput"></a>

```java
public IResolvable|DataAzurermRelayNamespaceTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeouts">DataAzurermRelayNamespaceTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermRelayNamespaceConfig <a name="DataAzurermRelayNamespaceConfig" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceConfig.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_relay_namespace.DataAzurermRelayNamespaceConfig;

DataAzurermRelayNamespaceConfig.builder()
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
//  .timeouts(DataAzurermRelayNamespaceTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/data-sources/relay_namespace#name DataAzurermRelayNamespace#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/data-sources/relay_namespace#resource_group_name DataAzurermRelayNamespace#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/data-sources/relay_namespace#id DataAzurermRelayNamespace#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeouts">DataAzurermRelayNamespaceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/data-sources/relay_namespace#name DataAzurermRelayNamespace#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/data-sources/relay_namespace#resource_group_name DataAzurermRelayNamespace#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/data-sources/relay_namespace#id DataAzurermRelayNamespace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceConfig.property.timeouts"></a>

```java
public DataAzurermRelayNamespaceTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeouts">DataAzurermRelayNamespaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/data-sources/relay_namespace#timeouts DataAzurermRelayNamespace#timeouts}

---

### DataAzurermRelayNamespaceTimeouts <a name="DataAzurermRelayNamespaceTimeouts" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeouts.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_relay_namespace.DataAzurermRelayNamespaceTimeouts;

DataAzurermRelayNamespaceTimeouts.builder()
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/data-sources/relay_namespace#read DataAzurermRelayNamespace#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/data-sources/relay_namespace#read DataAzurermRelayNamespace#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermRelayNamespaceTimeoutsOutputReference <a name="DataAzurermRelayNamespaceTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_relay_namespace.DataAzurermRelayNamespaceTimeoutsOutputReference;

new DataAzurermRelayNamespaceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeouts">DataAzurermRelayNamespaceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataAzurermRelayNamespaceTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeouts">DataAzurermRelayNamespaceTimeouts</a>

---



