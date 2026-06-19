# `virtualMachineScaleSetExtension` Submodule <a name="`virtualMachineScaleSetExtension` Submodule" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VirtualMachineScaleSetExtensionA <a name="VirtualMachineScaleSetExtensionA" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/virtual_machine_scale_set_extension azurerm_virtual_machine_scale_set_extension}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer"></a>

```java
import io.cdktn.providers.azurerm.virtual_machine_scale_set_extension.VirtualMachineScaleSetExtensionA;

VirtualMachineScaleSetExtensionA.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .publisher(java.lang.String)
    .type(java.lang.String)
    .typeHandlerVersion(java.lang.String)
    .virtualMachineScaleSetId(java.lang.String)
//  .automaticUpgradeEnabled(java.lang.Boolean|IResolvable)
//  .autoUpgradeMinorVersion(java.lang.Boolean|IResolvable)
//  .failureSuppressionEnabled(java.lang.Boolean|IResolvable)
//  .forceUpdateTag(java.lang.String)
//  .id(java.lang.String)
//  .protectedSettings(java.lang.String)
//  .protectedSettingsFromKeyVault(VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault)
//  .provisionAfterExtensions(java.util.List<java.lang.String>)
//  .settings(java.lang.String)
//  .timeouts(VirtualMachineScaleSetExtensionTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/virtual_machine_scale_set_extension#name VirtualMachineScaleSetExtensionA#name}. |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.publisher">publisher</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/virtual_machine_scale_set_extension#publisher VirtualMachineScaleSetExtensionA#publisher}. |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/virtual_machine_scale_set_extension#type VirtualMachineScaleSetExtensionA#type}. |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.typeHandlerVersion">typeHandlerVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/virtual_machine_scale_set_extension#type_handler_version VirtualMachineScaleSetExtensionA#type_handler_version}. |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.virtualMachineScaleSetId">virtualMachineScaleSetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/virtual_machine_scale_set_extension#virtual_machine_scale_set_id VirtualMachineScaleSetExtensionA#virtual_machine_scale_set_id}. |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.automaticUpgradeEnabled">automaticUpgradeEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/virtual_machine_scale_set_extension#automatic_upgrade_enabled VirtualMachineScaleSetExtensionA#automatic_upgrade_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.autoUpgradeMinorVersion">autoUpgradeMinorVersion</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/virtual_machine_scale_set_extension#auto_upgrade_minor_version VirtualMachineScaleSetExtensionA#auto_upgrade_minor_version}. |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.failureSuppressionEnabled">failureSuppressionEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/virtual_machine_scale_set_extension#failure_suppression_enabled VirtualMachineScaleSetExtensionA#failure_suppression_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.forceUpdateTag">forceUpdateTag</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/virtual_machine_scale_set_extension#force_update_tag VirtualMachineScaleSetExtensionA#force_update_tag}. |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/virtual_machine_scale_set_extension#id VirtualMachineScaleSetExtensionA#id}. |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.protectedSettings">protectedSettings</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/virtual_machine_scale_set_extension#protected_settings VirtualMachineScaleSetExtensionA#protected_settings}. |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.protectedSettingsFromKeyVault">protectedSettingsFromKeyVault</a></code> | <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault">VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault</a></code> | protected_settings_from_key_vault block. |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.provisionAfterExtensions">provisionAfterExtensions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/virtual_machine_scale_set_extension#provision_after_extensions VirtualMachineScaleSetExtensionA#provision_after_extensions}. |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.settings">settings</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/virtual_machine_scale_set_extension#settings VirtualMachineScaleSetExtensionA#settings}. |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeouts">VirtualMachineScaleSetExtensionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/virtual_machine_scale_set_extension#name VirtualMachineScaleSetExtensionA#name}.

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.publisher"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/virtual_machine_scale_set_extension#publisher VirtualMachineScaleSetExtensionA#publisher}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/virtual_machine_scale_set_extension#type VirtualMachineScaleSetExtensionA#type}.

---

##### `typeHandlerVersion`<sup>Required</sup> <a name="typeHandlerVersion" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.typeHandlerVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/virtual_machine_scale_set_extension#type_handler_version VirtualMachineScaleSetExtensionA#type_handler_version}.

---

##### `virtualMachineScaleSetId`<sup>Required</sup> <a name="virtualMachineScaleSetId" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.virtualMachineScaleSetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/virtual_machine_scale_set_extension#virtual_machine_scale_set_id VirtualMachineScaleSetExtensionA#virtual_machine_scale_set_id}.

---

##### `automaticUpgradeEnabled`<sup>Optional</sup> <a name="automaticUpgradeEnabled" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.automaticUpgradeEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/virtual_machine_scale_set_extension#automatic_upgrade_enabled VirtualMachineScaleSetExtensionA#automatic_upgrade_enabled}.

---

##### `autoUpgradeMinorVersion`<sup>Optional</sup> <a name="autoUpgradeMinorVersion" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.autoUpgradeMinorVersion"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/virtual_machine_scale_set_extension#auto_upgrade_minor_version VirtualMachineScaleSetExtensionA#auto_upgrade_minor_version}.

---

##### `failureSuppressionEnabled`<sup>Optional</sup> <a name="failureSuppressionEnabled" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.failureSuppressionEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/virtual_machine_scale_set_extension#failure_suppression_enabled VirtualMachineScaleSetExtensionA#failure_suppression_enabled}.

---

##### `forceUpdateTag`<sup>Optional</sup> <a name="forceUpdateTag" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.forceUpdateTag"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/virtual_machine_scale_set_extension#force_update_tag VirtualMachineScaleSetExtensionA#force_update_tag}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/virtual_machine_scale_set_extension#id VirtualMachineScaleSetExtensionA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `protectedSettings`<sup>Optional</sup> <a name="protectedSettings" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.protectedSettings"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/virtual_machine_scale_set_extension#protected_settings VirtualMachineScaleSetExtensionA#protected_settings}.

---

##### `protectedSettingsFromKeyVault`<sup>Optional</sup> <a name="protectedSettingsFromKeyVault" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.protectedSettingsFromKeyVault"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault">VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault</a>

protected_settings_from_key_vault block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/virtual_machine_scale_set_extension#protected_settings_from_key_vault VirtualMachineScaleSetExtensionA#protected_settings_from_key_vault}

---

##### `provisionAfterExtensions`<sup>Optional</sup> <a name="provisionAfterExtensions" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.provisionAfterExtensions"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/virtual_machine_scale_set_extension#provision_after_extensions VirtualMachineScaleSetExtensionA#provision_after_extensions}.

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.settings"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/virtual_machine_scale_set_extension#settings VirtualMachineScaleSetExtensionA#settings}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeouts">VirtualMachineScaleSetExtensionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/virtual_machine_scale_set_extension#timeouts VirtualMachineScaleSetExtensionA#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.putProtectedSettingsFromKeyVault">putProtectedSettingsFromKeyVault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.resetAutomaticUpgradeEnabled">resetAutomaticUpgradeEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.resetAutoUpgradeMinorVersion">resetAutoUpgradeMinorVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.resetFailureSuppressionEnabled">resetFailureSuppressionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.resetForceUpdateTag">resetForceUpdateTag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.resetProtectedSettings">resetProtectedSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.resetProtectedSettingsFromKeyVault">resetProtectedSettingsFromKeyVault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.resetProvisionAfterExtensions">resetProvisionAfterExtensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.resetSettings">resetSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putProtectedSettingsFromKeyVault` <a name="putProtectedSettingsFromKeyVault" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.putProtectedSettingsFromKeyVault"></a>

