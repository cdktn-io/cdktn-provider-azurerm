# `dataAzurermOracleAutonomousDatabaseCloneFromDatabase` Submodule <a name="`dataAzurermOracleAutonomousDatabaseCloneFromDatabase` Submodule" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermOracleAutonomousDatabaseCloneFromDatabase <a name="DataAzurermOracleAutonomousDatabaseCloneFromDatabase" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/oracle_autonomous_database_clone_from_database azurerm_oracle_autonomous_database_clone_from_database}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_oracle_autonomous_database_clone_from_database.DataAzurermOracleAutonomousDatabaseCloneFromDatabase;

DataAzurermOracleAutonomousDatabaseCloneFromDatabase.Builder.create(Construct scope, java.lang.String id)
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
//  .timeouts(DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/oracle_autonomous_database_clone_from_database#name DataAzurermOracleAutonomousDatabaseCloneFromDatabase#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/oracle_autonomous_database_clone_from_database#resource_group_name DataAzurermOracleAutonomousDatabaseCloneFromDatabase#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/oracle_autonomous_database_clone_from_database#id DataAzurermOracleAutonomousDatabaseCloneFromDatabase#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeouts">DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/oracle_autonomous_database_clone_from_database#name DataAzurermOracleAutonomousDatabaseCloneFromDatabase#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/oracle_autonomous_database_clone_from_database#resource_group_name DataAzurermOracleAutonomousDatabaseCloneFromDatabase#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/oracle_autonomous_database_clone_from_database#id DataAzurermOracleAutonomousDatabaseCloneFromDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeouts">DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/oracle_autonomous_database_clone_from_database#timeouts DataAzurermOracleAutonomousDatabaseCloneFromDatabase#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.putTimeouts"></a>

