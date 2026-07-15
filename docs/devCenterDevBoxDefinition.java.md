# `devCenterDevBoxDefinition` Submodule <a name="`devCenterDevBoxDefinition` Submodule" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevCenterDevBoxDefinition <a name="DevCenterDevBoxDefinition" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/dev_center_dev_box_definition azurerm_dev_center_dev_box_definition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.Initializer"></a>

```java
import io.cdktn.providers.azurerm.dev_center_dev_box_definition.DevCenterDevBoxDefinition;

DevCenterDevBoxDefinition.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .devCenterId(java.lang.String)
    .imageReferenceId(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .skuName(java.lang.String)
//  .hibernateSupportEnabled(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DevCenterDevBoxDefinitionTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.Initializer.parameter.devCenterId">devCenterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/dev_center_dev_box_definition#dev_center_id DevCenterDevBoxDefinition#dev_center_id}. |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.Initializer.parameter.imageReferenceId">imageReferenceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/dev_center_dev_box_definition#image_reference_id DevCenterDevBoxDefinition#image_reference_id}. |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/dev_center_dev_box_definition#location DevCenterDevBoxDefinition#location}. |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/dev_center_dev_box_definition#name DevCenterDevBoxDefinition#name}. |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.Initializer.parameter.skuName">skuName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/dev_center_dev_box_definition#sku_name DevCenterDevBoxDefinition#sku_name}. |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.Initializer.parameter.hibernateSupportEnabled">hibernateSupportEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/dev_center_dev_box_definition#hibernate_support_enabled DevCenterDevBoxDefinition#hibernate_support_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/dev_center_dev_box_definition#id DevCenterDevBoxDefinition#id}. |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/dev_center_dev_box_definition#tags DevCenterDevBoxDefinition#tags}. |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeouts">DevCenterDevBoxDefinitionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `devCenterId`<sup>Required</sup> <a name="devCenterId" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.Initializer.parameter.devCenterId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/dev_center_dev_box_definition#dev_center_id DevCenterDevBoxDefinition#dev_center_id}.

---

##### `imageReferenceId`<sup>Required</sup> <a name="imageReferenceId" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.Initializer.parameter.imageReferenceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/dev_center_dev_box_definition#image_reference_id DevCenterDevBoxDefinition#image_reference_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/dev_center_dev_box_definition#location DevCenterDevBoxDefinition#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/dev_center_dev_box_definition#name DevCenterDevBoxDefinition#name}.

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.Initializer.parameter.skuName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/dev_center_dev_box_definition#sku_name DevCenterDevBoxDefinition#sku_name}.

---

##### `hibernateSupportEnabled`<sup>Optional</sup> <a name="hibernateSupportEnabled" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.Initializer.parameter.hibernateSupportEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/dev_center_dev_box_definition#hibernate_support_enabled DevCenterDevBoxDefinition#hibernate_support_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/dev_center_dev_box_definition#id DevCenterDevBoxDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/dev_center_dev_box_definition#tags DevCenterDevBoxDefinition#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeouts">DevCenterDevBoxDefinitionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/dev_center_dev_box_definition#timeouts DevCenterDevBoxDefinition#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.resetHibernateSupportEnabled">resetHibernateSupportEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.putTimeouts"></a>

```java
public void putTimeouts(DevCenterDevBoxDefinitionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeouts">DevCenterDevBoxDefinitionTimeouts</a>

---

##### `resetHibernateSupportEnabled` <a name="resetHibernateSupportEnabled" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.resetHibernateSupportEnabled"></a>

```java
public void resetHibernateSupportEnabled()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.resetId"></a>

```java
public void resetId()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DevCenterDevBoxDefinition resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.isConstruct"></a>

```java
import io.cdktn.providers.azurerm.dev_center_dev_box_definition.DevCenterDevBoxDefinition;

DevCenterDevBoxDefinition.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.isTerraformElement"></a>

```java
import io.cdktn.providers.azurerm.dev_center_dev_box_definition.DevCenterDevBoxDefinition;

DevCenterDevBoxDefinition.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.isTerraformResource"></a>

```java
import io.cdktn.providers.azurerm.dev_center_dev_box_definition.DevCenterDevBoxDefinition;

DevCenterDevBoxDefinition.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.generateConfigForImport"></a>

```java
import io.cdktn.providers.azurerm.dev_center_dev_box_definition.DevCenterDevBoxDefinition;

DevCenterDevBoxDefinition.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DevCenterDevBoxDefinition.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DevCenterDevBoxDefinition resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DevCenterDevBoxDefinition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DevCenterDevBoxDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/dev_center_dev_box_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DevCenterDevBoxDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference">DevCenterDevBoxDefinitionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.devCenterIdInput">devCenterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.hibernateSupportEnabledInput">hibernateSupportEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.imageReferenceIdInput">imageReferenceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.skuNameInput">skuNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeouts">DevCenterDevBoxDefinitionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.devCenterId">devCenterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.hibernateSupportEnabled">hibernateSupportEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.imageReferenceId">imageReferenceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.skuName">skuName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.timeouts"></a>

```java
public DevCenterDevBoxDefinitionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference">DevCenterDevBoxDefinitionTimeoutsOutputReference</a>

---

##### `devCenterIdInput`<sup>Optional</sup> <a name="devCenterIdInput" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.devCenterIdInput"></a>

```java
public java.lang.String getDevCenterIdInput();
```

- *Type:* java.lang.String

---

##### `hibernateSupportEnabledInput`<sup>Optional</sup> <a name="hibernateSupportEnabledInput" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.hibernateSupportEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getHibernateSupportEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `imageReferenceIdInput`<sup>Optional</sup> <a name="imageReferenceIdInput" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.imageReferenceIdInput"></a>

```java
public java.lang.String getImageReferenceIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `skuNameInput`<sup>Optional</sup> <a name="skuNameInput" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.skuNameInput"></a>

```java
public java.lang.String getSkuNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.timeoutsInput"></a>

```java
public IResolvable|DevCenterDevBoxDefinitionTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeouts">DevCenterDevBoxDefinitionTimeouts</a>

---

##### `devCenterId`<sup>Required</sup> <a name="devCenterId" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.devCenterId"></a>

```java
public java.lang.String getDevCenterId();
```

- *Type:* java.lang.String

---

##### `hibernateSupportEnabled`<sup>Required</sup> <a name="hibernateSupportEnabled" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.hibernateSupportEnabled"></a>

```java
public java.lang.Boolean|IResolvable getHibernateSupportEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `imageReferenceId`<sup>Required</sup> <a name="imageReferenceId" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.imageReferenceId"></a>

```java
public java.lang.String getImageReferenceId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.skuName"></a>

```java
public java.lang.String getSkuName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DevCenterDevBoxDefinitionConfig <a name="DevCenterDevBoxDefinitionConfig" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.Initializer"></a>

```java
import io.cdktn.providers.azurerm.dev_center_dev_box_definition.DevCenterDevBoxDefinitionConfig;

DevCenterDevBoxDefinitionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .devCenterId(java.lang.String)
    .imageReferenceId(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .skuName(java.lang.String)
//  .hibernateSupportEnabled(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DevCenterDevBoxDefinitionTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.devCenterId">devCenterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/dev_center_dev_box_definition#dev_center_id DevCenterDevBoxDefinition#dev_center_id}. |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.imageReferenceId">imageReferenceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/dev_center_dev_box_definition#image_reference_id DevCenterDevBoxDefinition#image_reference_id}. |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/dev_center_dev_box_definition#location DevCenterDevBoxDefinition#location}. |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/dev_center_dev_box_definition#name DevCenterDevBoxDefinition#name}. |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.skuName">skuName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/dev_center_dev_box_definition#sku_name DevCenterDevBoxDefinition#sku_name}. |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.hibernateSupportEnabled">hibernateSupportEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/dev_center_dev_box_definition#hibernate_support_enabled DevCenterDevBoxDefinition#hibernate_support_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/dev_center_dev_box_definition#id DevCenterDevBoxDefinition#id}. |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/dev_center_dev_box_definition#tags DevCenterDevBoxDefinition#tags}. |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeouts">DevCenterDevBoxDefinitionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `devCenterId`<sup>Required</sup> <a name="devCenterId" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.devCenterId"></a>

```java
public java.lang.String getDevCenterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/dev_center_dev_box_definition#dev_center_id DevCenterDevBoxDefinition#dev_center_id}.

---

##### `imageReferenceId`<sup>Required</sup> <a name="imageReferenceId" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.imageReferenceId"></a>

```java
public java.lang.String getImageReferenceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/dev_center_dev_box_definition#image_reference_id DevCenterDevBoxDefinition#image_reference_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/dev_center_dev_box_definition#location DevCenterDevBoxDefinition#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/dev_center_dev_box_definition#name DevCenterDevBoxDefinition#name}.

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.skuName"></a>

```java
public java.lang.String getSkuName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/dev_center_dev_box_definition#sku_name DevCenterDevBoxDefinition#sku_name}.

---

##### `hibernateSupportEnabled`<sup>Optional</sup> <a name="hibernateSupportEnabled" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.hibernateSupportEnabled"></a>

```java
public java.lang.Boolean|IResolvable getHibernateSupportEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/dev_center_dev_box_definition#hibernate_support_enabled DevCenterDevBoxDefinition#hibernate_support_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/dev_center_dev_box_definition#id DevCenterDevBoxDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/dev_center_dev_box_definition#tags DevCenterDevBoxDefinition#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.timeouts"></a>

```java
public DevCenterDevBoxDefinitionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeouts">DevCenterDevBoxDefinitionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/dev_center_dev_box_definition#timeouts DevCenterDevBoxDefinition#timeouts}

---

### DevCenterDevBoxDefinitionTimeouts <a name="DevCenterDevBoxDefinitionTimeouts" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeouts.Initializer"></a>

```java
import io.cdktn.providers.azurerm.dev_center_dev_box_definition.DevCenterDevBoxDefinitionTimeouts;

DevCenterDevBoxDefinitionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/dev_center_dev_box_definition#create DevCenterDevBoxDefinition#create}. |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/dev_center_dev_box_definition#delete DevCenterDevBoxDefinition#delete}. |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/dev_center_dev_box_definition#read DevCenterDevBoxDefinition#read}. |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/dev_center_dev_box_definition#update DevCenterDevBoxDefinition#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/dev_center_dev_box_definition#create DevCenterDevBoxDefinition#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/dev_center_dev_box_definition#delete DevCenterDevBoxDefinition#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/dev_center_dev_box_definition#read DevCenterDevBoxDefinition#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/dev_center_dev_box_definition#update DevCenterDevBoxDefinition#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DevCenterDevBoxDefinitionTimeoutsOutputReference <a name="DevCenterDevBoxDefinitionTimeoutsOutputReference" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.dev_center_dev_box_definition.DevCenterDevBoxDefinitionTimeoutsOutputReference;

new DevCenterDevBoxDefinitionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeouts">DevCenterDevBoxDefinitionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|DevCenterDevBoxDefinitionTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeouts">DevCenterDevBoxDefinitionTimeouts</a>

---