```java
public void putProtectedSettingsFromKeyVault(VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.putProtectedSettingsFromKeyVault.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault">VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.putTimeouts"></a>

```java
public void putTimeouts(VirtualMachineScaleSetExtensionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeouts">VirtualMachineScaleSetExtensionTimeouts</a>

---

##### `resetAutomaticUpgradeEnabled` <a name="resetAutomaticUpgradeEnabled" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.resetAutomaticUpgradeEnabled"></a>

```java
public void resetAutomaticUpgradeEnabled()
```

##### `resetAutoUpgradeMinorVersion` <a name="resetAutoUpgradeMinorVersion" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.resetAutoUpgradeMinorVersion"></a>

```java
public void resetAutoUpgradeMinorVersion()
```

##### `resetFailureSuppressionEnabled` <a name="resetFailureSuppressionEnabled" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.resetFailureSuppressionEnabled"></a>

```java
public void resetFailureSuppressionEnabled()
```

##### `resetForceUpdateTag` <a name="resetForceUpdateTag" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.resetForceUpdateTag"></a>

```java
public void resetForceUpdateTag()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.resetId"></a>

```java
public void resetId()
```

##### `resetProtectedSettings` <a name="resetProtectedSettings" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.resetProtectedSettings"></a>

```java
public void resetProtectedSettings()
```

##### `resetProtectedSettingsFromKeyVault` <a name="resetProtectedSettingsFromKeyVault" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.resetProtectedSettingsFromKeyVault"></a>

```java
public void resetProtectedSettingsFromKeyVault()
```

##### `resetProvisionAfterExtensions` <a name="resetProvisionAfterExtensions" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.resetProvisionAfterExtensions"></a>

```java
public void resetProvisionAfterExtensions()
```

##### `resetSettings` <a name="resetSettings" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.resetSettings"></a>

```java
public void resetSettings()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a VirtualMachineScaleSetExtensionA resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.isConstruct"></a>

```java
import io.cdktn.providers.azurerm.virtual_machine_scale_set_extension.VirtualMachineScaleSetExtensionA;

VirtualMachineScaleSetExtensionA.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.isTerraformElement"></a>

```java
import io.cdktn.providers.azurerm.virtual_machine_scale_set_extension.VirtualMachineScaleSetExtensionA;

VirtualMachineScaleSetExtensionA.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.isTerraformResource"></a>

```java
import io.cdktn.providers.azurerm.virtual_machine_scale_set_extension.VirtualMachineScaleSetExtensionA;

VirtualMachineScaleSetExtensionA.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.generateConfigForImport"></a>

```java
import io.cdktn.providers.azurerm.virtual_machine_scale_set_extension.VirtualMachineScaleSetExtensionA;

VirtualMachineScaleSetExtensionA.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),VirtualMachineScaleSetExtensionA.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a VirtualMachineScaleSetExtensionA resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the VirtualMachineScaleSetExtensionA to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing VirtualMachineScaleSetExtensionA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/virtual_machine_scale_set_extension#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the VirtualMachineScaleSetExtensionA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.protectedSettingsFromKeyVault">protectedSettingsFromKeyVault</a></code> | <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference">VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference">VirtualMachineScaleSetExtensionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.automaticUpgradeEnabledInput">automaticUpgradeEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.autoUpgradeMinorVersionInput">autoUpgradeMinorVersionInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.failureSuppressionEnabledInput">failureSuppressionEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.forceUpdateTagInput">forceUpdateTagInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.protectedSettingsFromKeyVaultInput">protectedSettingsFromKeyVaultInput</a></code> | <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault">VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.protectedSettingsInput">protectedSettingsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.provisionAfterExtensionsInput">provisionAfterExtensionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.publisherInput">publisherInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.settingsInput">settingsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeouts">VirtualMachineScaleSetExtensionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.typeHandlerVersionInput">typeHandlerVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.virtualMachineScaleSetIdInput">virtualMachineScaleSetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.automaticUpgradeEnabled">automaticUpgradeEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.autoUpgradeMinorVersion">autoUpgradeMinorVersion</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.failureSuppressionEnabled">failureSuppressionEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.forceUpdateTag">forceUpdateTag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.protectedSettings">protectedSettings</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.provisionAfterExtensions">provisionAfterExtensions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.publisher">publisher</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.settings">settings</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.typeHandlerVersion">typeHandlerVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.virtualMachineScaleSetId">virtualMachineScaleSetId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `protectedSettingsFromKeyVault`<sup>Required</sup> <a name="protectedSettingsFromKeyVault" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.protectedSettingsFromKeyVault"></a>

