# `dataAzurermOrchestratedVirtualMachineScaleSet` Submodule <a name="`dataAzurermOrchestratedVirtualMachineScaleSet` Submodule" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermOrchestratedVirtualMachineScaleSet <a name="DataAzurermOrchestratedVirtualMachineScaleSet" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/orchestrated_virtual_machine_scale_set azurerm_orchestrated_virtual_machine_scale_set}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_orchestrated_virtual_machine_scale_set.DataAzurermOrchestratedVirtualMachineScaleSet;

DataAzurermOrchestratedVirtualMachineScaleSet.Builder.create(Construct scope, java.lang.String id)
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
//  .timeouts(DataAzurermOrchestratedVirtualMachineScaleSetTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/orchestrated_virtual_machine_scale_set#name DataAzurermOrchestratedVirtualMachineScaleSet#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/orchestrated_virtual_machine_scale_set#resource_group_name DataAzurermOrchestratedVirtualMachineScaleSet#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/orchestrated_virtual_machine_scale_set#id DataAzurermOrchestratedVirtualMachineScaleSet#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeouts">DataAzurermOrchestratedVirtualMachineScaleSetTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/orchestrated_virtual_machine_scale_set#name DataAzurermOrchestratedVirtualMachineScaleSet#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/orchestrated_virtual_machine_scale_set#resource_group_name DataAzurermOrchestratedVirtualMachineScaleSet#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/orchestrated_virtual_machine_scale_set#id DataAzurermOrchestratedVirtualMachineScaleSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeouts">DataAzurermOrchestratedVirtualMachineScaleSetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/orchestrated_virtual_machine_scale_set#timeouts DataAzurermOrchestratedVirtualMachineScaleSet#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.putTimeouts"></a>

```java
public void putTimeouts(DataAzurermOrchestratedVirtualMachineScaleSetTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeouts">DataAzurermOrchestratedVirtualMachineScaleSetTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAzurermOrchestratedVirtualMachineScaleSet resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.isConstruct"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_orchestrated_virtual_machine_scale_set.DataAzurermOrchestratedVirtualMachineScaleSet;

DataAzurermOrchestratedVirtualMachineScaleSet.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.isTerraformElement"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_orchestrated_virtual_machine_scale_set.DataAzurermOrchestratedVirtualMachineScaleSet;

DataAzurermOrchestratedVirtualMachineScaleSet.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.isTerraformDataSource"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_orchestrated_virtual_machine_scale_set.DataAzurermOrchestratedVirtualMachineScaleSet;

DataAzurermOrchestratedVirtualMachineScaleSet.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.generateConfigForImport"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_orchestrated_virtual_machine_scale_set.DataAzurermOrchestratedVirtualMachineScaleSet;

DataAzurermOrchestratedVirtualMachineScaleSet.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAzurermOrchestratedVirtualMachineScaleSet.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAzurermOrchestratedVirtualMachineScaleSet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAzurermOrchestratedVirtualMachineScaleSet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAzurermOrchestratedVirtualMachineScaleSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/orchestrated_virtual_machine_scale_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAzurermOrchestratedVirtualMachineScaleSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.identity">identity</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList">DataAzurermOrchestratedVirtualMachineScaleSetIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.networkInterface">networkInterface</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList">DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.skuProfile">skuProfile</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileList">DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference">DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeouts">DataAzurermOrchestratedVirtualMachineScaleSetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.identity"></a>

```java
public DataAzurermOrchestratedVirtualMachineScaleSetIdentityList getIdentity();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList">DataAzurermOrchestratedVirtualMachineScaleSetIdentityList</a>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `networkInterface`<sup>Required</sup> <a name="networkInterface" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.networkInterface"></a>

```java
public DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList getNetworkInterface();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList">DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList</a>

---

##### `skuProfile`<sup>Required</sup> <a name="skuProfile" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.skuProfile"></a>

```java
public DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileList getSkuProfile();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileList">DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.timeouts"></a>