```java
public void putTimeouts(DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeouts">DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAzurermOracleAutonomousDatabaseCloneFromDatabase resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.isConstruct"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_oracle_autonomous_database_clone_from_database.DataAzurermOracleAutonomousDatabaseCloneFromDatabase;

DataAzurermOracleAutonomousDatabaseCloneFromDatabase.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.isTerraformElement"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_oracle_autonomous_database_clone_from_database.DataAzurermOracleAutonomousDatabaseCloneFromDatabase;

DataAzurermOracleAutonomousDatabaseCloneFromDatabase.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.isTerraformDataSource"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_oracle_autonomous_database_clone_from_database.DataAzurermOracleAutonomousDatabaseCloneFromDatabase;

DataAzurermOracleAutonomousDatabaseCloneFromDatabase.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.generateConfigForImport"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_oracle_autonomous_database_clone_from_database.DataAzurermOracleAutonomousDatabaseCloneFromDatabase;

DataAzurermOracleAutonomousDatabaseCloneFromDatabase.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAzurermOracleAutonomousDatabaseCloneFromDatabase.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAzurermOracleAutonomousDatabaseCloneFromDatabase resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAzurermOracleAutonomousDatabaseCloneFromDatabase to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAzurermOracleAutonomousDatabaseCloneFromDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/oracle_autonomous_database_clone_from_database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAzurermOracleAutonomousDatabaseCloneFromDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.actualUsedDataStorageSizeInTb">actualUsedDataStorageSizeInTb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.allocatedStorageSizeInTb">allocatedStorageSizeInTb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.allowedIpAddresses">allowedIpAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.autoScalingEnabled">autoScalingEnabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.autoScalingForStorageEnabled">autoScalingForStorageEnabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.availableUpgradeVersions">availableUpgradeVersions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.backupRetentionPeriodInDays">backupRetentionPeriodInDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.characterSet">characterSet</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.computeCount">computeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.computeModel">computeModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.connectionStrings">connectionStrings</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.cpuCoreCount">cpuCoreCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.customerContacts">customerContacts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.databaseVersion">databaseVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.databaseWorkload">databaseWorkload</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.dataStorageSizeInGb">dataStorageSizeInGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.dataStorageSizeInTb">dataStorageSizeInTb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.failedDataRecoveryInSeconds">failedDataRecoveryInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.inMemoryAreaInGb">inMemoryAreaInGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.licenseModel">licenseModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.lifecycleState">lifecycleState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.localAdgAutoFailoverMaxDataLossLimitInSeconds">localAdgAutoFailoverMaxDataLossLimitInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.localDataGuardEnabled">localDataGuardEnabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.longTermBackupSchedule">longTermBackupSchedule</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleList">DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.memoryPerOracleComputeUnitInGb">memoryPerOracleComputeUnitInGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.mtlsConnectionRequired">mtlsConnectionRequired</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.nationalCharacterSet">nationalCharacterSet</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.nextLongTermBackupTimestamp">nextLongTermBackupTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.ocid">ocid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.ociUrl">ociUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.peerDatabaseIds">peerDatabaseIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.preview">preview</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.previewVersionWithServiceTermsAccepted">previewVersionWithServiceTermsAccepted</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.privateEndpointIp">privateEndpointIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.privateEndpointLabel">privateEndpointLabel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.privateEndpointUrl">privateEndpointUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.provisionableCpus">provisionableCpus</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.reconnectCloneEnabled">reconnectCloneEnabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.refreshableClone">refreshableClone</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.refreshableStatus">refreshableStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.remoteDataGuardEnabled">remoteDataGuardEnabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.serviceConsoleUrl">serviceConsoleUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.sourceAutonomousDatabaseId">sourceAutonomousDatabaseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.sqlWebDeveloperUrl">sqlWebDeveloperUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.supportedRegionsToCloneTo">supportedRegionsToCloneTo</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.tags">tags</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.timeCreatedInUtc">timeCreatedInUtc</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.timeDataGuardRoleChangedInUtc">timeDataGuardRoleChangedInUtc</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.timeDeletionOfFreeAutonomousDatabaseInUtc">timeDeletionOfFreeAutonomousDatabaseInUtc</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.timeLocalDataGuardEnabledInUtc">timeLocalDataGuardEnabledInUtc</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.timeMaintenanceBeginInUtc">timeMaintenanceBeginInUtc</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.timeMaintenanceEndInUtc">timeMaintenanceEndInUtc</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.timeOfLastFailoverInUtc">timeOfLastFailoverInUtc</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.timeOfLastRefreshInUtc">timeOfLastRefreshInUtc</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.timeOfLastRefreshPointInUtc">timeOfLastRefreshPointInUtc</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.timeOfLastSwitchoverInUtc">timeOfLastSwitchoverInUtc</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference">DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.timeReclamationOfFreeAutonomousDatabaseInUtc">timeReclamationOfFreeAutonomousDatabaseInUtc</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.timeUntilReconnectInUtc">timeUntilReconnectInUtc</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.usedDataStorageSizeInGb">usedDataStorageSizeInGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.usedDataStorageSizeInTb">usedDataStorageSizeInTb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.virtualNetworkId">virtualNetworkId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeouts">DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `actualUsedDataStorageSizeInTb`<sup>Required</sup> <a name="actualUsedDataStorageSizeInTb" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.actualUsedDataStorageSizeInTb"></a>

```java
public java.lang.Number getActualUsedDataStorageSizeInTb();
```

- *Type:* java.lang.Number

---

##### `allocatedStorageSizeInTb`<sup>Required</sup> <a name="allocatedStorageSizeInTb" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.allocatedStorageSizeInTb"></a>

```java
public java.lang.Number getAllocatedStorageSizeInTb();
```

- *Type:* java.lang.Number

---

##### `allowedIpAddresses`<sup>Required</sup> <a name="allowedIpAddresses" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.allowedIpAddresses"></a>

```java
public java.util.List<java.lang.String> getAllowedIpAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `autoScalingEnabled`<sup>Required</sup> <a name="autoScalingEnabled" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.autoScalingEnabled"></a>

```java
public IResolvable getAutoScalingEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `autoScalingForStorageEnabled`<sup>Required</sup> <a name="autoScalingForStorageEnabled" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.autoScalingForStorageEnabled"></a>

```java
public IResolvable getAutoScalingForStorageEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `availableUpgradeVersions`<sup>Required</sup> <a name="availableUpgradeVersions" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.availableUpgradeVersions"></a>

