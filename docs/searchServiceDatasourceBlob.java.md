# `searchServiceDatasourceBlob` Submodule <a name="`searchServiceDatasourceBlob` Submodule" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SearchServiceDatasourceBlob <a name="SearchServiceDatasourceBlob" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob azurerm_search_service_datasource_blob}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer"></a>

```java
import io.cdktn.providers.azurerm.search_service_datasource_blob.SearchServiceDatasourceBlob;

SearchServiceDatasourceBlob.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .connectionStringWo(java.lang.String)
    .connectionStringWoVersion(java.lang.Number)
    .containerName(java.lang.String)
    .name(java.lang.String)
    .searchServiceEndpoint(java.lang.String)
//  .containerQuery(java.lang.String)
//  .description(java.lang.String)
//  .encryptionKey(SearchServiceDatasourceBlobEncryptionKey)
//  .id(java.lang.String)
//  .softDeleteColumnName(java.lang.String)
//  .softDeleteMarkerValue(java.lang.String)
//  .timeouts(SearchServiceDatasourceBlobTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.connectionStringWo">connectionStringWo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#connection_string_wo SearchServiceDatasourceBlob#connection_string_wo}. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.connectionStringWoVersion">connectionStringWoVersion</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#connection_string_wo_version SearchServiceDatasourceBlob#connection_string_wo_version}. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.containerName">containerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#container_name SearchServiceDatasourceBlob#container_name}. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#name SearchServiceDatasourceBlob#name}. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.searchServiceEndpoint">searchServiceEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#search_service_endpoint SearchServiceDatasourceBlob#search_service_endpoint}. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.containerQuery">containerQuery</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#container_query SearchServiceDatasourceBlob#container_query}. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#description SearchServiceDatasourceBlob#description}. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.encryptionKey">encryptionKey</a></code> | <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKey">SearchServiceDatasourceBlobEncryptionKey</a></code> | encryption_key block. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#id SearchServiceDatasourceBlob#id}. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.softDeleteColumnName">softDeleteColumnName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#soft_delete_column_name SearchServiceDatasourceBlob#soft_delete_column_name}. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.softDeleteMarkerValue">softDeleteMarkerValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#soft_delete_marker_value SearchServiceDatasourceBlob#soft_delete_marker_value}. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeouts">SearchServiceDatasourceBlobTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `connectionStringWo`<sup>Required</sup> <a name="connectionStringWo" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.connectionStringWo"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#connection_string_wo SearchServiceDatasourceBlob#connection_string_wo}.

---

##### `connectionStringWoVersion`<sup>Required</sup> <a name="connectionStringWoVersion" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.connectionStringWoVersion"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#connection_string_wo_version SearchServiceDatasourceBlob#connection_string_wo_version}.

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.containerName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#container_name SearchServiceDatasourceBlob#container_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#name SearchServiceDatasourceBlob#name}.

---

##### `searchServiceEndpoint`<sup>Required</sup> <a name="searchServiceEndpoint" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.searchServiceEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#search_service_endpoint SearchServiceDatasourceBlob#search_service_endpoint}.

---

##### `containerQuery`<sup>Optional</sup> <a name="containerQuery" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.containerQuery"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#container_query SearchServiceDatasourceBlob#container_query}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#description SearchServiceDatasourceBlob#description}.

---

##### `encryptionKey`<sup>Optional</sup> <a name="encryptionKey" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.encryptionKey"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKey">SearchServiceDatasourceBlobEncryptionKey</a>

encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#encryption_key SearchServiceDatasourceBlob#encryption_key}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#id SearchServiceDatasourceBlob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `softDeleteColumnName`<sup>Optional</sup> <a name="softDeleteColumnName" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.softDeleteColumnName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#soft_delete_column_name SearchServiceDatasourceBlob#soft_delete_column_name}.

---

##### `softDeleteMarkerValue`<sup>Optional</sup> <a name="softDeleteMarkerValue" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.softDeleteMarkerValue"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#soft_delete_marker_value SearchServiceDatasourceBlob#soft_delete_marker_value}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeouts">SearchServiceDatasourceBlobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#timeouts SearchServiceDatasourceBlob#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.putEncryptionKey">putEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.resetContainerQuery">resetContainerQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.resetEncryptionKey">resetEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.resetSoftDeleteColumnName">resetSoftDeleteColumnName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.resetSoftDeleteMarkerValue">resetSoftDeleteMarkerValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEncryptionKey` <a name="putEncryptionKey" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.putEncryptionKey"></a>

