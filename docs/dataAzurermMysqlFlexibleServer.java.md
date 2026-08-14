# `dataAzurermMysqlFlexibleServer` Submodule <a name="`dataAzurermMysqlFlexibleServer` Submodule" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermMysqlFlexibleServer <a name="DataAzurermMysqlFlexibleServer" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/mysql_flexible_server azurerm_mysql_flexible_server}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_mysql_flexible_server.DataAzurermMysqlFlexibleServer;

DataAzurermMysqlFlexibleServer.Builder.create(Construct scope, java.lang.String id)
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
//  .timeouts(DataAzurermMysqlFlexibleServerTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/mysql_flexible_server#name DataAzurermMysqlFlexibleServer#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/mysql_flexible_server#resource_group_name DataAzurermMysqlFlexibleServer#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/mysql_flexible_server#id DataAzurermMysqlFlexibleServer#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeouts">DataAzurermMysqlFlexibleServerTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/mysql_flexible_server#name DataAzurermMysqlFlexibleServer#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/mysql_flexible_server#resource_group_name DataAzurermMysqlFlexibleServer#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/mysql_flexible_server#id DataAzurermMysqlFlexibleServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeouts">DataAzurermMysqlFlexibleServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/mysql_flexible_server#timeouts DataAzurermMysqlFlexibleServer#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.putTimeouts"></a>

```java
public void putTimeouts(DataAzurermMysqlFlexibleServerTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeouts">DataAzurermMysqlFlexibleServerTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAzurermMysqlFlexibleServer resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.isConstruct"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_mysql_flexible_server.DataAzurermMysqlFlexibleServer;

DataAzurermMysqlFlexibleServer.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.isTerraformElement"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_mysql_flexible_server.DataAzurermMysqlFlexibleServer;

DataAzurermMysqlFlexibleServer.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.isTerraformDataSource"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_mysql_flexible_server.DataAzurermMysqlFlexibleServer;

DataAzurermMysqlFlexibleServer.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.generateConfigForImport"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_mysql_flexible_server.DataAzurermMysqlFlexibleServer;

DataAzurermMysqlFlexibleServer.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAzurermMysqlFlexibleServer.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAzurermMysqlFlexibleServer resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAzurermMysqlFlexibleServer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAzurermMysqlFlexibleServer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/mysql_flexible_server#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAzurermMysqlFlexibleServer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.administratorLogin">administratorLogin</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.backupRetentionDays">backupRetentionDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.delegatedSubnetId">delegatedSubnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.fqdn">fqdn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.geoRedundantBackupEnabled">geoRedundantBackupEnabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.highAvailability">highAvailability</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityList">DataAzurermMysqlFlexibleServerHighAvailabilityList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowList">DataAzurermMysqlFlexibleServerMaintenanceWindowList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.privateDnsZoneId">privateDnsZoneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.replicaCapacity">replicaCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.replicationRole">replicationRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.restorePointInTime">restorePointInTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.skuName">skuName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.storage">storage</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageList">DataAzurermMysqlFlexibleServerStorageList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.tags">tags</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference">DataAzurermMysqlFlexibleServerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.zone">zone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeouts">DataAzurermMysqlFlexibleServerTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `administratorLogin`<sup>Required</sup> <a name="administratorLogin" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.administratorLogin"></a>

```java
public java.lang.String getAdministratorLogin();
```

- *Type:* java.lang.String

---

##### `backupRetentionDays`<sup>Required</sup> <a name="backupRetentionDays" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.backupRetentionDays"></a>

```java
public java.lang.Number getBackupRetentionDays();
```

- *Type:* java.lang.Number

---

##### `delegatedSubnetId`<sup>Required</sup> <a name="delegatedSubnetId" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.delegatedSubnetId"></a>

```java
public java.lang.String getDelegatedSubnetId();
```

- *Type:* java.lang.String

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.fqdn"></a>

```java
public java.lang.String getFqdn();
```

- *Type:* java.lang.String

---

##### `geoRedundantBackupEnabled`<sup>Required</sup> <a name="geoRedundantBackupEnabled" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.geoRedundantBackupEnabled"></a>

```java
public IResolvable getGeoRedundantBackupEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `highAvailability`<sup>Required</sup> <a name="highAvailability" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.highAvailability"></a>