```java
public VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference getProtectedSettingsFromKeyVault();
```

- *Type:* <a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference">VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.timeouts"></a>

```java
public VirtualMachineScaleSetExtensionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference">VirtualMachineScaleSetExtensionTimeoutsOutputReference</a>

---

##### `automaticUpgradeEnabledInput`<sup>Optional</sup> <a name="automaticUpgradeEnabledInput" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.automaticUpgradeEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getAutomaticUpgradeEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `autoUpgradeMinorVersionInput`<sup>Optional</sup> <a name="autoUpgradeMinorVersionInput" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.autoUpgradeMinorVersionInput"></a>

```java
public java.lang.Boolean|IResolvable getAutoUpgradeMinorVersionInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `failureSuppressionEnabledInput`<sup>Optional</sup> <a name="failureSuppressionEnabledInput" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.failureSuppressionEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getFailureSuppressionEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `forceUpdateTagInput`<sup>Optional</sup> <a name="forceUpdateTagInput" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.forceUpdateTagInput"></a>

```java
public java.lang.String getForceUpdateTagInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `protectedSettingsFromKeyVaultInput`<sup>Optional</sup> <a name="protectedSettingsFromKeyVaultInput" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.protectedSettingsFromKeyVaultInput"></a>

```java
public VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault getProtectedSettingsFromKeyVaultInput();
```

- *Type:* <a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault">VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault</a>

---

##### `protectedSettingsInput`<sup>Optional</sup> <a name="protectedSettingsInput" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.protectedSettingsInput"></a>

```java
public java.lang.String getProtectedSettingsInput();
```

- *Type:* java.lang.String

---

##### `provisionAfterExtensionsInput`<sup>Optional</sup> <a name="provisionAfterExtensionsInput" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.provisionAfterExtensionsInput"></a>

```java
public java.util.List<java.lang.String> getProvisionAfterExtensionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `publisherInput`<sup>Optional</sup> <a name="publisherInput" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.publisherInput"></a>