```java
public java.util.List<java.lang.String> getAvailableUpgradeVersions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `backupRetentionPeriodInDays`<sup>Required</sup> <a name="backupRetentionPeriodInDays" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.backupRetentionPeriodInDays"></a>

```java
public java.lang.Number getBackupRetentionPeriodInDays();
```

- *Type:* java.lang.Number

---

##### `characterSet`<sup>Required</sup> <a name="characterSet" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.characterSet"></a>

```java
public java.lang.String getCharacterSet();
```

- *Type:* java.lang.String

---

##### `computeCount`<sup>Required</sup> <a name="computeCount" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.computeCount"></a>

```java
public java.lang.Number getComputeCount();
```

- *Type:* java.lang.Number

---

##### `computeModel`<sup>Required</sup> <a name="computeModel" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.computeModel"></a>

```java
public java.lang.String getComputeModel();
```

- *Type:* java.lang.String

---

##### `connectionStrings`<sup>Required</sup> <a name="connectionStrings" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.connectionStrings"></a>

```java
public java.util.List<java.lang.String> getConnectionStrings();
```

- *Type:* java.util.List<java.lang.String>

---

##### `cpuCoreCount`<sup>Required</sup> <a name="cpuCoreCount" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.cpuCoreCount"></a>

```java
public java.lang.Number getCpuCoreCount();
```

- *Type:* java.lang.Number

---

##### `customerContacts`<sup>Required</sup> <a name="customerContacts" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.customerContacts"></a>

```java
public java.util.List<java.lang.String> getCustomerContacts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `databaseVersion`<sup>Required</sup> <a name="databaseVersion" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.databaseVersion"></a>

```java
public java.lang.String getDatabaseVersion();
```

- *Type:* java.lang.String

---

##### `databaseWorkload`<sup>Required</sup> <a name="databaseWorkload" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.databaseWorkload"></a>

```java
public java.lang.String getDatabaseWorkload();
```

- *Type:* java.lang.String

---

##### `dataStorageSizeInGb`<sup>Required</sup> <a name="dataStorageSizeInGb" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.dataStorageSizeInGb"></a>

```java
public java.lang.Number getDataStorageSizeInGb();
```

- *Type:* java.lang.Number

---

##### `dataStorageSizeInTb`<sup>Required</sup> <a name="dataStorageSizeInTb" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.dataStorageSizeInTb"></a>

```java
public java.lang.Number getDataStorageSizeInTb();
```

- *Type:* java.lang.Number

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `failedDataRecoveryInSeconds`<sup>Required</sup> <a name="failedDataRecoveryInSeconds" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.failedDataRecoveryInSeconds"></a>

```java
public java.lang.Number getFailedDataRecoveryInSeconds();
```

- *Type:* java.lang.Number

---

##### `inMemoryAreaInGb`<sup>Required</sup> <a name="inMemoryAreaInGb" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.inMemoryAreaInGb"></a>

```java
public java.lang.Number getInMemoryAreaInGb();
```

- *Type:* java.lang.Number

---

##### `licenseModel`<sup>Required</sup> <a name="licenseModel" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.licenseModel"></a>

```java
public java.lang.String getLicenseModel();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `lifecycleState`<sup>Required</sup> <a name="lifecycleState" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.lifecycleState"></a>

```java
public java.lang.String getLifecycleState();
```

- *Type:* java.lang.String

---

##### `localAdgAutoFailoverMaxDataLossLimitInSeconds`<sup>Required</sup> <a name="localAdgAutoFailoverMaxDataLossLimitInSeconds" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.localAdgAutoFailoverMaxDataLossLimitInSeconds"></a>

```java
public java.lang.Number getLocalAdgAutoFailoverMaxDataLossLimitInSeconds();
```

- *Type:* java.lang.Number

---

##### `localDataGuardEnabled`<sup>Required</sup> <a name="localDataGuardEnabled" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.localDataGuardEnabled"></a>

```java
public IResolvable getLocalDataGuardEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `longTermBackupSchedule`<sup>Required</sup> <a name="longTermBackupSchedule" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.longTermBackupSchedule"></a>

