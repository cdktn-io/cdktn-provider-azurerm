# `dataAzurermStorageTableEntity` Submodule <a name="`dataAzurermStorageTableEntity` Submodule" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermStorageTableEntity <a name="DataAzurermStorageTableEntity" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_table_entity azurerm_storage_table_entity}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_storage_table_entity.DataAzurermStorageTableEntity;

DataAzurermStorageTableEntity.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .partitionKey(java.lang.String)
    .rowKey(java.lang.String)
    .storageTableId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DataAzurermStorageTableEntityTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.Initializer.parameter.partitionKey">partitionKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_table_entity#partition_key DataAzurermStorageTableEntity#partition_key}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.Initializer.parameter.rowKey">rowKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_table_entity#row_key DataAzurermStorageTableEntity#row_key}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.Initializer.parameter.storageTableId">storageTableId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_table_entity#storage_table_id DataAzurermStorageTableEntity#storage_table_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_table_entity#id DataAzurermStorageTableEntity#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeouts">DataAzurermStorageTableEntityTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `partitionKey`<sup>Required</sup> <a name="partitionKey" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.Initializer.parameter.partitionKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_table_entity#partition_key DataAzurermStorageTableEntity#partition_key}.

---

##### `rowKey`<sup>Required</sup> <a name="rowKey" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.Initializer.parameter.rowKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_table_entity#row_key DataAzurermStorageTableEntity#row_key}.

---

##### `storageTableId`<sup>Required</sup> <a name="storageTableId" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.Initializer.parameter.storageTableId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_table_entity#storage_table_id DataAzurermStorageTableEntity#storage_table_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_table_entity#id DataAzurermStorageTableEntity#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeouts">DataAzurermStorageTableEntityTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_table_entity#timeouts DataAzurermStorageTableEntity#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.putTimeouts"></a>

```java
public void putTimeouts(DataAzurermStorageTableEntityTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeouts">DataAzurermStorageTableEntityTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAzurermStorageTableEntity resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.isConstruct"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_storage_table_entity.DataAzurermStorageTableEntity;

DataAzurermStorageTableEntity.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.isTerraformElement"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_storage_table_entity.DataAzurermStorageTableEntity;

DataAzurermStorageTableEntity.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.isTerraformDataSource"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_storage_table_entity.DataAzurermStorageTableEntity;

DataAzurermStorageTableEntity.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.generateConfigForImport"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_storage_table_entity.DataAzurermStorageTableEntity;

DataAzurermStorageTableEntity.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAzurermStorageTableEntity.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAzurermStorageTableEntity resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAzurermStorageTableEntity to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAzurermStorageTableEntity that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_table_entity#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAzurermStorageTableEntity to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.entity">entity</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference">DataAzurermStorageTableEntityTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.partitionKeyInput">partitionKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.rowKeyInput">rowKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.storageTableIdInput">storageTableIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeouts">DataAzurermStorageTableEntityTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.partitionKey">partitionKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.rowKey">rowKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.storageTableId">storageTableId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `entity`<sup>Required</sup> <a name="entity" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.entity"></a>

```java
public StringMap getEntity();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.timeouts"></a>

```java
public DataAzurermStorageTableEntityTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference">DataAzurermStorageTableEntityTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `partitionKeyInput`<sup>Optional</sup> <a name="partitionKeyInput" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.partitionKeyInput"></a>

```java
public java.lang.String getPartitionKeyInput();
```

- *Type:* java.lang.String

---

##### `rowKeyInput`<sup>Optional</sup> <a name="rowKeyInput" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.rowKeyInput"></a>

```java
public java.lang.String getRowKeyInput();
```

- *Type:* java.lang.String

---

##### `storageTableIdInput`<sup>Optional</sup> <a name="storageTableIdInput" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.storageTableIdInput"></a>

```java
public java.lang.String getStorageTableIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.timeoutsInput"></a>

```java
public IResolvable|DataAzurermStorageTableEntityTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeouts">DataAzurermStorageTableEntityTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `partitionKey`<sup>Required</sup> <a name="partitionKey" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.partitionKey"></a>

```java
public java.lang.String getPartitionKey();
```

- *Type:* java.lang.String

---

##### `rowKey`<sup>Required</sup> <a name="rowKey" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.rowKey"></a>

```java
public java.lang.String getRowKey();
```

- *Type:* java.lang.String

---

##### `storageTableId`<sup>Required</sup> <a name="storageTableId" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.storageTableId"></a>

```java
public java.lang.String getStorageTableId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermStorageTableEntityConfig <a name="DataAzurermStorageTableEntityConfig" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityConfig.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_storage_table_entity.DataAzurermStorageTableEntityConfig;

DataAzurermStorageTableEntityConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .partitionKey(java.lang.String)
    .rowKey(java.lang.String)
    .storageTableId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DataAzurermStorageTableEntityTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityConfig.property.partitionKey">partitionKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_table_entity#partition_key DataAzurermStorageTableEntity#partition_key}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityConfig.property.rowKey">rowKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_table_entity#row_key DataAzurermStorageTableEntity#row_key}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityConfig.property.storageTableId">storageTableId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_table_entity#storage_table_id DataAzurermStorageTableEntity#storage_table_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_table_entity#id DataAzurermStorageTableEntity#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeouts">DataAzurermStorageTableEntityTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `partitionKey`<sup>Required</sup> <a name="partitionKey" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityConfig.property.partitionKey"></a>

```java
public java.lang.String getPartitionKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_table_entity#partition_key DataAzurermStorageTableEntity#partition_key}.

---

##### `rowKey`<sup>Required</sup> <a name="rowKey" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityConfig.property.rowKey"></a>

```java
public java.lang.String getRowKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_table_entity#row_key DataAzurermStorageTableEntity#row_key}.

---

##### `storageTableId`<sup>Required</sup> <a name="storageTableId" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityConfig.property.storageTableId"></a>

```java
public java.lang.String getStorageTableId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_table_entity#storage_table_id DataAzurermStorageTableEntity#storage_table_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_table_entity#id DataAzurermStorageTableEntity#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityConfig.property.timeouts"></a>

```java
public DataAzurermStorageTableEntityTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeouts">DataAzurermStorageTableEntityTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_table_entity#timeouts DataAzurermStorageTableEntity#timeouts}

---

### DataAzurermStorageTableEntityTimeouts <a name="DataAzurermStorageTableEntityTimeouts" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeouts.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_storage_table_entity.DataAzurermStorageTableEntityTimeouts;

DataAzurermStorageTableEntityTimeouts.builder()
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_table_entity#read DataAzurermStorageTableEntity#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_table_entity#read DataAzurermStorageTableEntity#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermStorageTableEntityTimeoutsOutputReference <a name="DataAzurermStorageTableEntityTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_storage_table_entity.DataAzurermStorageTableEntityTimeoutsOutputReference;

new DataAzurermStorageTableEntityTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeouts">DataAzurermStorageTableEntityTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataAzurermStorageTableEntityTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeouts">DataAzurermStorageTableEntityTimeouts</a>

---