```java
public java.lang.String getPublisherInput();
```

- *Type:* java.lang.String

---

##### `settingsInput`<sup>Optional</sup> <a name="settingsInput" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.settingsInput"></a>

```java
public java.lang.String getSettingsInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.timeoutsInput"></a>

```java
public IResolvable|VirtualMachineScaleSetExtensionTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeouts">VirtualMachineScaleSetExtensionTimeouts</a>

---

##### `typeHandlerVersionInput`<sup>Optional</sup> <a name="typeHandlerVersionInput" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.typeHandlerVersionInput"></a>

```java
public java.lang.String getTypeHandlerVersionInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `virtualMachineScaleSetIdInput`<sup>Optional</sup> <a name="virtualMachineScaleSetIdInput" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.virtualMachineScaleSetIdInput"></a>

```java
public java.lang.String getVirtualMachineScaleSetIdInput();
```

- *Type:* java.lang.String

---

##### `automaticUpgradeEnabled`<sup>Required</sup> <a name="automaticUpgradeEnabled" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.automaticUpgradeEnabled"></a>

```java
public java.lang.Boolean|IResolvable getAutomaticUpgradeEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `autoUpgradeMinorVersion`<sup>Required</sup> <a name="autoUpgradeMinorVersion" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.autoUpgradeMinorVersion"></a>

```java
public java.lang.Boolean|IResolvable getAutoUpgradeMinorVersion();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `failureSuppressionEnabled`<sup>Required</sup> <a name="failureSuppressionEnabled" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.failureSuppressionEnabled"></a>

```java
public java.lang.Boolean|IResolvable getFailureSuppressionEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `forceUpdateTag`<sup>Required</sup> <a name="forceUpdateTag" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.forceUpdateTag"></a>

```java
public java.lang.String getForceUpdateTag();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `protectedSettings`<sup>Required</sup> <a name="protectedSettings" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.protectedSettings"></a>

```java
public java.lang.String getProtectedSettings();
```

- *Type:* java.lang.String

---

##### `provisionAfterExtensions`<sup>Required</sup> <a name="provisionAfterExtensions" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.provisionAfterExtensions"></a>

```java
public java.util.List<java.lang.String> getProvisionAfterExtensions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.publisher"></a>

