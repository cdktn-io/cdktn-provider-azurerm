# `appServiceCustomHostnameBinding` Submodule <a name="`appServiceCustomHostnameBinding` Submodule" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppServiceCustomHostnameBinding <a name="AppServiceCustomHostnameBinding" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/app_service_custom_hostname_binding azurerm_app_service_custom_hostname_binding}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.Initializer"></a>

```java
import io.cdktn.providers.azurerm.app_service_custom_hostname_binding.AppServiceCustomHostnameBinding;

AppServiceCustomHostnameBinding.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .appServiceName(java.lang.String)
    .hostname(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .id(java.lang.String)
//  .sslState(java.lang.String)
//  .thumbprint(java.lang.String)
//  .timeouts(AppServiceCustomHostnameBindingTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.Initializer.parameter.appServiceName">appServiceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/app_service_custom_hostname_binding#app_service_name AppServiceCustomHostnameBinding#app_service_name}. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.Initializer.parameter.hostname">hostname</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/app_service_custom_hostname_binding#hostname AppServiceCustomHostnameBinding#hostname}. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/app_service_custom_hostname_binding#resource_group_name AppServiceCustomHostnameBinding#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/app_service_custom_hostname_binding#id AppServiceCustomHostnameBinding#id}. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.Initializer.parameter.sslState">sslState</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/app_service_custom_hostname_binding#ssl_state AppServiceCustomHostnameBinding#ssl_state}. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.Initializer.parameter.thumbprint">thumbprint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/app_service_custom_hostname_binding#thumbprint AppServiceCustomHostnameBinding#thumbprint}. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeouts">AppServiceCustomHostnameBindingTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `appServiceName`<sup>Required</sup> <a name="appServiceName" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.Initializer.parameter.appServiceName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/app_service_custom_hostname_binding#app_service_name AppServiceCustomHostnameBinding#app_service_name}.

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.Initializer.parameter.hostname"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/app_service_custom_hostname_binding#hostname AppServiceCustomHostnameBinding#hostname}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/app_service_custom_hostname_binding#resource_group_name AppServiceCustomHostnameBinding#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/app_service_custom_hostname_binding#id AppServiceCustomHostnameBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sslState`<sup>Optional</sup> <a name="sslState" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.Initializer.parameter.sslState"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/app_service_custom_hostname_binding#ssl_state AppServiceCustomHostnameBinding#ssl_state}.

---

##### `thumbprint`<sup>Optional</sup> <a name="thumbprint" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.Initializer.parameter.thumbprint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/app_service_custom_hostname_binding#thumbprint AppServiceCustomHostnameBinding#thumbprint}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeouts">AppServiceCustomHostnameBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/app_service_custom_hostname_binding#timeouts AppServiceCustomHostnameBinding#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.resetSslState">resetSslState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.resetThumbprint">resetThumbprint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.putTimeouts"></a>

```java
public void putTimeouts(AppServiceCustomHostnameBindingTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeouts">AppServiceCustomHostnameBindingTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.resetId"></a>

```java
public void resetId()
```

##### `resetSslState` <a name="resetSslState" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.resetSslState"></a>

```java
public void resetSslState()
```

##### `resetThumbprint` <a name="resetThumbprint" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.resetThumbprint"></a>

```java
public void resetThumbprint()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AppServiceCustomHostnameBinding resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.isConstruct"></a>

```java
import io.cdktn.providers.azurerm.app_service_custom_hostname_binding.AppServiceCustomHostnameBinding;

AppServiceCustomHostnameBinding.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.isTerraformElement"></a>

```java
import io.cdktn.providers.azurerm.app_service_custom_hostname_binding.AppServiceCustomHostnameBinding;

AppServiceCustomHostnameBinding.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.isTerraformResource"></a>

```java
import io.cdktn.providers.azurerm.app_service_custom_hostname_binding.AppServiceCustomHostnameBinding;

AppServiceCustomHostnameBinding.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.generateConfigForImport"></a>

```java
import io.cdktn.providers.azurerm.app_service_custom_hostname_binding.AppServiceCustomHostnameBinding;

AppServiceCustomHostnameBinding.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AppServiceCustomHostnameBinding.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a AppServiceCustomHostnameBinding resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AppServiceCustomHostnameBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AppServiceCustomHostnameBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/app_service_custom_hostname_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the AppServiceCustomHostnameBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference">AppServiceCustomHostnameBindingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.virtualIp">virtualIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.appServiceNameInput">appServiceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.hostnameInput">hostnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.sslStateInput">sslStateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.thumbprintInput">thumbprintInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeouts">AppServiceCustomHostnameBindingTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.appServiceName">appServiceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.sslState">sslState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.thumbprint">thumbprint</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.timeouts"></a>

```java
public AppServiceCustomHostnameBindingTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference">AppServiceCustomHostnameBindingTimeoutsOutputReference</a>

---

##### `virtualIp`<sup>Required</sup> <a name="virtualIp" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.virtualIp"></a>

```java
public java.lang.String getVirtualIp();
```

- *Type:* java.lang.String

---

##### `appServiceNameInput`<sup>Optional</sup> <a name="appServiceNameInput" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.appServiceNameInput"></a>

```java
public java.lang.String getAppServiceNameInput();
```

- *Type:* java.lang.String

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.hostnameInput"></a>

```java
public java.lang.String getHostnameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `sslStateInput`<sup>Optional</sup> <a name="sslStateInput" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.sslStateInput"></a>

