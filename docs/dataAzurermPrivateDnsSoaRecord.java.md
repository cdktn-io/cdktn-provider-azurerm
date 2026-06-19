# `dataAzurermPrivateDnsSoaRecord` Submodule <a name="`dataAzurermPrivateDnsSoaRecord` Submodule" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermPrivateDnsSoaRecord <a name="DataAzurermPrivateDnsSoaRecord" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/private_dns_soa_record azurerm_private_dns_soa_record}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_private_dns_soa_record.DataAzurermPrivateDnsSoaRecord;

DataAzurermPrivateDnsSoaRecord.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .resourceGroupName(java.lang.String)
    .zoneName(java.lang.String)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .timeouts(DataAzurermPrivateDnsSoaRecordTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/private_dns_soa_record#resource_group_name DataAzurermPrivateDnsSoaRecord#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.Initializer.parameter.zoneName">zoneName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/private_dns_soa_record#zone_name DataAzurermPrivateDnsSoaRecord#zone_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/private_dns_soa_record#id DataAzurermPrivateDnsSoaRecord#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/private_dns_soa_record#name DataAzurermPrivateDnsSoaRecord#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordTimeouts">DataAzurermPrivateDnsSoaRecordTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/private_dns_soa_record#resource_group_name DataAzurermPrivateDnsSoaRecord#resource_group_name}.

---

##### `zoneName`<sup>Required</sup> <a name="zoneName" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.Initializer.parameter.zoneName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/private_dns_soa_record#zone_name DataAzurermPrivateDnsSoaRecord#zone_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/private_dns_soa_record#id DataAzurermPrivateDnsSoaRecord#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/private_dns_soa_record#name DataAzurermPrivateDnsSoaRecord#name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordTimeouts">DataAzurermPrivateDnsSoaRecordTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/private_dns_soa_record#timeouts DataAzurermPrivateDnsSoaRecord#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.putTimeouts"></a>

```java
public void putTimeouts(DataAzurermPrivateDnsSoaRecordTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordTimeouts">DataAzurermPrivateDnsSoaRecordTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.resetId"></a>

```java
public void resetId()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.resetName"></a>

```java
public void resetName()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAzurermPrivateDnsSoaRecord resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.isConstruct"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_private_dns_soa_record.DataAzurermPrivateDnsSoaRecord;

DataAzurermPrivateDnsSoaRecord.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.isTerraformElement"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_private_dns_soa_record.DataAzurermPrivateDnsSoaRecord;

DataAzurermPrivateDnsSoaRecord.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.isTerraformDataSource"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_private_dns_soa_record.DataAzurermPrivateDnsSoaRecord;

DataAzurermPrivateDnsSoaRecord.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.generateConfigForImport"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_private_dns_soa_record.DataAzurermPrivateDnsSoaRecord;

DataAzurermPrivateDnsSoaRecord.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAzurermPrivateDnsSoaRecord.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAzurermPrivateDnsSoaRecord resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAzurermPrivateDnsSoaRecord to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAzurermPrivateDnsSoaRecord that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/private_dns_soa_record#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAzurermPrivateDnsSoaRecord to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.property.expireTime">expireTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.property.fqdn">fqdn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.property.hostName">hostName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.property.minimumTtl">minimumTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.property.refreshTime">refreshTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.property.retryTime">retryTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.property.serialNumber">serialNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.property.tags">tags</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordTimeoutsOutputReference">DataAzurermPrivateDnsSoaRecordTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.property.ttl">ttl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordTimeouts">DataAzurermPrivateDnsSoaRecordTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.property.zoneNameInput">zoneNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.property.zoneName">zoneName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `expireTime`<sup>Required</sup> <a name="expireTime" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.property.expireTime"></a>

```java
public java.lang.Number getExpireTime();
```

- *Type:* java.lang.Number

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.property.fqdn"></a>

```java
public java.lang.String getFqdn();
```

- *Type:* java.lang.String

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.property.hostName"></a>

```java
public java.lang.String getHostName();
```

- *Type:* java.lang.String

---

##### `minimumTtl`<sup>Required</sup> <a name="minimumTtl" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.property.minimumTtl"></a>

```java
public java.lang.Number getMinimumTtl();
```

- *Type:* java.lang.Number

---

##### `refreshTime`<sup>Required</sup> <a name="refreshTime" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.property.refreshTime"></a>

```java
public java.lang.Number getRefreshTime();
```

- *Type:* java.lang.Number

---

##### `retryTime`<sup>Required</sup> <a name="retryTime" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.property.retryTime"></a>

```java
public java.lang.Number getRetryTime();
```

- *Type:* java.lang.Number

---

##### `serialNumber`<sup>Required</sup> <a name="serialNumber" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.property.serialNumber"></a>

```java
public java.lang.Number getSerialNumber();
```

- *Type:* java.lang.Number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.property.tags"></a>

```java
public StringMap getTags();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.property.timeouts"></a>

```java
public DataAzurermPrivateDnsSoaRecordTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordTimeoutsOutputReference">DataAzurermPrivateDnsSoaRecordTimeoutsOutputReference</a>

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.property.ttl"></a>

```java
public java.lang.Number getTtl();
```

- *Type:* java.lang.Number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.property.timeoutsInput"></a>

```java
public IResolvable|DataAzurermPrivateDnsSoaRecordTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordTimeouts">DataAzurermPrivateDnsSoaRecordTimeouts</a>

---

##### `zoneNameInput`<sup>Optional</sup> <a name="zoneNameInput" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.property.zoneNameInput"></a>

```java
public java.lang.String getZoneNameInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `zoneName`<sup>Required</sup> <a name="zoneName" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.property.zoneName"></a>

```java
public java.lang.String getZoneName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecord.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermPrivateDnsSoaRecordConfig <a name="DataAzurermPrivateDnsSoaRecordConfig" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordConfig.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_private_dns_soa_record.DataAzurermPrivateDnsSoaRecordConfig;

DataAzurermPrivateDnsSoaRecordConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .resourceGroupName(java.lang.String)
    .zoneName(java.lang.String)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .timeouts(DataAzurermPrivateDnsSoaRecordTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/private_dns_soa_record#resource_group_name DataAzurermPrivateDnsSoaRecord#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordConfig.property.zoneName">zoneName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/private_dns_soa_record#zone_name DataAzurermPrivateDnsSoaRecord#zone_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/private_dns_soa_record#id DataAzurermPrivateDnsSoaRecord#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/private_dns_soa_record#name DataAzurermPrivateDnsSoaRecord#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordTimeouts">DataAzurermPrivateDnsSoaRecordTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/private_dns_soa_record#resource_group_name DataAzurermPrivateDnsSoaRecord#resource_group_name}.

---

##### `zoneName`<sup>Required</sup> <a name="zoneName" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordConfig.property.zoneName"></a>

```java
public java.lang.String getZoneName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/private_dns_soa_record#zone_name DataAzurermPrivateDnsSoaRecord#zone_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/private_dns_soa_record#id DataAzurermPrivateDnsSoaRecord#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/private_dns_soa_record#name DataAzurermPrivateDnsSoaRecord#name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordConfig.property.timeouts"></a>

```java
public DataAzurermPrivateDnsSoaRecordTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordTimeouts">DataAzurermPrivateDnsSoaRecordTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/private_dns_soa_record#timeouts DataAzurermPrivateDnsSoaRecord#timeouts}

---

### DataAzurermPrivateDnsSoaRecordTimeouts <a name="DataAzurermPrivateDnsSoaRecordTimeouts" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordTimeouts.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_private_dns_soa_record.DataAzurermPrivateDnsSoaRecordTimeouts;

DataAzurermPrivateDnsSoaRecordTimeouts.builder()
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/private_dns_soa_record#read DataAzurermPrivateDnsSoaRecord#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/private_dns_soa_record#read DataAzurermPrivateDnsSoaRecord#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermPrivateDnsSoaRecordTimeoutsOutputReference <a name="DataAzurermPrivateDnsSoaRecordTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_private_dns_soa_record.DataAzurermPrivateDnsSoaRecordTimeoutsOutputReference;

new DataAzurermPrivateDnsSoaRecordTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordTimeouts">DataAzurermPrivateDnsSoaRecordTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataAzurermPrivateDnsSoaRecordTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsSoaRecord.DataAzurermPrivateDnsSoaRecordTimeouts">DataAzurermPrivateDnsSoaRecordTimeouts</a>

---