```java
public DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference">DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.timeoutsInput"></a>

```java
public IResolvable|DataAzurermOrchestratedVirtualMachineScaleSetTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeouts">DataAzurermOrchestratedVirtualMachineScaleSetTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermOrchestratedVirtualMachineScaleSetConfig <a name="DataAzurermOrchestratedVirtualMachineScaleSetConfig" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_orchestrated_virtual_machine_scale_set.DataAzurermOrchestratedVirtualMachineScaleSetConfig;

DataAzurermOrchestratedVirtualMachineScaleSetConfig.builder()
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
//  .timeouts(DataAzurermOrchestratedVirtualMachineScaleSetTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/orchestrated_virtual_machine_scale_set#name DataAzurermOrchestratedVirtualMachineScaleSet#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/orchestrated_virtual_machine_scale_set#resource_group_name DataAzurermOrchestratedVirtualMachineScaleSet#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/orchestrated_virtual_machine_scale_set#id DataAzurermOrchestratedVirtualMachineScaleSet#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeouts">DataAzurermOrchestratedVirtualMachineScaleSetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/orchestrated_virtual_machine_scale_set#name DataAzurermOrchestratedVirtualMachineScaleSet#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/orchestrated_virtual_machine_scale_set#resource_group_name DataAzurermOrchestratedVirtualMachineScaleSet#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/orchestrated_virtual_machine_scale_set#id DataAzurermOrchestratedVirtualMachineScaleSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig.property.timeouts"></a>

```java
public DataAzurermOrchestratedVirtualMachineScaleSetTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeouts">DataAzurermOrchestratedVirtualMachineScaleSetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/orchestrated_virtual_machine_scale_set#timeouts DataAzurermOrchestratedVirtualMachineScaleSet#timeouts}

---

### DataAzurermOrchestratedVirtualMachineScaleSetIdentity <a name="DataAzurermOrchestratedVirtualMachineScaleSetIdentity" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentity.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_orchestrated_virtual_machine_scale_set.DataAzurermOrchestratedVirtualMachineScaleSetIdentity;

DataAzurermOrchestratedVirtualMachineScaleSetIdentity.builder()
    .build();
```


### DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterface <a name="DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterface" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterface.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_orchestrated_virtual_machine_scale_set.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterface;

DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterface.builder()
    .build();
```


### DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfiguration <a name="DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfiguration" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfiguration.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_orchestrated_virtual_machine_scale_set.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfiguration;

DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfiguration.builder()
    .build();
```


### DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress <a name="DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_orchestrated_virtual_machine_scale_set.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress;

DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress.builder()
    .build();
```


### DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag <a name="DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_orchestrated_virtual_machine_scale_set.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag;

DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag.builder()
    .build();
```


### DataAzurermOrchestratedVirtualMachineScaleSetSkuProfile <a name="DataAzurermOrchestratedVirtualMachineScaleSetSkuProfile" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfile.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_orchestrated_virtual_machine_scale_set.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfile;

DataAzurermOrchestratedVirtualMachineScaleSetSkuProfile.builder()
    .build();
```


### DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSize <a name="DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSize" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSize"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSize.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_orchestrated_virtual_machine_scale_set.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSize;

DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSize.builder()
    .build();
```


### DataAzurermOrchestratedVirtualMachineScaleSetTimeouts <a name="DataAzurermOrchestratedVirtualMachineScaleSetTimeouts" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeouts.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_orchestrated_virtual_machine_scale_set.DataAzurermOrchestratedVirtualMachineScaleSetTimeouts;

DataAzurermOrchestratedVirtualMachineScaleSetTimeouts.builder()
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/orchestrated_virtual_machine_scale_set#read DataAzurermOrchestratedVirtualMachineScaleSet#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/orchestrated_virtual_machine_scale_set#read DataAzurermOrchestratedVirtualMachineScaleSet#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermOrchestratedVirtualMachineScaleSetIdentityList <a name="DataAzurermOrchestratedVirtualMachineScaleSetIdentityList" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_orchestrated_virtual_machine_scale_set.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList;