```java
public DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleList getLongTermBackupSchedule();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleList">DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleList</a>

---

##### `memoryPerOracleComputeUnitInGb`<sup>Required</sup> <a name="memoryPerOracleComputeUnitInGb" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.memoryPerOracleComputeUnitInGb"></a>

```java
public java.lang.Number getMemoryPerOracleComputeUnitInGb();
```

- *Type:* java.lang.Number

---

##### `mtlsConnectionRequired`<sup>Required</sup> <a name="mtlsConnectionRequired" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.mtlsConnectionRequired"></a>

```java
public IResolvable getMtlsConnectionRequired();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `nationalCharacterSet`<sup>Required</sup> <a name="nationalCharacterSet" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.nationalCharacterSet"></a>

```java
public java.lang.String getNationalCharacterSet();
```

- *Type:* java.lang.String

---

##### `nextLongTermBackupTimestamp`<sup>Required</sup> <a name="nextLongTermBackupTimestamp" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.nextLongTermBackupTimestamp"></a>

```java
public java.lang.String getNextLongTermBackupTimestamp();
```

- *Type:* java.lang.String

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.ocid"></a>

```java
public java.lang.String getOcid();
```

- *Type:* java.lang.String

---

##### `ociUrl`<sup>Required</sup> <a name="ociUrl" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.ociUrl"></a>

```java
public java.lang.String getOciUrl();
```

- *Type:* java.lang.String

---

##### `peerDatabaseIds`<sup>Required</sup> <a name="peerDatabaseIds" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.peerDatabaseIds"></a>

```java
public java.util.List<java.lang.String> getPeerDatabaseIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `preview`<sup>Required</sup> <a name="preview" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.preview"></a>

```java
public IResolvable getPreview();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `previewVersionWithServiceTermsAccepted`<sup>Required</sup> <a name="previewVersionWithServiceTermsAccepted" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.previewVersionWithServiceTermsAccepted"></a>

```java
public IResolvable getPreviewVersionWithServiceTermsAccepted();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `privateEndpointIp`<sup>Required</sup> <a name="privateEndpointIp" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.privateEndpointIp"></a>

```java
public java.lang.String getPrivateEndpointIp();
```

- *Type:* java.lang.String

---

##### `privateEndpointLabel`<sup>Required</sup> <a name="privateEndpointLabel" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.privateEndpointLabel"></a>

```java
public java.lang.String getPrivateEndpointLabel();
```

- *Type:* java.lang.String

---

##### `privateEndpointUrl`<sup>Required</sup> <a name="privateEndpointUrl" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.privateEndpointUrl"></a>

```java
public java.lang.String getPrivateEndpointUrl();
```

- *Type:* java.lang.String

---

##### `provisionableCpus`<sup>Required</sup> <a name="provisionableCpus" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.provisionableCpus"></a>

```java
public java.util.List<java.lang.Number> getProvisionableCpus();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `reconnectCloneEnabled`<sup>Required</sup> <a name="reconnectCloneEnabled" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.reconnectCloneEnabled"></a>

```java
public IResolvable getReconnectCloneEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `refreshableClone`<sup>Required</sup> <a name="refreshableClone" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.refreshableClone"></a>

```java
public IResolvable getRefreshableClone();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `refreshableStatus`<sup>Required</sup> <a name="refreshableStatus" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.refreshableStatus"></a>

```java
public java.lang.String getRefreshableStatus();
```

- *Type:* java.lang.String

---

##### `remoteDataGuardEnabled`<sup>Required</sup> <a name="remoteDataGuardEnabled" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.remoteDataGuardEnabled"></a>

```java
public IResolvable getRemoteDataGuardEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `serviceConsoleUrl`<sup>Required</sup> <a name="serviceConsoleUrl" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.serviceConsoleUrl"></a>

```java
public java.lang.String getServiceConsoleUrl();
```

- *Type:* java.lang.String

---

##### `sourceAutonomousDatabaseId`<sup>Required</sup> <a name="sourceAutonomousDatabaseId" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.sourceAutonomousDatabaseId"></a>

```java
public java.lang.String getSourceAutonomousDatabaseId();
```

- *Type:* java.lang.String

---

##### `sqlWebDeveloperUrl`<sup>Required</sup> <a name="sqlWebDeveloperUrl" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.sqlWebDeveloperUrl"></a>

```java
public java.lang.String getSqlWebDeveloperUrl();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `supportedRegionsToCloneTo`<sup>Required</sup> <a name="supportedRegionsToCloneTo" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.supportedRegionsToCloneTo"></a>