```java
public java.lang.String getPublisher();
```

- *Type:* java.lang.String

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.settings"></a>

```java
public java.lang.String getSettings();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `typeHandlerVersion`<sup>Required</sup> <a name="typeHandlerVersion" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.typeHandlerVersion"></a>

```java
public java.lang.String getTypeHandlerVersion();
```

- *Type:* java.lang.String

---

##### `virtualMachineScaleSetId`<sup>Required</sup> <a name="virtualMachineScaleSetId" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.virtualMachineScaleSetId"></a>

```java
public java.lang.String getVirtualMachineScaleSetId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### VirtualMachineScaleSetExtensionAConfig <a name="VirtualMachineScaleSetExtensionAConfig" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.Initializer"></a>

```java
import io.cdktn.providers.azurerm.virtual_machine_scale_set_extension.VirtualMachineScaleSetExtensionAConfig;

VirtualMachineScaleSetExtensionAConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .publisher(java.lang.String)
    .type(java.lang.String)
    .typeHandlerVersion(java.lang.String)
    .virtualMachineScaleSetId(java.lang.String)
//  .automaticUpgradeEnabled(java.lang.Boolean|IResolvable)
//  .autoUpgradeMinorVersion(java.lang.Boolean|IResolvable)
//  .failureSuppressionEnabled(java.lang.Boolean|IResolvable)
//  .forceUpdateTag(java.lang.String)
//  .id(java.lang.String)
//  .protectedSettings(java.lang.String)
//  .protectedSettingsFromKeyVault(VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault)
//  .provisionAfterExtensions(java.util.List<java.lang.String>)
//  .settings(java.lang.String)
//  .timeouts(VirtualMachineScaleSetExtensionTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/virtual_machine_scale_set_extension#name VirtualMachineScaleSetExtensionA#name}. |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.publisher">publisher</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/virtual_machine_scale_set_extension#publisher VirtualMachineScaleSetExtensionA#publisher}. |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/virtual_machine_scale_set_extension#type VirtualMachineScaleSetExtensionA#type}. |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.typeHandlerVersion">typeHandlerVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/virtual_machine_scale_set_extension#type_handler_version VirtualMachineScaleSetExtensionA#type_handler_version}. |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.virtualMachineScaleSetId">virtualMachineScaleSetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/virtual_machine_scale_set_extension#virtual_machine_scale_set_id VirtualMachineScaleSetExtensionA#virtual_machine_scale_set_id}. |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.automaticUpgradeEnabled">automaticUpgradeEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/virtual_machine_scale_set_extension#automatic_upgrade_enabled VirtualMachineScaleSetExtensionA#automatic_upgrade_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.autoUpgradeMinorVersion">autoUpgradeMinorVersion</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/virtual_machine_scale_set_extension#auto_upgrade_minor_version VirtualMachineScaleSetExtensionA#auto_upgrade_minor_version}. |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.failureSuppressionEnabled">failureSuppressionEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/virtual_machine_scale_set_extension#failure_suppression_enabled VirtualMachineScaleSetExtensionA#failure_suppression_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.forceUpdateTag">forceUpdateTag</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/virtual_machine_scale_set_extension#force_update_tag VirtualMachineScaleSetExtensionA#force_update_tag}. |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/virtual_machine_scale_set_extension#id VirtualMachineScaleSetExtensionA#id}. |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.protectedSettings">protectedSettings</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/virtual_machine_scale_set_extension#protected_settings VirtualMachineScaleSetExtensionA#protected_settings}. |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.protectedSettingsFromKeyVault">protectedSettingsFromKeyVault</a></code> | <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault">VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault</a></code> | protected_settings_from_key_vault block. |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.provisionAfterExtensions">provisionAfterExtensions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/virtual_machine_scale_set_extension#provision_after_extensions VirtualMachineScaleSetExtensionA#provision_after_extensions}. |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.settings">settings</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/virtual_machine_scale_set_extension#settings VirtualMachineScaleSetExtensionA#settings}. |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeouts">VirtualMachineScaleSetExtensionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/virtual_machine_scale_set_extension#name VirtualMachineScaleSetExtensionA#name}.

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.publisher"></a>

```java
public java.lang.String getPublisher();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/virtual_machine_scale_set_extension#publisher VirtualMachineScaleSetExtensionA#publisher}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/virtual_machine_scale_set_extension#type VirtualMachineScaleSetExtensionA#type}.

