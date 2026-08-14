# `dataAzurermManagedRedisAccessPolicyAssignment` Submodule <a name="`dataAzurermManagedRedisAccessPolicyAssignment` Submodule" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermManagedRedisAccessPolicyAssignment <a name="DataAzurermManagedRedisAccessPolicyAssignment" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/managed_redis_access_policy_assignment azurerm_managed_redis_access_policy_assignment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_managed_redis_access_policy_assignment.DataAzurermManagedRedisAccessPolicyAssignment;

DataAzurermManagedRedisAccessPolicyAssignment.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .managedRedisName(java.lang.String)
    .objectId(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DataAzurermManagedRedisAccessPolicyAssignmentTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.Initializer.parameter.managedRedisName">managedRedisName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/managed_redis_access_policy_assignment#managed_redis_name DataAzurermManagedRedisAccessPolicyAssignment#managed_redis_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.Initializer.parameter.objectId">objectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/managed_redis_access_policy_assignment#object_id DataAzurermManagedRedisAccessPolicyAssignment#object_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/managed_redis_access_policy_assignment#resource_group_name DataAzurermManagedRedisAccessPolicyAssignment#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/managed_redis_access_policy_assignment#id DataAzurermManagedRedisAccessPolicyAssignment#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeouts">DataAzurermManagedRedisAccessPolicyAssignmentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `managedRedisName`<sup>Required</sup> <a name="managedRedisName" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.Initializer.parameter.managedRedisName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/managed_redis_access_policy_assignment#managed_redis_name DataAzurermManagedRedisAccessPolicyAssignment#managed_redis_name}.

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.Initializer.parameter.objectId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/managed_redis_access_policy_assignment#object_id DataAzurermManagedRedisAccessPolicyAssignment#object_id}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/managed_redis_access_policy_assignment#resource_group_name DataAzurermManagedRedisAccessPolicyAssignment#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/managed_redis_access_policy_assignment#id DataAzurermManagedRedisAccessPolicyAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeouts">DataAzurermManagedRedisAccessPolicyAssignmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/managed_redis_access_policy_assignment#timeouts DataAzurermManagedRedisAccessPolicyAssignment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.putTimeouts"></a>

```java
public void putTimeouts(DataAzurermManagedRedisAccessPolicyAssignmentTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeouts">DataAzurermManagedRedisAccessPolicyAssignmentTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAzurermManagedRedisAccessPolicyAssignment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.isConstruct"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_managed_redis_access_policy_assignment.DataAzurermManagedRedisAccessPolicyAssignment;

DataAzurermManagedRedisAccessPolicyAssignment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.isTerraformElement"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_managed_redis_access_policy_assignment.DataAzurermManagedRedisAccessPolicyAssignment;

DataAzurermManagedRedisAccessPolicyAssignment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.isTerraformDataSource"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_managed_redis_access_policy_assignment.DataAzurermManagedRedisAccessPolicyAssignment;

DataAzurermManagedRedisAccessPolicyAssignment.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.generateConfigForImport"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_managed_redis_access_policy_assignment.DataAzurermManagedRedisAccessPolicyAssignment;

DataAzurermManagedRedisAccessPolicyAssignment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAzurermManagedRedisAccessPolicyAssignment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAzurermManagedRedisAccessPolicyAssignment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAzurermManagedRedisAccessPolicyAssignment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAzurermManagedRedisAccessPolicyAssignment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/managed_redis_access_policy_assignment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAzurermManagedRedisAccessPolicyAssignment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference">DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.property.managedRedisNameInput">managedRedisNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.property.objectIdInput">objectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeouts">DataAzurermManagedRedisAccessPolicyAssignmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.property.managedRedisName">managedRedisName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.property.objectId">objectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.property.timeouts"></a>

```java
public DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference">DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `managedRedisNameInput`<sup>Optional</sup> <a name="managedRedisNameInput" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.property.managedRedisNameInput"></a>

```java
public java.lang.String getManagedRedisNameInput();
```

- *Type:* java.lang.String

---

##### `objectIdInput`<sup>Optional</sup> <a name="objectIdInput" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.property.objectIdInput"></a>

```java
public java.lang.String getObjectIdInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.property.timeoutsInput"></a>

```java
public IResolvable|DataAzurermManagedRedisAccessPolicyAssignmentTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeouts">DataAzurermManagedRedisAccessPolicyAssignmentTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `managedRedisName`<sup>Required</sup> <a name="managedRedisName" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.property.managedRedisName"></a>

```java
public java.lang.String getManagedRedisName();
```

- *Type:* java.lang.String

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.property.objectId"></a>

```java
public java.lang.String getObjectId();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermManagedRedisAccessPolicyAssignmentConfig <a name="DataAzurermManagedRedisAccessPolicyAssignmentConfig" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentConfig.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_managed_redis_access_policy_assignment.DataAzurermManagedRedisAccessPolicyAssignmentConfig;

DataAzurermManagedRedisAccessPolicyAssignmentConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .managedRedisName(java.lang.String)
    .objectId(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DataAzurermManagedRedisAccessPolicyAssignmentTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentConfig.property.managedRedisName">managedRedisName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/managed_redis_access_policy_assignment#managed_redis_name DataAzurermManagedRedisAccessPolicyAssignment#managed_redis_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentConfig.property.objectId">objectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/managed_redis_access_policy_assignment#object_id DataAzurermManagedRedisAccessPolicyAssignment#object_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/managed_redis_access_policy_assignment#resource_group_name DataAzurermManagedRedisAccessPolicyAssignment#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/managed_redis_access_policy_assignment#id DataAzurermManagedRedisAccessPolicyAssignment#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeouts">DataAzurermManagedRedisAccessPolicyAssignmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `managedRedisName`<sup>Required</sup> <a name="managedRedisName" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentConfig.property.managedRedisName"></a>

```java
public java.lang.String getManagedRedisName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/managed_redis_access_policy_assignment#managed_redis_name DataAzurermManagedRedisAccessPolicyAssignment#managed_redis_name}.

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentConfig.property.objectId"></a>

```java
public java.lang.String getObjectId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/managed_redis_access_policy_assignment#object_id DataAzurermManagedRedisAccessPolicyAssignment#object_id}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/managed_redis_access_policy_assignment#resource_group_name DataAzurermManagedRedisAccessPolicyAssignment#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/managed_redis_access_policy_assignment#id DataAzurermManagedRedisAccessPolicyAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentConfig.property.timeouts"></a>

```java
public DataAzurermManagedRedisAccessPolicyAssignmentTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeouts">DataAzurermManagedRedisAccessPolicyAssignmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/managed_redis_access_policy_assignment#timeouts DataAzurermManagedRedisAccessPolicyAssignment#timeouts}

---

### DataAzurermManagedRedisAccessPolicyAssignmentTimeouts <a name="DataAzurermManagedRedisAccessPolicyAssignmentTimeouts" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeouts.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_managed_redis_access_policy_assignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeouts;

DataAzurermManagedRedisAccessPolicyAssignmentTimeouts.builder()
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/managed_redis_access_policy_assignment#read DataAzurermManagedRedisAccessPolicyAssignment#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/managed_redis_access_policy_assignment#read DataAzurermManagedRedisAccessPolicyAssignment#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference <a name="DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_managed_redis_access_policy_assignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference;

new DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeouts">DataAzurermManagedRedisAccessPolicyAssignmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataAzurermManagedRedisAccessPolicyAssignmentTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeouts">DataAzurermManagedRedisAccessPolicyAssignmentTimeouts</a>

---