```java
public java.util.List<java.lang.String> getSupportedRegionsToCloneTo();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.tags"></a>

```java
public StringMap getTags();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeCreatedInUtc`<sup>Required</sup> <a name="timeCreatedInUtc" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.timeCreatedInUtc"></a>

```java
public java.lang.String getTimeCreatedInUtc();
```

- *Type:* java.lang.String

---

##### `timeDataGuardRoleChangedInUtc`<sup>Required</sup> <a name="timeDataGuardRoleChangedInUtc" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.timeDataGuardRoleChangedInUtc"></a>

```java
public java.lang.String getTimeDataGuardRoleChangedInUtc();
```

- *Type:* java.lang.String

---

##### `timeDeletionOfFreeAutonomousDatabaseInUtc`<sup>Required</sup> <a name="timeDeletionOfFreeAutonomousDatabaseInUtc" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.timeDeletionOfFreeAutonomousDatabaseInUtc"></a>

```java
public java.lang.String getTimeDeletionOfFreeAutonomousDatabaseInUtc();
```

- *Type:* java.lang.String

---

##### `timeLocalDataGuardEnabledInUtc`<sup>Required</sup> <a name="timeLocalDataGuardEnabledInUtc" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.timeLocalDataGuardEnabledInUtc"></a>

```java
public java.lang.String getTimeLocalDataGuardEnabledInUtc();
```

- *Type:* java.lang.String

---

##### `timeMaintenanceBeginInUtc`<sup>Required</sup> <a name="timeMaintenanceBeginInUtc" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.timeMaintenanceBeginInUtc"></a>

```java
public java.lang.String getTimeMaintenanceBeginInUtc();
```

- *Type:* java.lang.String

---

##### `timeMaintenanceEndInUtc`<sup>Required</sup> <a name="timeMaintenanceEndInUtc" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.timeMaintenanceEndInUtc"></a>

```java
public java.lang.String getTimeMaintenanceEndInUtc();
```

- *Type:* java.lang.String

---

##### `timeOfLastFailoverInUtc`<sup>Required</sup> <a name="timeOfLastFailoverInUtc" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.timeOfLastFailoverInUtc"></a>

```java
public java.lang.String getTimeOfLastFailoverInUtc();
```

- *Type:* java.lang.String

---

##### `timeOfLastRefreshInUtc`<sup>Required</sup> <a name="timeOfLastRefreshInUtc" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.timeOfLastRefreshInUtc"></a>

```java
public java.lang.String getTimeOfLastRefreshInUtc();
```

- *Type:* java.lang.String

---

##### `timeOfLastRefreshPointInUtc`<sup>Required</sup> <a name="timeOfLastRefreshPointInUtc" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.timeOfLastRefreshPointInUtc"></a>

```java
public java.lang.String getTimeOfLastRefreshPointInUtc();
```

- *Type:* java.lang.String

---

##### `timeOfLastSwitchoverInUtc`<sup>Required</sup> <a name="timeOfLastSwitchoverInUtc" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.timeOfLastSwitchoverInUtc"></a>

```java
public java.lang.String getTimeOfLastSwitchoverInUtc();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.timeouts"></a>