```java
public java.lang.String getSslStateInput();
```

- *Type:* java.lang.String

---

##### `thumbprintInput`<sup>Optional</sup> <a name="thumbprintInput" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.thumbprintInput"></a>

```java
public java.lang.String getThumbprintInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.timeoutsInput"></a>

```java
public IResolvable|AppServiceCustomHostnameBindingTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeouts">AppServiceCustomHostnameBindingTimeouts</a>

---

##### `appServiceName`<sup>Required</sup> <a name="appServiceName" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.appServiceName"></a>

```java
public java.lang.String getAppServiceName();
```

- *Type:* java.lang.String

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `sslState`<sup>Required</sup> <a name="sslState" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.sslState"></a>

```java
public java.lang.String getSslState();
```

- *Type:* java.lang.String

---

##### `thumbprint`<sup>Required</sup> <a name="thumbprint" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.thumbprint"></a>

```java
public java.lang.String getThumbprint();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AppServiceCustomHostnameBindingConfig <a name="AppServiceCustomHostnameBindingConfig" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.Initializer"></a>

```java
import io.cdktn.providers.azurerm.app_service_custom_hostname_binding.AppServiceCustomHostnameBindingConfig;

AppServiceCustomHostnameBindingConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .appServiceName(java.lang.String)
    .hostname(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .id(java.lang.String)
//  .sslState(java.lang.String)
//  .thumbprint(java.lang.String)
//  .timeouts(AppServiceCustomHostnameBindingTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.appServiceName">appServiceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/app_service_custom_hostname_binding#app_service_name AppServiceCustomHostnameBinding#app_service_name}. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.hostname">hostname</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/app_service_custom_hostname_binding#hostname AppServiceCustomHostnameBinding#hostname}. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/app_service_custom_hostname_binding#resource_group_name AppServiceCustomHostnameBinding#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/app_service_custom_hostname_binding#id AppServiceCustomHostnameBinding#id}. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.sslState">sslState</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/app_service_custom_hostname_binding#ssl_state AppServiceCustomHostnameBinding#ssl_state}. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.thumbprint">thumbprint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/app_service_custom_hostname_binding#thumbprint AppServiceCustomHostnameBinding#thumbprint}. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeouts">AppServiceCustomHostnameBindingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `appServiceName`<sup>Required</sup> <a name="appServiceName" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.appServiceName"></a>

```java
public java.lang.String getAppServiceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/app_service_custom_hostname_binding#app_service_name AppServiceCustomHostnameBinding#app_service_name}.

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/app_service_custom_hostname_binding#hostname AppServiceCustomHostnameBinding#hostname}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/app_service_custom_hostname_binding#resource_group_name AppServiceCustomHostnameBinding#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/app_service_custom_hostname_binding#id AppServiceCustomHostnameBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sslState`<sup>Optional</sup> <a name="sslState" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.sslState"></a>

```java
public java.lang.String getSslState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/app_service_custom_hostname_binding#ssl_state AppServiceCustomHostnameBinding#ssl_state}.

---

##### `thumbprint`<sup>Optional</sup> <a name="thumbprint" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.thumbprint"></a>

```java
public java.lang.String getThumbprint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/app_service_custom_hostname_binding#thumbprint AppServiceCustomHostnameBinding#thumbprint}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.timeouts"></a>

```java
public AppServiceCustomHostnameBindingTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeouts">AppServiceCustomHostnameBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/app_service_custom_hostname_binding#timeouts AppServiceCustomHostnameBinding#timeouts}

---

### AppServiceCustomHostnameBindingTimeouts <a name="AppServiceCustomHostnameBindingTimeouts" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeouts.Initializer"></a>

```java
import io.cdktn.providers.azurerm.app_service_custom_hostname_binding.AppServiceCustomHostnameBindingTimeouts;

AppServiceCustomHostnameBindingTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/app_service_custom_hostname_binding#create AppServiceCustomHostnameBinding#create}. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/app_service_custom_hostname_binding#delete AppServiceCustomHostnameBinding#delete}. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/app_service_custom_hostname_binding#read AppServiceCustomHostnameBinding#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/app_service_custom_hostname_binding#create AppServiceCustomHostnameBinding#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/app_service_custom_hostname_binding#delete AppServiceCustomHostnameBinding#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/app_service_custom_hostname_binding#read AppServiceCustomHostnameBinding#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppServiceCustomHostnameBindingTimeoutsOutputReference <a name="AppServiceCustomHostnameBindingTimeoutsOutputReference" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.app_service_custom_hostname_binding.AppServiceCustomHostnameBindingTimeoutsOutputReference;

new AppServiceCustomHostnameBindingTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeouts">AppServiceCustomHostnameBindingTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|AppServiceCustomHostnameBindingTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeouts">AppServiceCustomHostnameBindingTimeouts</a>

---



