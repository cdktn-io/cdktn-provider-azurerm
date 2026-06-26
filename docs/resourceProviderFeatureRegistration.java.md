# `resourceProviderFeatureRegistration` Submodule <a name="`resourceProviderFeatureRegistration` Submodule" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ResourceProviderFeatureRegistration <a name="ResourceProviderFeatureRegistration" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_provider_feature_registration azurerm_resource_provider_feature_registration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.Initializer"></a>

```java
import io.cdktn.providers.azurerm.resource_provider_feature_registration.ResourceProviderFeatureRegistration;

ResourceProviderFeatureRegistration.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .providerName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(ResourceProviderFeatureRegistrationTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_provider_feature_registration#name ResourceProviderFeatureRegistration#name}. |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.Initializer.parameter.providerName">providerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_provider_feature_registration#provider_name ResourceProviderFeatureRegistration#provider_name}. |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_provider_feature_registration#id ResourceProviderFeatureRegistration#id}. |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeouts">ResourceProviderFeatureRegistrationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_provider_feature_registration#name ResourceProviderFeatureRegistration#name}.

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.Initializer.parameter.providerName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_provider_feature_registration#provider_name ResourceProviderFeatureRegistration#provider_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_provider_feature_registration#id ResourceProviderFeatureRegistration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeouts">ResourceProviderFeatureRegistrationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_provider_feature_registration#timeouts ResourceProviderFeatureRegistration#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.putTimeouts"></a>

```java
public void putTimeouts(ResourceProviderFeatureRegistrationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeouts">ResourceProviderFeatureRegistrationTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ResourceProviderFeatureRegistration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.isConstruct"></a>

```java
import io.cdktn.providers.azurerm.resource_provider_feature_registration.ResourceProviderFeatureRegistration;

ResourceProviderFeatureRegistration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.isTerraformElement"></a>

```java
import io.cdktn.providers.azurerm.resource_provider_feature_registration.ResourceProviderFeatureRegistration;

ResourceProviderFeatureRegistration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.isTerraformResource"></a>

```java
import io.cdktn.providers.azurerm.resource_provider_feature_registration.ResourceProviderFeatureRegistration;

ResourceProviderFeatureRegistration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.generateConfigForImport"></a>

```java
import io.cdktn.providers.azurerm.resource_provider_feature_registration.ResourceProviderFeatureRegistration;

ResourceProviderFeatureRegistration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ResourceProviderFeatureRegistration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ResourceProviderFeatureRegistration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ResourceProviderFeatureRegistration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ResourceProviderFeatureRegistration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_provider_feature_registration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ResourceProviderFeatureRegistration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference">ResourceProviderFeatureRegistrationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.providerNameInput">providerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeouts">ResourceProviderFeatureRegistrationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.providerName">providerName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.timeouts"></a>

```java
public ResourceProviderFeatureRegistrationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference">ResourceProviderFeatureRegistrationTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `providerNameInput`<sup>Optional</sup> <a name="providerNameInput" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.providerNameInput"></a>

```java
public java.lang.String getProviderNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.timeoutsInput"></a>

```java
public IResolvable|ResourceProviderFeatureRegistrationTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeouts">ResourceProviderFeatureRegistrationTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.providerName"></a>

```java
public java.lang.String getProviderName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ResourceProviderFeatureRegistrationConfig <a name="ResourceProviderFeatureRegistrationConfig" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationConfig.Initializer"></a>

```java
import io.cdktn.providers.azurerm.resource_provider_feature_registration.ResourceProviderFeatureRegistrationConfig;

ResourceProviderFeatureRegistrationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .providerName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(ResourceProviderFeatureRegistrationTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_provider_feature_registration#name ResourceProviderFeatureRegistration#name}. |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationConfig.property.providerName">providerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_provider_feature_registration#provider_name ResourceProviderFeatureRegistration#provider_name}. |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_provider_feature_registration#id ResourceProviderFeatureRegistration#id}. |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeouts">ResourceProviderFeatureRegistrationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_provider_feature_registration#name ResourceProviderFeatureRegistration#name}.

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationConfig.property.providerName"></a>

```java
public java.lang.String getProviderName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_provider_feature_registration#provider_name ResourceProviderFeatureRegistration#provider_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_provider_feature_registration#id ResourceProviderFeatureRegistration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationConfig.property.timeouts"></a>

```java
public ResourceProviderFeatureRegistrationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeouts">ResourceProviderFeatureRegistrationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_provider_feature_registration#timeouts ResourceProviderFeatureRegistration#timeouts}

---

### ResourceProviderFeatureRegistrationTimeouts <a name="ResourceProviderFeatureRegistrationTimeouts" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeouts.Initializer"></a>

```java
import io.cdktn.providers.azurerm.resource_provider_feature_registration.ResourceProviderFeatureRegistrationTimeouts;

ResourceProviderFeatureRegistrationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_provider_feature_registration#create ResourceProviderFeatureRegistration#create}. |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_provider_feature_registration#delete ResourceProviderFeatureRegistration#delete}. |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_provider_feature_registration#read ResourceProviderFeatureRegistration#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_provider_feature_registration#create ResourceProviderFeatureRegistration#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_provider_feature_registration#delete ResourceProviderFeatureRegistration#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_provider_feature_registration#read ResourceProviderFeatureRegistration#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### ResourceProviderFeatureRegistrationTimeoutsOutputReference <a name="ResourceProviderFeatureRegistrationTimeoutsOutputReference" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.resource_provider_feature_registration.ResourceProviderFeatureRegistrationTimeoutsOutputReference;

new ResourceProviderFeatureRegistrationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeouts">ResourceProviderFeatureRegistrationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|ResourceProviderFeatureRegistrationTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeouts">ResourceProviderFeatureRegistrationTimeouts</a>

---



