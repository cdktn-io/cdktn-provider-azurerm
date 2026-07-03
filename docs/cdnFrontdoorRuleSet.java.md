# `cdnFrontdoorRuleSet` Submodule <a name="`cdnFrontdoorRuleSet` Submodule" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CdnFrontdoorRuleSet <a name="CdnFrontdoorRuleSet" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/cdn_frontdoor_rule_set azurerm_cdn_frontdoor_rule_set}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.Initializer"></a>

```java
import io.cdktn.providers.azurerm.cdn_frontdoor_rule_set.CdnFrontdoorRuleSet;

CdnFrontdoorRuleSet.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .cdnFrontdoorProfileId(java.lang.String)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(CdnFrontdoorRuleSetTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.Initializer.parameter.cdnFrontdoorProfileId">cdnFrontdoorProfileId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/cdn_frontdoor_rule_set#cdn_frontdoor_profile_id CdnFrontdoorRuleSet#cdn_frontdoor_profile_id}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/cdn_frontdoor_rule_set#name CdnFrontdoorRuleSet#name}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/cdn_frontdoor_rule_set#id CdnFrontdoorRuleSet#id}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetTimeouts">CdnFrontdoorRuleSetTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `cdnFrontdoorProfileId`<sup>Required</sup> <a name="cdnFrontdoorProfileId" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.Initializer.parameter.cdnFrontdoorProfileId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/cdn_frontdoor_rule_set#cdn_frontdoor_profile_id CdnFrontdoorRuleSet#cdn_frontdoor_profile_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/cdn_frontdoor_rule_set#name CdnFrontdoorRuleSet#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/cdn_frontdoor_rule_set#id CdnFrontdoorRuleSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetTimeouts">CdnFrontdoorRuleSetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/cdn_frontdoor_rule_set#timeouts CdnFrontdoorRuleSet#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.putTimeouts"></a>

```java
public void putTimeouts(CdnFrontdoorRuleSetTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetTimeouts">CdnFrontdoorRuleSetTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CdnFrontdoorRuleSet resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.isConstruct"></a>

```java
import io.cdktn.providers.azurerm.cdn_frontdoor_rule_set.CdnFrontdoorRuleSet;

CdnFrontdoorRuleSet.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.isTerraformElement"></a>

```java
import io.cdktn.providers.azurerm.cdn_frontdoor_rule_set.CdnFrontdoorRuleSet;

CdnFrontdoorRuleSet.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.isTerraformResource"></a>

```java
import io.cdktn.providers.azurerm.cdn_frontdoor_rule_set.CdnFrontdoorRuleSet;

CdnFrontdoorRuleSet.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.generateConfigForImport"></a>

```java
import io.cdktn.providers.azurerm.cdn_frontdoor_rule_set.CdnFrontdoorRuleSet;

CdnFrontdoorRuleSet.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CdnFrontdoorRuleSet.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a CdnFrontdoorRuleSet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CdnFrontdoorRuleSet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CdnFrontdoorRuleSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/cdn_frontdoor_rule_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the CdnFrontdoorRuleSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetTimeoutsOutputReference">CdnFrontdoorRuleSetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.property.cdnFrontdoorProfileIdInput">cdnFrontdoorProfileIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetTimeouts">CdnFrontdoorRuleSetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.property.cdnFrontdoorProfileId">cdnFrontdoorProfileId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.property.timeouts"></a>

```java
public CdnFrontdoorRuleSetTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetTimeoutsOutputReference">CdnFrontdoorRuleSetTimeoutsOutputReference</a>

---

##### `cdnFrontdoorProfileIdInput`<sup>Optional</sup> <a name="cdnFrontdoorProfileIdInput" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.property.cdnFrontdoorProfileIdInput"></a>

```java
public java.lang.String getCdnFrontdoorProfileIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.property.timeoutsInput"></a>

```java
public IResolvable|CdnFrontdoorRuleSetTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetTimeouts">CdnFrontdoorRuleSetTimeouts</a>

---

##### `cdnFrontdoorProfileId`<sup>Required</sup> <a name="cdnFrontdoorProfileId" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.property.cdnFrontdoorProfileId"></a>

```java
public java.lang.String getCdnFrontdoorProfileId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSet.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CdnFrontdoorRuleSetConfig <a name="CdnFrontdoorRuleSetConfig" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetConfig.Initializer"></a>

```java
import io.cdktn.providers.azurerm.cdn_frontdoor_rule_set.CdnFrontdoorRuleSetConfig;

CdnFrontdoorRuleSetConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .cdnFrontdoorProfileId(java.lang.String)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(CdnFrontdoorRuleSetTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetConfig.property.cdnFrontdoorProfileId">cdnFrontdoorProfileId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/cdn_frontdoor_rule_set#cdn_frontdoor_profile_id CdnFrontdoorRuleSet#cdn_frontdoor_profile_id}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/cdn_frontdoor_rule_set#name CdnFrontdoorRuleSet#name}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/cdn_frontdoor_rule_set#id CdnFrontdoorRuleSet#id}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetTimeouts">CdnFrontdoorRuleSetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `cdnFrontdoorProfileId`<sup>Required</sup> <a name="cdnFrontdoorProfileId" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetConfig.property.cdnFrontdoorProfileId"></a>

```java
public java.lang.String getCdnFrontdoorProfileId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/cdn_frontdoor_rule_set#cdn_frontdoor_profile_id CdnFrontdoorRuleSet#cdn_frontdoor_profile_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/cdn_frontdoor_rule_set#name CdnFrontdoorRuleSet#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/cdn_frontdoor_rule_set#id CdnFrontdoorRuleSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetConfig.property.timeouts"></a>

```java
public CdnFrontdoorRuleSetTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetTimeouts">CdnFrontdoorRuleSetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/cdn_frontdoor_rule_set#timeouts CdnFrontdoorRuleSet#timeouts}

---

### CdnFrontdoorRuleSetTimeouts <a name="CdnFrontdoorRuleSetTimeouts" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetTimeouts.Initializer"></a>

```java
import io.cdktn.providers.azurerm.cdn_frontdoor_rule_set.CdnFrontdoorRuleSetTimeouts;

CdnFrontdoorRuleSetTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/cdn_frontdoor_rule_set#create CdnFrontdoorRuleSet#create}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/cdn_frontdoor_rule_set#delete CdnFrontdoorRuleSet#delete}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/cdn_frontdoor_rule_set#read CdnFrontdoorRuleSet#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/cdn_frontdoor_rule_set#create CdnFrontdoorRuleSet#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/cdn_frontdoor_rule_set#delete CdnFrontdoorRuleSet#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/cdn_frontdoor_rule_set#read CdnFrontdoorRuleSet#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### CdnFrontdoorRuleSetTimeoutsOutputReference <a name="CdnFrontdoorRuleSetTimeoutsOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.cdn_frontdoor_rule_set.CdnFrontdoorRuleSetTimeoutsOutputReference;

new CdnFrontdoorRuleSetTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetTimeouts">CdnFrontdoorRuleSetTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|CdnFrontdoorRuleSetTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.cdnFrontdoorRuleSet.CdnFrontdoorRuleSetTimeouts">CdnFrontdoorRuleSetTimeouts</a>

---