```java
public DataAzurermMysqlFlexibleServerHighAvailabilityList getHighAvailability();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityList">DataAzurermMysqlFlexibleServerHighAvailabilityList</a>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `maintenanceWindow`<sup>Required</sup> <a name="maintenanceWindow" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.maintenanceWindow"></a>

```java
public DataAzurermMysqlFlexibleServerMaintenanceWindowList getMaintenanceWindow();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowList">DataAzurermMysqlFlexibleServerMaintenanceWindowList</a>

---

##### `privateDnsZoneId`<sup>Required</sup> <a name="privateDnsZoneId" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.privateDnsZoneId"></a>

```java
public java.lang.String getPrivateDnsZoneId();
```

- *Type:* java.lang.String

---

##### `publicNetworkAccessEnabled`<sup>Required</sup> <a name="publicNetworkAccessEnabled" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.publicNetworkAccessEnabled"></a>

```java
public IResolvable getPublicNetworkAccessEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `replicaCapacity`<sup>Required</sup> <a name="replicaCapacity" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.replicaCapacity"></a>

```java
public java.lang.Number getReplicaCapacity();
```

- *Type:* java.lang.Number

---

##### `replicationRole`<sup>Required</sup> <a name="replicationRole" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.replicationRole"></a>

```java
public java.lang.String getReplicationRole();
```

- *Type:* java.lang.String

---

##### `restorePointInTime`<sup>Required</sup> <a name="restorePointInTime" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.restorePointInTime"></a>

```java
public java.lang.String getRestorePointInTime();
```

- *Type:* java.lang.String

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.skuName"></a>

```java
public java.lang.String getSkuName();
```

- *Type:* java.lang.String

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.storage"></a>

```java
public DataAzurermMysqlFlexibleServerStorageList getStorage();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageList">DataAzurermMysqlFlexibleServerStorageList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.tags"></a>

```java
public StringMap getTags();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.timeouts"></a>

```java
public DataAzurermMysqlFlexibleServerTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference">DataAzurermMysqlFlexibleServerTimeoutsOutputReference</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.timeoutsInput"></a>

```java
public IResolvable|DataAzurermMysqlFlexibleServerTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeouts">DataAzurermMysqlFlexibleServerTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermMysqlFlexibleServerConfig <a name="DataAzurermMysqlFlexibleServerConfig" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerConfig.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_mysql_flexible_server.DataAzurermMysqlFlexibleServerConfig;

DataAzurermMysqlFlexibleServerConfig.builder()
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
//  .timeouts(DataAzurermMysqlFlexibleServerTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/mysql_flexible_server#name DataAzurermMysqlFlexibleServer#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/mysql_flexible_server#resource_group_name DataAzurermMysqlFlexibleServer#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/mysql_flexible_server#id DataAzurermMysqlFlexibleServer#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeouts">DataAzurermMysqlFlexibleServerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/mysql_flexible_server#name DataAzurermMysqlFlexibleServer#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/mysql_flexible_server#resource_group_name DataAzurermMysqlFlexibleServer#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/mysql_flexible_server#id DataAzurermMysqlFlexibleServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerConfig.property.timeouts"></a>

```java
public DataAzurermMysqlFlexibleServerTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeouts">DataAzurermMysqlFlexibleServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/mysql_flexible_server#timeouts DataAzurermMysqlFlexibleServer#timeouts}

---

### DataAzurermMysqlFlexibleServerHighAvailability <a name="DataAzurermMysqlFlexibleServerHighAvailability" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailability"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailability.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_mysql_flexible_server.DataAzurermMysqlFlexibleServerHighAvailability;

DataAzurermMysqlFlexibleServerHighAvailability.builder()
    .build();
```


### DataAzurermMysqlFlexibleServerMaintenanceWindow <a name="DataAzurermMysqlFlexibleServerMaintenanceWindow" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindow.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_mysql_flexible_server.DataAzurermMysqlFlexibleServerMaintenanceWindow;

DataAzurermMysqlFlexibleServerMaintenanceWindow.builder()
    .build();
```


### DataAzurermMysqlFlexibleServerStorage <a name="DataAzurermMysqlFlexibleServerStorage" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorage.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_mysql_flexible_server.DataAzurermMysqlFlexibleServerStorage;

DataAzurermMysqlFlexibleServerStorage.builder()
    .build();