```java
public void putEncryptionKey(SearchServiceDatasourceBlobEncryptionKey value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.putEncryptionKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKey">SearchServiceDatasourceBlobEncryptionKey</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.putTimeouts"></a>

```java
public void putTimeouts(SearchServiceDatasourceBlobTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeouts">SearchServiceDatasourceBlobTimeouts</a>

---

##### `resetContainerQuery` <a name="resetContainerQuery" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.resetContainerQuery"></a>

```java
public void resetContainerQuery()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEncryptionKey` <a name="resetEncryptionKey" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.resetEncryptionKey"></a>

```java
public void resetEncryptionKey()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.resetId"></a>

```java
public void resetId()
```

##### `resetSoftDeleteColumnName` <a name="resetSoftDeleteColumnName" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.resetSoftDeleteColumnName"></a>

```java
public void resetSoftDeleteColumnName()
```

##### `resetSoftDeleteMarkerValue` <a name="resetSoftDeleteMarkerValue" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.resetSoftDeleteMarkerValue"></a>

```java
public void resetSoftDeleteMarkerValue()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SearchServiceDatasourceBlob resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.isConstruct"></a>

```java
import io.cdktn.providers.azurerm.search_service_datasource_blob.SearchServiceDatasourceBlob;

SearchServiceDatasourceBlob.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.isTerraformElement"></a>

```java
import io.cdktn.providers.azurerm.search_service_datasource_blob.SearchServiceDatasourceBlob;

SearchServiceDatasourceBlob.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.isTerraformResource"></a>

```java
import io.cdktn.providers.azurerm.search_service_datasource_blob.SearchServiceDatasourceBlob;

SearchServiceDatasourceBlob.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.generateConfigForImport"></a>

```java
import io.cdktn.providers.azurerm.search_service_datasource_blob.SearchServiceDatasourceBlob;

SearchServiceDatasourceBlob.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SearchServiceDatasourceBlob.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SearchServiceDatasourceBlob resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SearchServiceDatasourceBlob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SearchServiceDatasourceBlob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SearchServiceDatasourceBlob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.encryptionKey">encryptionKey</a></code> | <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference">SearchServiceDatasourceBlobEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference">SearchServiceDatasourceBlobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.connectionStringWoInput">connectionStringWoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.connectionStringWoVersionInput">connectionStringWoVersionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.containerNameInput">containerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.containerQueryInput">containerQueryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.encryptionKeyInput">encryptionKeyInput</a></code> | <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKey">SearchServiceDatasourceBlobEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.searchServiceEndpointInput">searchServiceEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.softDeleteColumnNameInput">softDeleteColumnNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.softDeleteMarkerValueInput">softDeleteMarkerValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeouts">SearchServiceDatasourceBlobTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.connectionStringWo">connectionStringWo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.connectionStringWoVersion">connectionStringWoVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.containerName">containerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.containerQuery">containerQuery</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.searchServiceEndpoint">searchServiceEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.softDeleteColumnName">softDeleteColumnName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.softDeleteMarkerValue">softDeleteMarkerValue</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `encryptionKey`<sup>Required</sup> <a name="encryptionKey" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.encryptionKey"></a>

```java
public SearchServiceDatasourceBlobEncryptionKeyOutputReference getEncryptionKey();
```

- *Type:* <a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference">SearchServiceDatasourceBlobEncryptionKeyOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.timeouts"></a>

```java
public SearchServiceDatasourceBlobTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference">SearchServiceDatasourceBlobTimeoutsOutputReference</a>

---

##### `connectionStringWoInput`<sup>Optional</sup> <a name="connectionStringWoInput" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.connectionStringWoInput"></a>

```java
public java.lang.String getConnectionStringWoInput();
```

- *Type:* java.lang.String

---

##### `connectionStringWoVersionInput`<sup>Optional</sup> <a name="connectionStringWoVersionInput" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.connectionStringWoVersionInput"></a>

```java
public java.lang.Number getConnectionStringWoVersionInput();
```

- *Type:* java.lang.Number

---

##### `containerNameInput`<sup>Optional</sup> <a name="containerNameInput" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.containerNameInput"></a>

```java
public java.lang.String getContainerNameInput();
```

- *Type:* java.lang.String

---

##### `containerQueryInput`<sup>Optional</sup> <a name="containerQueryInput" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.containerQueryInput"></a>

```java
public java.lang.String getContainerQueryInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `encryptionKeyInput`<sup>Optional</sup> <a name="encryptionKeyInput" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.encryptionKeyInput"></a>

```java
public SearchServiceDatasourceBlobEncryptionKey getEncryptionKeyInput();
```

- *Type:* <a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKey">SearchServiceDatasourceBlobEncryptionKey</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `searchServiceEndpointInput`<sup>Optional</sup> <a name="searchServiceEndpointInput" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.searchServiceEndpointInput"></a>

```java
public java.lang.String getSearchServiceEndpointInput();
```

- *Type:* java.lang.String

---

##### `softDeleteColumnNameInput`<sup>Optional</sup> <a name="softDeleteColumnNameInput" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.softDeleteColumnNameInput"></a>

```java
public java.lang.String getSoftDeleteColumnNameInput();
```

- *Type:* java.lang.String

---

##### `softDeleteMarkerValueInput`<sup>Optional</sup> <a name="softDeleteMarkerValueInput" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.softDeleteMarkerValueInput"></a>

```java
public java.lang.String getSoftDeleteMarkerValueInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.timeoutsInput"></a>

```java
public IResolvable|SearchServiceDatasourceBlobTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeouts">SearchServiceDatasourceBlobTimeouts</a>

---

##### ~~`connectionStringWo`~~<sup>Required</sup> <a name="connectionStringWo" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.connectionStringWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```java
public java.lang.String getConnectionStringWo();
```

- *Type:* java.lang.String

---

##### `connectionStringWoVersion`<sup>Required</sup> <a name="connectionStringWoVersion" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.connectionStringWoVersion"></a>

```java
public java.lang.Number getConnectionStringWoVersion();
```

- *Type:* java.lang.Number

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.containerName"></a>

```java
public java.lang.String getContainerName();
```

- *Type:* java.lang.String

---

##### `containerQuery`<sup>Required</sup> <a name="containerQuery" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.containerQuery"></a>

```java
public java.lang.String getContainerQuery();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `searchServiceEndpoint`<sup>Required</sup> <a name="searchServiceEndpoint" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.searchServiceEndpoint"></a>

```java
public java.lang.String getSearchServiceEndpoint();
```

- *Type:* java.lang.String

---

##### `softDeleteColumnName`<sup>Required</sup> <a name="softDeleteColumnName" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.softDeleteColumnName"></a>

```java
public java.lang.String getSoftDeleteColumnName();
```

- *Type:* java.lang.String

---

##### `softDeleteMarkerValue`<sup>Required</sup> <a name="softDeleteMarkerValue" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.softDeleteMarkerValue"></a>

```java
public java.lang.String getSoftDeleteMarkerValue();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SearchServiceDatasourceBlobConfig <a name="SearchServiceDatasourceBlobConfig" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.Initializer"></a>

```java
import io.cdktn.providers.azurerm.search_service_datasource_blob.SearchServiceDatasourceBlobConfig;

SearchServiceDatasourceBlobConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .connectionStringWo(java.lang.String)
    .connectionStringWoVersion(java.lang.Number)
    .containerName(java.lang.String)
    .name(java.lang.String)
    .searchServiceEndpoint(java.lang.String)
//  .containerQuery(java.lang.String)
//  .description(java.lang.String)
//  .encryptionKey(SearchServiceDatasourceBlobEncryptionKey)
//  .id(java.lang.String)
//  .softDeleteColumnName(java.lang.String)
//  .softDeleteMarkerValue(java.lang.String)
//  .timeouts(SearchServiceDatasourceBlobTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.connectionStringWo">connectionStringWo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#connection_string_wo SearchServiceDatasourceBlob#connection_string_wo}. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.connectionStringWoVersion">connectionStringWoVersion</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#connection_string_wo_version SearchServiceDatasourceBlob#connection_string_wo_version}. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.containerName">containerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#container_name SearchServiceDatasourceBlob#container_name}. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#name SearchServiceDatasourceBlob#name}. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.searchServiceEndpoint">searchServiceEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#search_service_endpoint SearchServiceDatasourceBlob#search_service_endpoint}. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.containerQuery">containerQuery</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#container_query SearchServiceDatasourceBlob#container_query}. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#description SearchServiceDatasourceBlob#description}. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.encryptionKey">encryptionKey</a></code> | <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKey">SearchServiceDatasourceBlobEncryptionKey</a></code> | encryption_key block. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#id SearchServiceDatasourceBlob#id}. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.softDeleteColumnName">softDeleteColumnName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#soft_delete_column_name SearchServiceDatasourceBlob#soft_delete_column_name}. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.softDeleteMarkerValue">softDeleteMarkerValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#soft_delete_marker_value SearchServiceDatasourceBlob#soft_delete_marker_value}. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeouts">SearchServiceDatasourceBlobTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `connectionStringWo`<sup>Required</sup> <a name="connectionStringWo" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.connectionStringWo"></a>

```java
public java.lang.String getConnectionStringWo();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#connection_string_wo SearchServiceDatasourceBlob#connection_string_wo}.

---

##### `connectionStringWoVersion`<sup>Required</sup> <a name="connectionStringWoVersion" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.connectionStringWoVersion"></a>

```java
public java.lang.Number getConnectionStringWoVersion();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#connection_string_wo_version SearchServiceDatasourceBlob#connection_string_wo_version}.

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.containerName"></a>

```java
public java.lang.String getContainerName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#container_name SearchServiceDatasourceBlob#container_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#name SearchServiceDatasourceBlob#name}.

---

##### `searchServiceEndpoint`<sup>Required</sup> <a name="searchServiceEndpoint" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.searchServiceEndpoint"></a>

```java
public java.lang.String getSearchServiceEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#search_service_endpoint SearchServiceDatasourceBlob#search_service_endpoint}.

---

##### `containerQuery`<sup>Optional</sup> <a name="containerQuery" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.containerQuery"></a>

```java
public java.lang.String getContainerQuery();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#container_query SearchServiceDatasourceBlob#container_query}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#description SearchServiceDatasourceBlob#description}.

---

##### `encryptionKey`<sup>Optional</sup> <a name="encryptionKey" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.encryptionKey"></a>

```java
public SearchServiceDatasourceBlobEncryptionKey getEncryptionKey();
```

- *Type:* <a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKey">SearchServiceDatasourceBlobEncryptionKey</a>

encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#encryption_key SearchServiceDatasourceBlob#encryption_key}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#id SearchServiceDatasourceBlob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `softDeleteColumnName`<sup>Optional</sup> <a name="softDeleteColumnName" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.softDeleteColumnName"></a>

```java
public java.lang.String getSoftDeleteColumnName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#soft_delete_column_name SearchServiceDatasourceBlob#soft_delete_column_name}.

---

##### `softDeleteMarkerValue`<sup>Optional</sup> <a name="softDeleteMarkerValue" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.softDeleteMarkerValue"></a>

```java
public java.lang.String getSoftDeleteMarkerValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#soft_delete_marker_value SearchServiceDatasourceBlob#soft_delete_marker_value}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.timeouts"></a>

```java
public SearchServiceDatasourceBlobTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeouts">SearchServiceDatasourceBlobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#timeouts SearchServiceDatasourceBlob#timeouts}

---

### SearchServiceDatasourceBlobEncryptionKey <a name="SearchServiceDatasourceBlobEncryptionKey" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKey.Initializer"></a>

```java
import io.cdktn.providers.azurerm.search_service_datasource_blob.SearchServiceDatasourceBlobEncryptionKey;

SearchServiceDatasourceBlobEncryptionKey.builder()
    .keyVaultKeyId(java.lang.String)
//  .clientId(java.lang.String)
//  .clientSecret(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKey.property.keyVaultKeyId">keyVaultKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#key_vault_key_id SearchServiceDatasourceBlob#key_vault_key_id}. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKey.property.clientId">clientId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#client_id SearchServiceDatasourceBlob#client_id}. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKey.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#client_secret SearchServiceDatasourceBlob#client_secret}. |

---

##### `keyVaultKeyId`<sup>Required</sup> <a name="keyVaultKeyId" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKey.property.keyVaultKeyId"></a>

```java
public java.lang.String getKeyVaultKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#key_vault_key_id SearchServiceDatasourceBlob#key_vault_key_id}.

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKey.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#client_id SearchServiceDatasourceBlob#client_id}.

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKey.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#client_secret SearchServiceDatasourceBlob#client_secret}.

---

### SearchServiceDatasourceBlobTimeouts <a name="SearchServiceDatasourceBlobTimeouts" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeouts.Initializer"></a>

```java
import io.cdktn.providers.azurerm.search_service_datasource_blob.SearchServiceDatasourceBlobTimeouts;

SearchServiceDatasourceBlobTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#create SearchServiceDatasourceBlob#create}. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#delete SearchServiceDatasourceBlob#delete}. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#read SearchServiceDatasourceBlob#read}. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#update SearchServiceDatasourceBlob#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#create SearchServiceDatasourceBlob#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#delete SearchServiceDatasourceBlob#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#read SearchServiceDatasourceBlob#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#update SearchServiceDatasourceBlob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SearchServiceDatasourceBlobEncryptionKeyOutputReference <a name="SearchServiceDatasourceBlobEncryptionKeyOutputReference" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.search_service_datasource_blob.SearchServiceDatasourceBlobEncryptionKeyOutputReference;

new SearchServiceDatasourceBlobEncryptionKeyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.resetClientSecret">resetClientSecret</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClientId` <a name="resetClientId" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.resetClientId"></a>

```java
public void resetClientId()
```

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.resetClientSecret"></a>

```java
public void resetClientSecret()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.property.keyVaultKeyIdInput">keyVaultKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.property.keyVaultKeyId">keyVaultKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKey">SearchServiceDatasourceBlobEncryptionKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.property.clientSecretInput"></a>

```java
public java.lang.String getClientSecretInput();
```

- *Type:* java.lang.String

---

##### `keyVaultKeyIdInput`<sup>Optional</sup> <a name="keyVaultKeyIdInput" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.property.keyVaultKeyIdInput"></a>

```java
public java.lang.String getKeyVaultKeyIdInput();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

---

##### `keyVaultKeyId`<sup>Required</sup> <a name="keyVaultKeyId" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.property.keyVaultKeyId"></a>

```java
public java.lang.String getKeyVaultKeyId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.property.internalValue"></a>

```java
public SearchServiceDatasourceBlobEncryptionKey getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKey">SearchServiceDatasourceBlobEncryptionKey</a>

---


### SearchServiceDatasourceBlobTimeoutsOutputReference <a name="SearchServiceDatasourceBlobTimeoutsOutputReference" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.search_service_datasource_blob.SearchServiceDatasourceBlobTimeoutsOutputReference;

new SearchServiceDatasourceBlobTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeouts">SearchServiceDatasourceBlobTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|SearchServiceDatasourceBlobTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeouts">SearchServiceDatasourceBlobTimeouts</a>

---