new DataAzurermOrchestratedVirtualMachineScaleSetIdentityList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList.get"></a>

```java
public DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference <a name="DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_orchestrated_virtual_machine_scale_set.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference;

new DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.property.principalId">principalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentity">DataAzurermOrchestratedVirtualMachineScaleSetIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.property.identityIds"></a>

```java
public java.util.List<java.lang.String> getIdentityIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.property.principalId"></a>

```java
public java.lang.String getPrincipalId();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.property.internalValue"></a>

```java
public DataAzurermOrchestratedVirtualMachineScaleSetIdentity getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentity">DataAzurermOrchestratedVirtualMachineScaleSetIdentity</a>

---


### DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList <a name="DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_orchestrated_virtual_machine_scale_set.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList;

new DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.get"></a>

```java
public DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference <a name="DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_orchestrated_virtual_machine_scale_set.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference;

new DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.applicationGatewayBackendAddressPoolIds">applicationGatewayBackendAddressPoolIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.applicationSecurityGroupIds">applicationSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.loadBalancerBackendAddressPoolIds">loadBalancerBackendAddressPoolIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.loadBalancerInboundNatRulesIds">loadBalancerInboundNatRulesIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.primary">primary</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.publicIpAddress">publicIpAddress</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList">DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfiguration">DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `applicationGatewayBackendAddressPoolIds`<sup>Required</sup> <a name="applicationGatewayBackendAddressPoolIds" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.applicationGatewayBackendAddressPoolIds"></a>

```java
public java.util.List<java.lang.String> getApplicationGatewayBackendAddressPoolIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `applicationSecurityGroupIds`<sup>Required</sup> <a name="applicationSecurityGroupIds" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.applicationSecurityGroupIds"></a>

```java
public java.util.List<java.lang.String> getApplicationSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `loadBalancerBackendAddressPoolIds`<sup>Required</sup> <a name="loadBalancerBackendAddressPoolIds" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.loadBalancerBackendAddressPoolIds"></a>

```java
public java.util.List<java.lang.String> getLoadBalancerBackendAddressPoolIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `loadBalancerInboundNatRulesIds`<sup>Required</sup> <a name="loadBalancerInboundNatRulesIds" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.loadBalancerInboundNatRulesIds"></a>

```java
public java.util.List<java.lang.String> getLoadBalancerInboundNatRulesIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.primary"></a>

```java
public IResolvable getPrimary();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `publicIpAddress`<sup>Required</sup> <a name="publicIpAddress" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.publicIpAddress"></a>

```java
public DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList getPublicIpAddress();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList">DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList</a>

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.internalValue"></a>

```java
public DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfiguration">DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfiguration</a>

---


### DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList <a name="DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_orchestrated_virtual_machine_scale_set.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList;

new DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.get"></a>

```java
public DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference <a name="DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_orchestrated_virtual_machine_scale_set.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference;

new DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.tag">tag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag">DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.tag"></a>

```java
public java.lang.String getTag();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.internalValue"></a>

```java
public DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag">DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag</a>

---


### DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList <a name="DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_orchestrated_virtual_machine_scale_set.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList;

new DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.get"></a>

```java
public DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference <a name="DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_orchestrated_virtual_machine_scale_set.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference;

new DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.domainNameLabel">domainNameLabel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.idleTimeoutInMinutes">idleTimeoutInMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.ipTag">ipTag</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList">DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.publicIpPrefixId">publicIpPrefixId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress">DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `domainNameLabel`<sup>Required</sup> <a name="domainNameLabel" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.domainNameLabel"></a>

```java
public java.lang.String getDomainNameLabel();
```

- *Type:* java.lang.String

---

##### `idleTimeoutInMinutes`<sup>Required</sup> <a name="idleTimeoutInMinutes" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.idleTimeoutInMinutes"></a>

```java
public java.lang.Number getIdleTimeoutInMinutes();
```

- *Type:* java.lang.Number