```


### DataAzurermMysqlFlexibleServerTimeouts <a name="DataAzurermMysqlFlexibleServerTimeouts" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeouts.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_mysql_flexible_server.DataAzurermMysqlFlexibleServerTimeouts;

DataAzurermMysqlFlexibleServerTimeouts.builder()
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/mysql_flexible_server#read DataAzurermMysqlFlexibleServer#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/mysql_flexible_server#read DataAzurermMysqlFlexibleServer#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermMysqlFlexibleServerHighAvailabilityList <a name="DataAzurermMysqlFlexibleServerHighAvailabilityList" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityList.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_mysql_flexible_server.DataAzurermMysqlFlexibleServerHighAvailabilityList;

new DataAzurermMysqlFlexibleServerHighAvailabilityList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityList.get"></a>

```java
public DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference <a name="DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_mysql_flexible_server.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference;

new DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.property.standbyAvailabilityZone">standbyAvailabilityZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailability">DataAzurermMysqlFlexibleServerHighAvailability</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `standbyAvailabilityZone`<sup>Required</sup> <a name="standbyAvailabilityZone" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.property.standbyAvailabilityZone"></a>

```java
public java.lang.String getStandbyAvailabilityZone();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.property.internalValue"></a>

```java
public DataAzurermMysqlFlexibleServerHighAvailability getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailability">DataAzurermMysqlFlexibleServerHighAvailability</a>

---


### DataAzurermMysqlFlexibleServerMaintenanceWindowList <a name="DataAzurermMysqlFlexibleServerMaintenanceWindowList" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowList.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_mysql_flexible_server.DataAzurermMysqlFlexibleServerMaintenanceWindowList;

new DataAzurermMysqlFlexibleServerMaintenanceWindowList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowList.get"></a>

```java
public DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference <a name="DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_mysql_flexible_server.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference;

new DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.property.dayOfWeek">dayOfWeek</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.property.startHour">startHour</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.property.startMinute">startMinute</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindow">DataAzurermMysqlFlexibleServerMaintenanceWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.property.dayOfWeek"></a>

```java
public java.lang.Number getDayOfWeek();
```

- *Type:* java.lang.Number

---

##### `startHour`<sup>Required</sup> <a name="startHour" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.property.startHour"></a>

```java
public java.lang.Number getStartHour();
```

- *Type:* java.lang.Number

---

##### `startMinute`<sup>Required</sup> <a name="startMinute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.property.startMinute"></a>

```java
public java.lang.Number getStartMinute();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.property.internalValue"></a>

```java
public DataAzurermMysqlFlexibleServerMaintenanceWindow getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindow">DataAzurermMysqlFlexibleServerMaintenanceWindow</a>

---


### DataAzurermMysqlFlexibleServerStorageList <a name="DataAzurermMysqlFlexibleServerStorageList" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageList.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_mysql_flexible_server.DataAzurermMysqlFlexibleServerStorageList;

new DataAzurermMysqlFlexibleServerStorageList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageList.get"></a>

```java
public DataAzurermMysqlFlexibleServerStorageOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermMysqlFlexibleServerStorageOutputReference <a name="DataAzurermMysqlFlexibleServerStorageOutputReference" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_mysql_flexible_server.DataAzurermMysqlFlexibleServerStorageOutputReference;

new DataAzurermMysqlFlexibleServerStorageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.property.autoGrowEnabled">autoGrowEnabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.property.iops">iops</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.property.ioScalingEnabled">ioScalingEnabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.property.sizeGb">sizeGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorage">DataAzurermMysqlFlexibleServerStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autoGrowEnabled`<sup>Required</sup> <a name="autoGrowEnabled" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.property.autoGrowEnabled"></a>

```java
public IResolvable getAutoGrowEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.property.iops"></a>

```java
public java.lang.Number getIops();
```

- *Type:* java.lang.Number

---

##### `ioScalingEnabled`<sup>Required</sup> <a name="ioScalingEnabled" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.property.ioScalingEnabled"></a>

```java
public IResolvable getIoScalingEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `sizeGb`<sup>Required</sup> <a name="sizeGb" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.property.sizeGb"></a>

```java
public java.lang.Number getSizeGb();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.property.internalValue"></a>

```java
public DataAzurermMysqlFlexibleServerStorage getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorage">DataAzurermMysqlFlexibleServerStorage</a>

---


### DataAzurermMysqlFlexibleServerTimeoutsOutputReference <a name="DataAzurermMysqlFlexibleServerTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_mysql_flexible_server.DataAzurermMysqlFlexibleServerTimeoutsOutputReference;

new DataAzurermMysqlFlexibleServerTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeouts">DataAzurermMysqlFlexibleServerTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataAzurermMysqlFlexibleServerTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeouts">DataAzurermMysqlFlexibleServerTimeouts</a>

---