```java
public DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference">DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference</a>

---

##### `timeReclamationOfFreeAutonomousDatabaseInUtc`<sup>Required</sup> <a name="timeReclamationOfFreeAutonomousDatabaseInUtc" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.timeReclamationOfFreeAutonomousDatabaseInUtc"></a>

```java
public java.lang.String getTimeReclamationOfFreeAutonomousDatabaseInUtc();
```

- *Type:* java.lang.String

---

##### `timeUntilReconnectInUtc`<sup>Required</sup> <a name="timeUntilReconnectInUtc" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.timeUntilReconnectInUtc"></a>

```java
public java.lang.String getTimeUntilReconnectInUtc();
```

- *Type:* java.lang.String

---

##### `usedDataStorageSizeInGb`<sup>Required</sup> <a name="usedDataStorageSizeInGb" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.usedDataStorageSizeInGb"></a>

```java
public java.lang.Number getUsedDataStorageSizeInGb();
```

- *Type:* java.lang.Number

---

##### `usedDataStorageSizeInTb`<sup>Required</sup> <a name="usedDataStorageSizeInTb" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.usedDataStorageSizeInTb"></a>

```java
public java.lang.Number getUsedDataStorageSizeInTb();
```

- *Type:* java.lang.Number

---

##### `virtualNetworkId`<sup>Required</sup> <a name="virtualNetworkId" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.virtualNetworkId"></a>

```java
public java.lang.String getVirtualNetworkId();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.timeoutsInput"></a>

```java
public IResolvable|DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeouts">DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermOracleAutonomousDatabaseCloneFromDatabaseConfig <a name="DataAzurermOracleAutonomousDatabaseCloneFromDatabaseConfig" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseConfig.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_oracle_autonomous_database_clone_from_database.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseConfig;

DataAzurermOracleAutonomousDatabaseCloneFromDatabaseConfig.builder()
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
//  .timeouts(DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/oracle_autonomous_database_clone_from_database#name DataAzurermOracleAutonomousDatabaseCloneFromDatabase#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/oracle_autonomous_database_clone_from_database#resource_group_name DataAzurermOracleAutonomousDatabaseCloneFromDatabase#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/oracle_autonomous_database_clone_from_database#id DataAzurermOracleAutonomousDatabaseCloneFromDatabase#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeouts">DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/oracle_autonomous_database_clone_from_database#name DataAzurermOracleAutonomousDatabaseCloneFromDatabase#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/oracle_autonomous_database_clone_from_database#resource_group_name DataAzurermOracleAutonomousDatabaseCloneFromDatabase#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/oracle_autonomous_database_clone_from_database#id DataAzurermOracleAutonomousDatabaseCloneFromDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseConfig.property.timeouts"></a>

```java
public DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeouts">DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/oracle_autonomous_database_clone_from_database#timeouts DataAzurermOracleAutonomousDatabaseCloneFromDatabase#timeouts}

---

### DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupSchedule <a name="DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupSchedule" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupSchedule.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_oracle_autonomous_database_clone_from_database.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupSchedule;

DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupSchedule.builder()
    .build();
```


### DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeouts <a name="DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeouts" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeouts.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_oracle_autonomous_database_clone_from_database.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeouts;

DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeouts.builder()
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/oracle_autonomous_database_clone_from_database#read DataAzurermOracleAutonomousDatabaseCloneFromDatabase#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/oracle_autonomous_database_clone_from_database#read DataAzurermOracleAutonomousDatabaseCloneFromDatabase#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleList <a name="DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleList" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleList.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_oracle_autonomous_database_clone_from_database.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleList;

new DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleList.get"></a>

```java
public DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference <a name="DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_oracle_autonomous_database_clone_from_database.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference;

new DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.property.enabled">enabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.property.repeatCadence">repeatCadence</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.property.retentionPeriodInDays">retentionPeriodInDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.property.timeOfBackupInUtc">timeOfBackupInUtc</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupSchedule">DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `repeatCadence`<sup>Required</sup> <a name="repeatCadence" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.property.repeatCadence"></a>

```java
public java.lang.String getRepeatCadence();
```

- *Type:* java.lang.String

---

##### `retentionPeriodInDays`<sup>Required</sup> <a name="retentionPeriodInDays" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.property.retentionPeriodInDays"></a>

```java
public java.lang.Number getRetentionPeriodInDays();
```

- *Type:* java.lang.Number

---

##### `timeOfBackupInUtc`<sup>Required</sup> <a name="timeOfBackupInUtc" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.property.timeOfBackupInUtc"></a>

```java
public java.lang.String getTimeOfBackupInUtc();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.property.internalValue"></a>

```java
public DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupSchedule getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupSchedule">DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupSchedule</a>

---


### DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference <a name="DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_oracle_autonomous_database_clone_from_database.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference;

new DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeouts">DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeouts">DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeouts</a>

---