---

##### `ipTag`<sup>Required</sup> <a name="ipTag" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.ipTag"></a>

```java
public DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList getIpTag();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList">DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `publicIpPrefixId`<sup>Required</sup> <a name="publicIpPrefixId" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.publicIpPrefixId"></a>

```java
public java.lang.String getPublicIpPrefixId();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.internalValue"></a>

```java
public DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress">DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress</a>

---


### DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList <a name="DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_orchestrated_virtual_machine_scale_set.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList;

new DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList.get"></a>

```java
public DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference <a name="DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_orchestrated_virtual_machine_scale_set.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference;

new DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.acceleratedNetworkingEnabled">acceleratedNetworkingEnabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.dnsServers">dnsServers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.ipConfiguration">ipConfiguration</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList">DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.ipForwardingEnabled">ipForwardingEnabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.networkSecurityGroupId">networkSecurityGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.primary">primary</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterface">DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterface</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `acceleratedNetworkingEnabled`<sup>Required</sup> <a name="acceleratedNetworkingEnabled" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.acceleratedNetworkingEnabled"></a>

```java
public IResolvable getAcceleratedNetworkingEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `dnsServers`<sup>Required</sup> <a name="dnsServers" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.dnsServers"></a>

```java
public java.util.List<java.lang.String> getDnsServers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ipConfiguration`<sup>Required</sup> <a name="ipConfiguration" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.ipConfiguration"></a>

```java
public DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList getIpConfiguration();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList">DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList</a>

---

##### `ipForwardingEnabled`<sup>Required</sup> <a name="ipForwardingEnabled" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.ipForwardingEnabled"></a>

```java
public IResolvable getIpForwardingEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `networkSecurityGroupId`<sup>Required</sup> <a name="networkSecurityGroupId" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.networkSecurityGroupId"></a>

```java
public java.lang.String getNetworkSecurityGroupId();
```

- *Type:* java.lang.String

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.primary"></a>

```java
public IResolvable getPrimary();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.internalValue"></a>

```java
public DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterface getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterface">DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterface</a>

---


### DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileList <a name="DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileList" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileList.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_orchestrated_virtual_machine_scale_set.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileList;

new DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileList.get"></a>

```java
public DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference <a name="DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_orchestrated_virtual_machine_scale_set.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference;

new DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.property.allocationStrategy">allocationStrategy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.property.virtualMachineSize">virtualMachineSize</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeList">DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfile">DataAzurermOrchestratedVirtualMachineScaleSetSkuProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allocationStrategy`<sup>Required</sup> <a name="allocationStrategy" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.property.allocationStrategy"></a>

```java
public java.lang.String getAllocationStrategy();
```

- *Type:* java.lang.String

---

##### `virtualMachineSize`<sup>Required</sup> <a name="virtualMachineSize" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.property.virtualMachineSize"></a>

```java
public DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeList getVirtualMachineSize();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeList">DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.property.internalValue"></a>

```java
public DataAzurermOrchestratedVirtualMachineScaleSetSkuProfile getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfile">DataAzurermOrchestratedVirtualMachineScaleSetSkuProfile</a>

---


### DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeList <a name="DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeList" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeList.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_orchestrated_virtual_machine_scale_set.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeList;

new DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeList.get"></a>

```java
public DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference <a name="DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_orchestrated_virtual_machine_scale_set.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference;

new DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.property.rank">rank</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSize">DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSize</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `rank`<sup>Required</sup> <a name="rank" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.property.rank"></a>

```java
public java.lang.Number getRank();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.property.internalValue"></a>

```java
public DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSize getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSize">DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSize</a>

---


### DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference <a name="DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_orchestrated_virtual_machine_scale_set.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference;

new DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeouts">DataAzurermOrchestratedVirtualMachineScaleSetTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataAzurermOrchestratedVirtualMachineScaleSetTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeouts">DataAzurermOrchestratedVirtualMachineScaleSetTimeouts</a>

---



