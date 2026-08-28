# `ephemeralAzurermKeyVaultCertificate` Submodule <a name="`ephemeralAzurermKeyVaultCertificate` Submodule" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralAzurermKeyVaultCertificate <a name="EphemeralAzurermKeyVaultCertificate" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/ephemeral-resources/key_vault_certificate azurerm_key_vault_certificate}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.Initializer"></a>

```java
import io.cdktn.providers.azurerm.ephemeral_azurerm_key_vault_certificate.EphemeralAzurermKeyVaultCertificate;

EphemeralAzurermKeyVaultCertificate.Builder.create(Construct scope, java.lang.String id)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformEphemeralResourceLifecycle)
//  .provider(TerraformProvider)
    .keyVaultId(java.lang.String)
    .name(java.lang.String)
//  .version(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.Initializer.parameter.keyVaultId">keyVaultId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/ephemeral-resources/key_vault_certificate#key_vault_id EphemeralAzurermKeyVaultCertificate#key_vault_id}. |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/ephemeral-resources/key_vault_certificate#name EphemeralAzurermKeyVaultCertificate#name}. |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.Initializer.parameter.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/ephemeral-resources/key_vault_certificate#version EphemeralAzurermKeyVaultCertificate#version}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `keyVaultId`<sup>Required</sup> <a name="keyVaultId" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.Initializer.parameter.keyVaultId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/ephemeral-resources/key_vault_certificate#key_vault_id EphemeralAzurermKeyVaultCertificate#key_vault_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/ephemeral-resources/key_vault_certificate#name EphemeralAzurermKeyVaultCertificate#name}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.Initializer.parameter.version"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/ephemeral-resources/key_vault_certificate#version EphemeralAzurermKeyVaultCertificate#version}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.toTerraform">toTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this ephemeral resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetVersion` <a name="resetVersion" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.resetVersion"></a>

```java
public void resetVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.isTerraformEphemeralResource">isTerraformEphemeralResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.isConstruct"></a>

```java
import io.cdktn.providers.azurerm.ephemeral_azurerm_key_vault_certificate.EphemeralAzurermKeyVaultCertificate;

EphemeralAzurermKeyVaultCertificate.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.isTerraformElement"></a>

```java
import io.cdktn.providers.azurerm.ephemeral_azurerm_key_vault_certificate.EphemeralAzurermKeyVaultCertificate;

EphemeralAzurermKeyVaultCertificate.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformEphemeralResource` <a name="isTerraformEphemeralResource" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.isTerraformEphemeralResource"></a>

```java
import io.cdktn.providers.azurerm.ephemeral_azurerm_key_vault_certificate.EphemeralAzurermKeyVaultCertificate;

EphemeralAzurermKeyVaultCertificate.isTerraformEphemeralResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.certificateCount">certificateCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.expirationDate">expirationDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.hex">hex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.notBeforeDate">notBeforeDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.pem">pem</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.keyVaultIdInput">keyVaultIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.keyVaultId">keyVaultId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.lifecycle"></a>

```java
public TerraformEphemeralResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `certificateCount`<sup>Required</sup> <a name="certificateCount" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.certificateCount"></a>

```java
public java.lang.Number getCertificateCount();
```

- *Type:* java.lang.Number

---

##### `expirationDate`<sup>Required</sup> <a name="expirationDate" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.expirationDate"></a>

```java
public java.lang.String getExpirationDate();
```

- *Type:* java.lang.String

---

##### `hex`<sup>Required</sup> <a name="hex" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.hex"></a>

```java
public java.lang.String getHex();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `notBeforeDate`<sup>Required</sup> <a name="notBeforeDate" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.notBeforeDate"></a>

```java
public java.lang.String getNotBeforeDate();
```

- *Type:* java.lang.String

---

##### `pem`<sup>Required</sup> <a name="pem" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.pem"></a>

```java
public java.lang.String getPem();
```

- *Type:* java.lang.String

---

##### `keyVaultIdInput`<sup>Optional</sup> <a name="keyVaultIdInput" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.keyVaultIdInput"></a>

```java
public java.lang.String getKeyVaultIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `keyVaultId`<sup>Required</sup> <a name="keyVaultId" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.keyVaultId"></a>

```java
public java.lang.String getKeyVaultId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralAzurermKeyVaultCertificateConfig <a name="EphemeralAzurermKeyVaultCertificateConfig" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificateConfig.Initializer"></a>

```java
import io.cdktn.providers.azurerm.ephemeral_azurerm_key_vault_certificate.EphemeralAzurermKeyVaultCertificateConfig;

EphemeralAzurermKeyVaultCertificateConfig.builder()
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformEphemeralResourceLifecycle)
//  .provider(TerraformProvider)
    .keyVaultId(java.lang.String)
    .name(java.lang.String)
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificateConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificateConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificateConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificateConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificateConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificateConfig.property.keyVaultId">keyVaultId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/ephemeral-resources/key_vault_certificate#key_vault_id EphemeralAzurermKeyVaultCertificate#key_vault_id}. |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificateConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/ephemeral-resources/key_vault_certificate#name EphemeralAzurermKeyVaultCertificate#name}. |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificateConfig.property.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/ephemeral-resources/key_vault_certificate#version EphemeralAzurermKeyVaultCertificate#version}. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificateConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificateConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificateConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificateConfig.property.lifecycle"></a>

```java
public TerraformEphemeralResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificateConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `keyVaultId`<sup>Required</sup> <a name="keyVaultId" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificateConfig.property.keyVaultId"></a>

```java
public java.lang.String getKeyVaultId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/ephemeral-resources/key_vault_certificate#key_vault_id EphemeralAzurermKeyVaultCertificate#key_vault_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificateConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/ephemeral-resources/key_vault_certificate#name EphemeralAzurermKeyVaultCertificate#name}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificateConfig.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/ephemeral-resources/key_vault_certificate#version EphemeralAzurermKeyVaultCertificate#version}.

---