---

##### `typeHandlerVersion`<sup>Required</sup> <a name="typeHandlerVersion" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.typeHandlerVersion"></a>

```java
public java.lang.String getTypeHandlerVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/virtual_machine_scale_set_extension#type_handler_version VirtualMachineScaleSetExtensionA#type_handler_version}.

---

##### `virtualMachineScaleSetId`<sup>Required</sup> <a name="virtualMachineScaleSetId" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.virtualMachineScaleSetId"></a>

```java
public java.lang.String getVirtualMachineScaleSetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/virtual_machine_scale_set_extension#virtual_machine_scale_set_id VirtualMachineScaleSetExtensionA#virtual_machine_scale_set_id}.

---

##### `automaticUpgradeEnabled`<sup>Optional</sup> <a name="automaticUpgradeEnabled" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.automaticUpgradeEnabled"></a>

```java
public java.lang.Boolean|IResolvable getAutomaticUpgradeEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/virtual_machine_scale_set_extension#automatic_upgrade_enabled VirtualMachineScaleSetExtensionA#automatic_upgrade_enabled}.

---

##### `autoUpgradeMinorVersion`<sup>Optional</sup> <a name="autoUpgradeMinorVersion" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.autoUpgradeMinorVersion"></a>

```java
public java.lang.Boolean|IResolvable getAutoUpgradeMinorVersion();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/virtual_machine_scale_set_extension#auto_upgrade_minor_version VirtualMachineScaleSetExtensionA#auto_upgrade_minor_version}.

---

##### `failureSuppressionEnabled`<sup>Optional</sup> <a name="failureSuppressionEnabled" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.failureSuppressionEnabled"></a>

```java
public java.lang.Boolean|IResolvable getFailureSuppressionEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/virtual_machine_scale_set_extension#failure_suppression_enabled VirtualMachineScaleSetExtensionA#failure_suppression_enabled}.

---

##### `forceUpdateTag`<sup>Optional</sup> <a name="forceUpdateTag" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.forceUpdateTag"></a>

```java
public java.lang.String getForceUpdateTag();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/virtual_machine_scale_set_extension#force_update_tag VirtualMachineScaleSetExtensionA#force_update_tag}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/virtual_machine_scale_set_extension#id VirtualMachineScaleSetExtensionA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `protectedSettings`<sup>Optional</sup> <a name="protectedSettings" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.protectedSettings"></a>

```java
public java.lang.String getProtectedSettings();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/virtual_machine_scale_set_extension#protected_settings VirtualMachineScaleSetExtensionA#protected_settings}.

---

##### `protectedSettingsFromKeyVault`<sup>Optional</sup> <a name="protectedSettingsFromKeyVault" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.protectedSettingsFromKeyVault"></a>

```java
public VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault getProtectedSettingsFromKeyVault();
```

- *Type:* <a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault">VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault</a>

protected_settings_from_key_vault block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/virtual_machine_scale_set_extension#protected_settings_from_key_vault VirtualMachineScaleSetExtensionA#protected_settings_from_key_vault}

---

##### `provisionAfterExtensions`<sup>Optional</sup> <a name="provisionAfterExtensions" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.provisionAfterExtensions"></a>

```java
public java.util.List<java.lang.String> getProvisionAfterExtensions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/virtual_machine_scale_set_extension#provision_after_extensions VirtualMachineScaleSetExtensionA#provision_after_extensions}.

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.settings"></a>

```java
public java.lang.String getSettings();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/virtual_machine_scale_set_extension#settings VirtualMachineScaleSetExtensionA#settings}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.timeouts"></a>

```java
public VirtualMachineScaleSetExtensionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeouts">VirtualMachineScaleSetExtensionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/virtual_machine_scale_set_extension#timeouts VirtualMachineScaleSetExtensionA#timeouts}

---

### VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault <a name="VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault.Initializer"></a>

```java
import io.cdktn.providers.azurerm.virtual_machine_scale_set_extension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault;

VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault.builder()
    .secretUrl(java.lang.String)
    .sourceVaultId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault.property.secretUrl">secretUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/virtual_machine_scale_set_extension#secret_url VirtualMachineScaleSetExtensionA#secret_url}. |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault.property.sourceVaultId">sourceVaultId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/virtual_machine_scale_set_extension#source_vault_id VirtualMachineScaleSetExtensionA#source_vault_id}. |

---

##### `secretUrl`<sup>Required</sup> <a name="secretUrl" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault.property.secretUrl"></a>

```java
public java.lang.String getSecretUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/virtual_machine_scale_set_extension#secret_url VirtualMachineScaleSetExtensionA#secret_url}.

---

##### `sourceVaultId`<sup>Required</sup> <a name="sourceVaultId" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault.property.sourceVaultId"></a>

```java
public java.lang.String getSourceVaultId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/virtual_machine_scale_set_extension#source_vault_id VirtualMachineScaleSetExtensionA#source_vault_id}.

---

### VirtualMachineScaleSetExtensionTimeouts <a name="VirtualMachineScaleSetExtensionTimeouts" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeouts.Initializer"></a>

```java
import io.cdktn.providers.azurerm.virtual_machine_scale_set_extension.VirtualMachineScaleSetExtensionTimeouts;

VirtualMachineScaleSetExtensionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/virtual_machine_scale_set_extension#create VirtualMachineScaleSetExtensionA#create}. |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/virtual_machine_scale_set_extension#delete VirtualMachineScaleSetExtensionA#delete}. |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/virtual_machine_scale_set_extension#read VirtualMachineScaleSetExtensionA#read}. |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/virtual_machine_scale_set_extension#update VirtualMachineScaleSetExtensionA#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/virtual_machine_scale_set_extension#create VirtualMachineScaleSetExtensionA#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/virtual_machine_scale_set_extension#delete VirtualMachineScaleSetExtensionA#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/virtual_machine_scale_set_extension#read VirtualMachineScaleSetExtensionA#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/virtual_machine_scale_set_extension#update VirtualMachineScaleSetExtensionA#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference <a name="VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.virtual_machine_scale_set_extension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference;

new VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.secretUrlInput">secretUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.sourceVaultIdInput">sourceVaultIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.secretUrl">secretUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.sourceVaultId">sourceVaultId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault">VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `secretUrlInput`<sup>Optional</sup> <a name="secretUrlInput" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.secretUrlInput"></a>

```java
public java.lang.String getSecretUrlInput();
```

- *Type:* java.lang.String

---

##### `sourceVaultIdInput`<sup>Optional</sup> <a name="sourceVaultIdInput" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.sourceVaultIdInput"></a>

```java
public java.lang.String getSourceVaultIdInput();
```

- *Type:* java.lang.String

---

##### `secretUrl`<sup>Required</sup> <a name="secretUrl" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.secretUrl"></a>

```java
public java.lang.String getSecretUrl();
```

- *Type:* java.lang.String

---

##### `sourceVaultId`<sup>Required</sup> <a name="sourceVaultId" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.sourceVaultId"></a>

```java
public java.lang.String getSourceVaultId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.internalValue"></a>

```java
public VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault">VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault</a>

---


### VirtualMachineScaleSetExtensionTimeoutsOutputReference <a name="VirtualMachineScaleSetExtensionTimeoutsOutputReference" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.virtual_machine_scale_set_extension.VirtualMachineScaleSetExtensionTimeoutsOutputReference;

new VirtualMachineScaleSetExtensionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeouts">VirtualMachineScaleSetExtensionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|VirtualMachineScaleSetExtensionTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeouts">VirtualMachineScaleSetExtensionTimeouts</a>

---



