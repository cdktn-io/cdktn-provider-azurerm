# `provider` Submodule <a name="`provider` Submodule" id="@cdktn/provider-azurerm.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AzurermProvider <a name="AzurermProvider" id="@cdktn/provider-azurerm.provider.AzurermProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs azurerm}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.provider.AzurermProvider.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/provider"

provider.NewAzurermProvider(scope Construct, id *string, config AzurermProviderConfig) AzurermProvider
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderConfig">AzurermProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.provider.AzurermProvider.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.provider.AzurermProvider.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-azurerm.provider.AzurermProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.provider.AzurermProviderConfig">AzurermProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.resetAdoPipelineServiceConnectionId">ResetAdoPipelineServiceConnectionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.resetAuxiliaryTenantIds">ResetAuxiliaryTenantIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.resetClientCertificate">ResetClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.resetClientCertificatePassword">ResetClientCertificatePassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.resetClientCertificatePath">ResetClientCertificatePath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.resetClientIdFilePath">ResetClientIdFilePath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.resetClientSecretFilePath">ResetClientSecretFilePath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.resetDisableCorrelationRequestId">ResetDisableCorrelationRequestId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.resetDisableTerraformPartnerId">ResetDisableTerraformPartnerId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.resetFeatures">ResetFeatures</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.resetMetadataHost">ResetMetadataHost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.resetMsiApiVersion">ResetMsiApiVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.resetMsiEndpoint">ResetMsiEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.resetOidcRequestToken">ResetOidcRequestToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.resetOidcRequestUrl">ResetOidcRequestUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.resetOidcToken">ResetOidcToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.resetOidcTokenFilePath">ResetOidcTokenFilePath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.resetPartnerId">ResetPartnerId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.resetResourceProviderRegistrations">ResetResourceProviderRegistrations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.resetResourceProvidersToRegister">ResetResourceProvidersToRegister</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.resetStorageUseAzuread">ResetStorageUseAzuread</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.resetSubscriptionId">ResetSubscriptionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.resetTenantId">ResetTenantId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.resetUseAksWorkloadIdentity">ResetUseAksWorkloadIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.resetUseCli">ResetUseCli</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.resetUseMsi">ResetUseMsi</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.resetUseOidc">ResetUseOidc</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.provider.AzurermProvider.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.provider.AzurermProvider.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.provider.AzurermProvider.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.provider.AzurermProvider.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.provider.AzurermProvider.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.provider.AzurermProvider.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.provider.AzurermProvider.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.provider.AzurermProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.provider.AzurermProvider.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.provider.AzurermProvider.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.provider.AzurermProvider.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.provider.AzurermProvider.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ResetAdoPipelineServiceConnectionId` <a name="ResetAdoPipelineServiceConnectionId" id="@cdktn/provider-azurerm.provider.AzurermProvider.resetAdoPipelineServiceConnectionId"></a>

```go
func ResetAdoPipelineServiceConnectionId()
```

##### `ResetAlias` <a name="ResetAlias" id="@cdktn/provider-azurerm.provider.AzurermProvider.resetAlias"></a>

```go
func ResetAlias()
```

##### `ResetAuxiliaryTenantIds` <a name="ResetAuxiliaryTenantIds" id="@cdktn/provider-azurerm.provider.AzurermProvider.resetAuxiliaryTenantIds"></a>

```go
func ResetAuxiliaryTenantIds()
```

##### `ResetClientCertificate` <a name="ResetClientCertificate" id="@cdktn/provider-azurerm.provider.AzurermProvider.resetClientCertificate"></a>

```go
func ResetClientCertificate()
```

##### `ResetClientCertificatePassword` <a name="ResetClientCertificatePassword" id="@cdktn/provider-azurerm.provider.AzurermProvider.resetClientCertificatePassword"></a>

```go
func ResetClientCertificatePassword()
```

##### `ResetClientCertificatePath` <a name="ResetClientCertificatePath" id="@cdktn/provider-azurerm.provider.AzurermProvider.resetClientCertificatePath"></a>

```go
func ResetClientCertificatePath()
```

##### `ResetClientId` <a name="ResetClientId" id="@cdktn/provider-azurerm.provider.AzurermProvider.resetClientId"></a>

```go
func ResetClientId()
```

##### `ResetClientIdFilePath` <a name="ResetClientIdFilePath" id="@cdktn/provider-azurerm.provider.AzurermProvider.resetClientIdFilePath"></a>

```go
func ResetClientIdFilePath()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktn/provider-azurerm.provider.AzurermProvider.resetClientSecret"></a>

```go
func ResetClientSecret()
```

##### `ResetClientSecretFilePath` <a name="ResetClientSecretFilePath" id="@cdktn/provider-azurerm.provider.AzurermProvider.resetClientSecretFilePath"></a>

```go
func ResetClientSecretFilePath()
```

##### `ResetDisableCorrelationRequestId` <a name="ResetDisableCorrelationRequestId" id="@cdktn/provider-azurerm.provider.AzurermProvider.resetDisableCorrelationRequestId"></a>

```go
func ResetDisableCorrelationRequestId()
```

##### `ResetDisableTerraformPartnerId` <a name="ResetDisableTerraformPartnerId" id="@cdktn/provider-azurerm.provider.AzurermProvider.resetDisableTerraformPartnerId"></a>

```go
func ResetDisableTerraformPartnerId()
```

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktn/provider-azurerm.provider.AzurermProvider.resetEnvironment"></a>

```go
func ResetEnvironment()
```

##### `ResetFeatures` <a name="ResetFeatures" id="@cdktn/provider-azurerm.provider.AzurermProvider.resetFeatures"></a>

```go
func ResetFeatures()
```

##### `ResetMetadataHost` <a name="ResetMetadataHost" id="@cdktn/provider-azurerm.provider.AzurermProvider.resetMetadataHost"></a>

```go
func ResetMetadataHost()
```

##### `ResetMsiApiVersion` <a name="ResetMsiApiVersion" id="@cdktn/provider-azurerm.provider.AzurermProvider.resetMsiApiVersion"></a>

```go
func ResetMsiApiVersion()
```

##### `ResetMsiEndpoint` <a name="ResetMsiEndpoint" id="@cdktn/provider-azurerm.provider.AzurermProvider.resetMsiEndpoint"></a>

```go
func ResetMsiEndpoint()
```

##### `ResetOidcRequestToken` <a name="ResetOidcRequestToken" id="@cdktn/provider-azurerm.provider.AzurermProvider.resetOidcRequestToken"></a>

```go
func ResetOidcRequestToken()
```

##### `ResetOidcRequestUrl` <a name="ResetOidcRequestUrl" id="@cdktn/provider-azurerm.provider.AzurermProvider.resetOidcRequestUrl"></a>

```go
func ResetOidcRequestUrl()
```

##### `ResetOidcToken` <a name="ResetOidcToken" id="@cdktn/provider-azurerm.provider.AzurermProvider.resetOidcToken"></a>

```go
func ResetOidcToken()
```

##### `ResetOidcTokenFilePath` <a name="ResetOidcTokenFilePath" id="@cdktn/provider-azurerm.provider.AzurermProvider.resetOidcTokenFilePath"></a>

```go
func ResetOidcTokenFilePath()
```

##### `ResetPartnerId` <a name="ResetPartnerId" id="@cdktn/provider-azurerm.provider.AzurermProvider.resetPartnerId"></a>

```go
func ResetPartnerId()
```

##### `ResetResourceProviderRegistrations` <a name="ResetResourceProviderRegistrations" id="@cdktn/provider-azurerm.provider.AzurermProvider.resetResourceProviderRegistrations"></a>

```go
func ResetResourceProviderRegistrations()
```

##### `ResetResourceProvidersToRegister` <a name="ResetResourceProvidersToRegister" id="@cdktn/provider-azurerm.provider.AzurermProvider.resetResourceProvidersToRegister"></a>

```go
func ResetResourceProvidersToRegister()
```

##### `ResetStorageUseAzuread` <a name="ResetStorageUseAzuread" id="@cdktn/provider-azurerm.provider.AzurermProvider.resetStorageUseAzuread"></a>

```go
func ResetStorageUseAzuread()
```

##### `ResetSubscriptionId` <a name="ResetSubscriptionId" id="@cdktn/provider-azurerm.provider.AzurermProvider.resetSubscriptionId"></a>

```go
func ResetSubscriptionId()
```

##### `ResetTenantId` <a name="ResetTenantId" id="@cdktn/provider-azurerm.provider.AzurermProvider.resetTenantId"></a>

```go
func ResetTenantId()
```

##### `ResetUseAksWorkloadIdentity` <a name="ResetUseAksWorkloadIdentity" id="@cdktn/provider-azurerm.provider.AzurermProvider.resetUseAksWorkloadIdentity"></a>

```go
func ResetUseAksWorkloadIdentity()
```

##### `ResetUseCli` <a name="ResetUseCli" id="@cdktn/provider-azurerm.provider.AzurermProvider.resetUseCli"></a>

```go
func ResetUseCli()
```

##### `ResetUseMsi` <a name="ResetUseMsi" id="@cdktn/provider-azurerm.provider.AzurermProvider.resetUseMsi"></a>

```go
func ResetUseMsi()
```

##### `ResetUseOidc` <a name="ResetUseOidc" id="@cdktn/provider-azurerm.provider.AzurermProvider.resetUseOidc"></a>

```go
func ResetUseOidc()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.isTerraformProvider">IsTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AzurermProvider resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.provider.AzurermProvider.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/provider"

provider.AzurermProvider_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.provider.AzurermProvider.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.provider.AzurermProvider.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/provider"

provider.AzurermProvider_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.provider.AzurermProvider.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="@cdktn/provider-azurerm.provider.AzurermProvider.isTerraformProvider"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/provider"

provider.AzurermProvider_IsTerraformProvider(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.provider.AzurermProvider.isTerraformProvider.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.provider.AzurermProvider.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/provider"

provider.AzurermProvider_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a AzurermProvider resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.provider.AzurermProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.provider.AzurermProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AzurermProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.provider.AzurermProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AzurermProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.provider.AzurermProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the AzurermProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.property.metaAttributes">MetaAttributes</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.property.functions">Functions</a></code> | <code>github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18.providerFunctions.AzurermProviderFunctions</code> | Provider-defined functions of the azurerm provider. |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.property.adoPipelineServiceConnectionIdInput">AdoPipelineServiceConnectionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.property.aliasInput">AliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.property.auxiliaryTenantIdsInput">AuxiliaryTenantIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.property.clientCertificateInput">ClientCertificateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.property.clientCertificatePasswordInput">ClientCertificatePasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.property.clientCertificatePathInput">ClientCertificatePathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.property.clientIdFilePathInput">ClientIdFilePathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.property.clientSecretFilePathInput">ClientSecretFilePathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.property.clientSecretInput">ClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.property.disableCorrelationRequestIdInput">DisableCorrelationRequestIdInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.property.disableTerraformPartnerIdInput">DisableTerraformPartnerIdInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.property.environmentInput">EnvironmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.property.featuresInput">FeaturesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.property.metadataHostInput">MetadataHostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.property.msiApiVersionInput">MsiApiVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.property.msiEndpointInput">MsiEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.property.oidcRequestTokenInput">OidcRequestTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.property.oidcRequestUrlInput">OidcRequestUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.property.oidcTokenFilePathInput">OidcTokenFilePathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.property.oidcTokenInput">OidcTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.property.partnerIdInput">PartnerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.property.resourceProviderRegistrationsInput">ResourceProviderRegistrationsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.property.resourceProvidersToRegisterInput">ResourceProvidersToRegisterInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.property.storageUseAzureadInput">StorageUseAzureadInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.property.subscriptionIdInput">SubscriptionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.property.tenantIdInput">TenantIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.property.useAksWorkloadIdentityInput">UseAksWorkloadIdentityInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.property.useCliInput">UseCliInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.property.useMsiInput">UseMsiInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.property.useOidcInput">UseOidcInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.property.adoPipelineServiceConnectionId">AdoPipelineServiceConnectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.property.auxiliaryTenantIds">AuxiliaryTenantIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.property.clientCertificate">ClientCertificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.property.clientCertificatePassword">ClientCertificatePassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.property.clientCertificatePath">ClientCertificatePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.property.clientIdFilePath">ClientIdFilePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.property.clientSecretFilePath">ClientSecretFilePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.property.disableCorrelationRequestId">DisableCorrelationRequestId</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.property.disableTerraformPartnerId">DisableTerraformPartnerId</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.property.environment">Environment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.property.features">Features</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.property.metadataHost">MetadataHost</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.property.msiApiVersion">MsiApiVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.property.msiEndpoint">MsiEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.property.oidcRequestToken">OidcRequestToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.property.oidcRequestUrl">OidcRequestUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.property.oidcToken">OidcToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.property.oidcTokenFilePath">OidcTokenFilePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.property.partnerId">PartnerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.property.resourceProviderRegistrations">ResourceProviderRegistrations</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.property.resourceProvidersToRegister">ResourceProvidersToRegister</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.property.storageUseAzuread">StorageUseAzuread</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.property.subscriptionId">SubscriptionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.property.useAksWorkloadIdentity">UseAksWorkloadIdentity</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.property.useCli">UseCli</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.property.useMsi">UseMsi</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.property.useOidc">UseOidc</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.provider.AzurermProvider.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.provider.AzurermProvider.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.provider.AzurermProvider.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.provider.AzurermProvider.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="@cdktn/provider-azurerm.provider.AzurermProvider.property.metaAttributes"></a>

```go
func MetaAttributes() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.provider.AzurermProvider.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.provider.AzurermProvider.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="@cdktn/provider-azurerm.provider.AzurermProvider.property.terraformProviderSource"></a>

```go
func TerraformProviderSource() *string
```

- *Type:* *string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktn/provider-azurerm.provider.AzurermProvider.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `Functions`<sup>Required</sup> <a name="Functions" id="@cdktn/provider-azurerm.provider.AzurermProvider.property.functions"></a>

```go
func Functions() AzurermProviderFunctions
```

- *Type:* github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18.providerFunctions.AzurermProviderFunctions

Provider-defined functions of the azurerm provider.

---

##### `AdoPipelineServiceConnectionIdInput`<sup>Optional</sup> <a name="AdoPipelineServiceConnectionIdInput" id="@cdktn/provider-azurerm.provider.AzurermProvider.property.adoPipelineServiceConnectionIdInput"></a>

```go
func AdoPipelineServiceConnectionIdInput() *string
```

- *Type:* *string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktn/provider-azurerm.provider.AzurermProvider.property.aliasInput"></a>

```go
func AliasInput() *string
```

- *Type:* *string

---

##### `AuxiliaryTenantIdsInput`<sup>Optional</sup> <a name="AuxiliaryTenantIdsInput" id="@cdktn/provider-azurerm.provider.AzurermProvider.property.auxiliaryTenantIdsInput"></a>

```go
func AuxiliaryTenantIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ClientCertificateInput`<sup>Optional</sup> <a name="ClientCertificateInput" id="@cdktn/provider-azurerm.provider.AzurermProvider.property.clientCertificateInput"></a>

```go
func ClientCertificateInput() *string
```

- *Type:* *string

---

##### `ClientCertificatePasswordInput`<sup>Optional</sup> <a name="ClientCertificatePasswordInput" id="@cdktn/provider-azurerm.provider.AzurermProvider.property.clientCertificatePasswordInput"></a>

```go
func ClientCertificatePasswordInput() *string
```

- *Type:* *string

---

##### `ClientCertificatePathInput`<sup>Optional</sup> <a name="ClientCertificatePathInput" id="@cdktn/provider-azurerm.provider.AzurermProvider.property.clientCertificatePathInput"></a>

```go
func ClientCertificatePathInput() *string
```

- *Type:* *string

---

##### `ClientIdFilePathInput`<sup>Optional</sup> <a name="ClientIdFilePathInput" id="@cdktn/provider-azurerm.provider.AzurermProvider.property.clientIdFilePathInput"></a>

```go
func ClientIdFilePathInput() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktn/provider-azurerm.provider.AzurermProvider.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ClientSecretFilePathInput`<sup>Optional</sup> <a name="ClientSecretFilePathInput" id="@cdktn/provider-azurerm.provider.AzurermProvider.property.clientSecretFilePathInput"></a>

```go
func ClientSecretFilePathInput() *string
```

- *Type:* *string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktn/provider-azurerm.provider.AzurermProvider.property.clientSecretInput"></a>

```go
func ClientSecretInput() *string
```

- *Type:* *string

---

##### `DisableCorrelationRequestIdInput`<sup>Optional</sup> <a name="DisableCorrelationRequestIdInput" id="@cdktn/provider-azurerm.provider.AzurermProvider.property.disableCorrelationRequestIdInput"></a>

```go
func DisableCorrelationRequestIdInput() interface{}
```

- *Type:* interface{}

---

##### `DisableTerraformPartnerIdInput`<sup>Optional</sup> <a name="DisableTerraformPartnerIdInput" id="@cdktn/provider-azurerm.provider.AzurermProvider.property.disableTerraformPartnerIdInput"></a>

```go
func DisableTerraformPartnerIdInput() interface{}
```

- *Type:* interface{}

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktn/provider-azurerm.provider.AzurermProvider.property.environmentInput"></a>

```go
func EnvironmentInput() *string
```

- *Type:* *string

---

##### `FeaturesInput`<sup>Optional</sup> <a name="FeaturesInput" id="@cdktn/provider-azurerm.provider.AzurermProvider.property.featuresInput"></a>

```go
func FeaturesInput() interface{}
```

- *Type:* interface{}

---

##### `MetadataHostInput`<sup>Optional</sup> <a name="MetadataHostInput" id="@cdktn/provider-azurerm.provider.AzurermProvider.property.metadataHostInput"></a>

```go
func MetadataHostInput() *string
```

- *Type:* *string

---

##### `MsiApiVersionInput`<sup>Optional</sup> <a name="MsiApiVersionInput" id="@cdktn/provider-azurerm.provider.AzurermProvider.property.msiApiVersionInput"></a>

```go
func MsiApiVersionInput() *string
```

- *Type:* *string

---

##### `MsiEndpointInput`<sup>Optional</sup> <a name="MsiEndpointInput" id="@cdktn/provider-azurerm.provider.AzurermProvider.property.msiEndpointInput"></a>

```go
func MsiEndpointInput() *string
```

- *Type:* *string

---

##### `OidcRequestTokenInput`<sup>Optional</sup> <a name="OidcRequestTokenInput" id="@cdktn/provider-azurerm.provider.AzurermProvider.property.oidcRequestTokenInput"></a>

```go
func OidcRequestTokenInput() *string
```

- *Type:* *string

---

##### `OidcRequestUrlInput`<sup>Optional</sup> <a name="OidcRequestUrlInput" id="@cdktn/provider-azurerm.provider.AzurermProvider.property.oidcRequestUrlInput"></a>

```go
func OidcRequestUrlInput() *string
```

- *Type:* *string

---

##### `OidcTokenFilePathInput`<sup>Optional</sup> <a name="OidcTokenFilePathInput" id="@cdktn/provider-azurerm.provider.AzurermProvider.property.oidcTokenFilePathInput"></a>

```go
func OidcTokenFilePathInput() *string
```

- *Type:* *string

---

##### `OidcTokenInput`<sup>Optional</sup> <a name="OidcTokenInput" id="@cdktn/provider-azurerm.provider.AzurermProvider.property.oidcTokenInput"></a>

```go
func OidcTokenInput() *string
```

- *Type:* *string

---

##### `PartnerIdInput`<sup>Optional</sup> <a name="PartnerIdInput" id="@cdktn/provider-azurerm.provider.AzurermProvider.property.partnerIdInput"></a>

```go
func PartnerIdInput() *string
```

- *Type:* *string

---

##### `ResourceProviderRegistrationsInput`<sup>Optional</sup> <a name="ResourceProviderRegistrationsInput" id="@cdktn/provider-azurerm.provider.AzurermProvider.property.resourceProviderRegistrationsInput"></a>

```go
func ResourceProviderRegistrationsInput() *string
```

- *Type:* *string

---

##### `ResourceProvidersToRegisterInput`<sup>Optional</sup> <a name="ResourceProvidersToRegisterInput" id="@cdktn/provider-azurerm.provider.AzurermProvider.property.resourceProvidersToRegisterInput"></a>

```go
func ResourceProvidersToRegisterInput() *[]*string
```

- *Type:* *[]*string

---

##### `StorageUseAzureadInput`<sup>Optional</sup> <a name="StorageUseAzureadInput" id="@cdktn/provider-azurerm.provider.AzurermProvider.property.storageUseAzureadInput"></a>

```go
func StorageUseAzureadInput() interface{}
```

- *Type:* interface{}

---

##### `SubscriptionIdInput`<sup>Optional</sup> <a name="SubscriptionIdInput" id="@cdktn/provider-azurerm.provider.AzurermProvider.property.subscriptionIdInput"></a>

```go
func SubscriptionIdInput() *string
```

- *Type:* *string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktn/provider-azurerm.provider.AzurermProvider.property.tenantIdInput"></a>

```go
func TenantIdInput() *string
```

- *Type:* *string

---

##### `UseAksWorkloadIdentityInput`<sup>Optional</sup> <a name="UseAksWorkloadIdentityInput" id="@cdktn/provider-azurerm.provider.AzurermProvider.property.useAksWorkloadIdentityInput"></a>

```go
func UseAksWorkloadIdentityInput() interface{}
```

- *Type:* interface{}

---

##### `UseCliInput`<sup>Optional</sup> <a name="UseCliInput" id="@cdktn/provider-azurerm.provider.AzurermProvider.property.useCliInput"></a>

```go
func UseCliInput() interface{}
```

- *Type:* interface{}

---

##### `UseMsiInput`<sup>Optional</sup> <a name="UseMsiInput" id="@cdktn/provider-azurerm.provider.AzurermProvider.property.useMsiInput"></a>

```go
func UseMsiInput() interface{}
```

- *Type:* interface{}

---

##### `UseOidcInput`<sup>Optional</sup> <a name="UseOidcInput" id="@cdktn/provider-azurerm.provider.AzurermProvider.property.useOidcInput"></a>

```go
func UseOidcInput() interface{}
```

- *Type:* interface{}

---

##### `AdoPipelineServiceConnectionId`<sup>Optional</sup> <a name="AdoPipelineServiceConnectionId" id="@cdktn/provider-azurerm.provider.AzurermProvider.property.adoPipelineServiceConnectionId"></a>

```go
func AdoPipelineServiceConnectionId() *string
```

- *Type:* *string

---

##### `AuxiliaryTenantIds`<sup>Optional</sup> <a name="AuxiliaryTenantIds" id="@cdktn/provider-azurerm.provider.AzurermProvider.property.auxiliaryTenantIds"></a>

```go
func AuxiliaryTenantIds() *[]*string
```

- *Type:* *[]*string

---

##### `ClientCertificate`<sup>Optional</sup> <a name="ClientCertificate" id="@cdktn/provider-azurerm.provider.AzurermProvider.property.clientCertificate"></a>

```go
func ClientCertificate() *string
```

- *Type:* *string

---

##### `ClientCertificatePassword`<sup>Optional</sup> <a name="ClientCertificatePassword" id="@cdktn/provider-azurerm.provider.AzurermProvider.property.clientCertificatePassword"></a>

```go
func ClientCertificatePassword() *string
```

- *Type:* *string

---

##### `ClientCertificatePath`<sup>Optional</sup> <a name="ClientCertificatePath" id="@cdktn/provider-azurerm.provider.AzurermProvider.property.clientCertificatePath"></a>

```go
func ClientCertificatePath() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktn/provider-azurerm.provider.AzurermProvider.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientIdFilePath`<sup>Optional</sup> <a name="ClientIdFilePath" id="@cdktn/provider-azurerm.provider.AzurermProvider.property.clientIdFilePath"></a>

```go
func ClientIdFilePath() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktn/provider-azurerm.provider.AzurermProvider.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `ClientSecretFilePath`<sup>Optional</sup> <a name="ClientSecretFilePath" id="@cdktn/provider-azurerm.provider.AzurermProvider.property.clientSecretFilePath"></a>

```go
func ClientSecretFilePath() *string
```

- *Type:* *string

---

##### `DisableCorrelationRequestId`<sup>Optional</sup> <a name="DisableCorrelationRequestId" id="@cdktn/provider-azurerm.provider.AzurermProvider.property.disableCorrelationRequestId"></a>

```go
func DisableCorrelationRequestId() interface{}
```

- *Type:* interface{}

---

##### `DisableTerraformPartnerId`<sup>Optional</sup> <a name="DisableTerraformPartnerId" id="@cdktn/provider-azurerm.provider.AzurermProvider.property.disableTerraformPartnerId"></a>

```go
func DisableTerraformPartnerId() interface{}
```

- *Type:* interface{}

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktn/provider-azurerm.provider.AzurermProvider.property.environment"></a>

```go
func Environment() *string
```

- *Type:* *string

---

##### `Features`<sup>Optional</sup> <a name="Features" id="@cdktn/provider-azurerm.provider.AzurermProvider.property.features"></a>

```go
func Features() interface{}
```

- *Type:* interface{}

---

##### `MetadataHost`<sup>Optional</sup> <a name="MetadataHost" id="@cdktn/provider-azurerm.provider.AzurermProvider.property.metadataHost"></a>

```go
func MetadataHost() *string
```

- *Type:* *string

---

##### `MsiApiVersion`<sup>Optional</sup> <a name="MsiApiVersion" id="@cdktn/provider-azurerm.provider.AzurermProvider.property.msiApiVersion"></a>

```go
func MsiApiVersion() *string
```

- *Type:* *string

---

##### `MsiEndpoint`<sup>Optional</sup> <a name="MsiEndpoint" id="@cdktn/provider-azurerm.provider.AzurermProvider.property.msiEndpoint"></a>

```go
func MsiEndpoint() *string
```

- *Type:* *string

---

##### `OidcRequestToken`<sup>Optional</sup> <a name="OidcRequestToken" id="@cdktn/provider-azurerm.provider.AzurermProvider.property.oidcRequestToken"></a>

```go
func OidcRequestToken() *string
```

- *Type:* *string

---

##### `OidcRequestUrl`<sup>Optional</sup> <a name="OidcRequestUrl" id="@cdktn/provider-azurerm.provider.AzurermProvider.property.oidcRequestUrl"></a>

```go
func OidcRequestUrl() *string
```

- *Type:* *string

---

##### `OidcToken`<sup>Optional</sup> <a name="OidcToken" id="@cdktn/provider-azurerm.provider.AzurermProvider.property.oidcToken"></a>

```go
func OidcToken() *string
```

- *Type:* *string

---

##### `OidcTokenFilePath`<sup>Optional</sup> <a name="OidcTokenFilePath" id="@cdktn/provider-azurerm.provider.AzurermProvider.property.oidcTokenFilePath"></a>

```go
func OidcTokenFilePath() *string
```

- *Type:* *string

---

##### `PartnerId`<sup>Optional</sup> <a name="PartnerId" id="@cdktn/provider-azurerm.provider.AzurermProvider.property.partnerId"></a>

```go
func PartnerId() *string
```

- *Type:* *string

---

##### `ResourceProviderRegistrations`<sup>Optional</sup> <a name="ResourceProviderRegistrations" id="@cdktn/provider-azurerm.provider.AzurermProvider.property.resourceProviderRegistrations"></a>

```go
func ResourceProviderRegistrations() *string
```

- *Type:* *string

---

##### `ResourceProvidersToRegister`<sup>Optional</sup> <a name="ResourceProvidersToRegister" id="@cdktn/provider-azurerm.provider.AzurermProvider.property.resourceProvidersToRegister"></a>

```go
func ResourceProvidersToRegister() *[]*string
```

- *Type:* *[]*string

---

##### `StorageUseAzuread`<sup>Optional</sup> <a name="StorageUseAzuread" id="@cdktn/provider-azurerm.provider.AzurermProvider.property.storageUseAzuread"></a>

```go
func StorageUseAzuread() interface{}
```

- *Type:* interface{}

---

##### `SubscriptionId`<sup>Optional</sup> <a name="SubscriptionId" id="@cdktn/provider-azurerm.provider.AzurermProvider.property.subscriptionId"></a>

```go
func SubscriptionId() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Optional</sup> <a name="TenantId" id="@cdktn/provider-azurerm.provider.AzurermProvider.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `UseAksWorkloadIdentity`<sup>Optional</sup> <a name="UseAksWorkloadIdentity" id="@cdktn/provider-azurerm.provider.AzurermProvider.property.useAksWorkloadIdentity"></a>

```go
func UseAksWorkloadIdentity() interface{}
```

- *Type:* interface{}

---

##### `UseCli`<sup>Optional</sup> <a name="UseCli" id="@cdktn/provider-azurerm.provider.AzurermProvider.property.useCli"></a>

```go
func UseCli() interface{}
```

- *Type:* interface{}

---

##### `UseMsi`<sup>Optional</sup> <a name="UseMsi" id="@cdktn/provider-azurerm.provider.AzurermProvider.property.useMsi"></a>

```go
func UseMsi() interface{}
```

- *Type:* interface{}

---

##### `UseOidc`<sup>Optional</sup> <a name="UseOidc" id="@cdktn/provider-azurerm.provider.AzurermProvider.property.useOidc"></a>

```go
func UseOidc() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProvider.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.provider.AzurermProvider.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AzurermProviderConfig <a name="AzurermProviderConfig" id="@cdktn/provider-azurerm.provider.AzurermProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.provider.AzurermProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/provider"

&provider.AzurermProviderConfig {
	AdoPipelineServiceConnectionId: *string,
	Alias: *string,
	AuxiliaryTenantIds: *[]*string,
	ClientCertificate: *string,
	ClientCertificatePassword: *string,
	ClientCertificatePath: *string,
	ClientId: *string,
	ClientIdFilePath: *string,
	ClientSecret: *string,
	ClientSecretFilePath: *string,
	DisableCorrelationRequestId: interface{},
	DisableTerraformPartnerId: interface{},
	Environment: *string,
	Features: interface{},
	MetadataHost: *string,
	MsiApiVersion: *string,
	MsiEndpoint: *string,
	OidcRequestToken: *string,
	OidcRequestUrl: *string,
	OidcToken: *string,
	OidcTokenFilePath: *string,
	PartnerId: *string,
	ResourceProviderRegistrations: *string,
	ResourceProvidersToRegister: *[]*string,
	StorageUseAzuread: interface{},
	SubscriptionId: *string,
	TenantId: *string,
	UseAksWorkloadIdentity: interface{},
	UseCli: interface{},
	UseMsi: interface{},
	UseOidc: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderConfig.property.adoPipelineServiceConnectionId">AdoPipelineServiceConnectionId</a></code> | <code>*string</code> | The Azure DevOps Pipeline Service Connection ID. |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderConfig.property.alias">Alias</a></code> | <code>*string</code> | Alias name. |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderConfig.property.auxiliaryTenantIds">AuxiliaryTenantIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#auxiliary_tenant_ids AzurermProvider#auxiliary_tenant_ids}. |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderConfig.property.clientCertificate">ClientCertificate</a></code> | <code>*string</code> | Base64 encoded PKCS#12 certificate bundle to use when authenticating as a Service Principal using a Client Certificate. |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderConfig.property.clientCertificatePassword">ClientCertificatePassword</a></code> | <code>*string</code> | The password associated with the Client Certificate. For use when authenticating as a Service Principal using a Client Certificate. |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderConfig.property.clientCertificatePath">ClientCertificatePath</a></code> | <code>*string</code> | The path to the Client Certificate associated with the Service Principal for use when authenticating as a Service Principal using a Client Certificate. |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderConfig.property.clientId">ClientId</a></code> | <code>*string</code> | The Client ID which should be used. |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderConfig.property.clientIdFilePath">ClientIdFilePath</a></code> | <code>*string</code> | The path to a file containing the Client ID which should be used. |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderConfig.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | The Client Secret which should be used. For use When authenticating as a Service Principal using a Client Secret. |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderConfig.property.clientSecretFilePath">ClientSecretFilePath</a></code> | <code>*string</code> | The path to a file containing the Client Secret which should be used. |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderConfig.property.disableCorrelationRequestId">DisableCorrelationRequestId</a></code> | <code>interface{}</code> | This will disable the x-ms-correlation-request-id header. |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderConfig.property.disableTerraformPartnerId">DisableTerraformPartnerId</a></code> | <code>interface{}</code> | This will disable the Terraform Partner ID which is used if a custom `partner_id` isn't specified. |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderConfig.property.environment">Environment</a></code> | <code>*string</code> | The Cloud Environment which should be used. |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderConfig.property.features">Features</a></code> | <code>interface{}</code> | features block. |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderConfig.property.metadataHost">MetadataHost</a></code> | <code>*string</code> | The Hostname which should be used for the Azure Metadata Service. |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderConfig.property.msiApiVersion">MsiApiVersion</a></code> | <code>*string</code> | The API version to use for Managed Service Identity (IMDS) - for cases where the default API version is not supported by the endpoint. |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderConfig.property.msiEndpoint">MsiEndpoint</a></code> | <code>*string</code> | The path to a custom endpoint for Managed Service Identity - in most circumstances this should be detected automatically. |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderConfig.property.oidcRequestToken">OidcRequestToken</a></code> | <code>*string</code> | The bearer token for the request to the OIDC provider. |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderConfig.property.oidcRequestUrl">OidcRequestUrl</a></code> | <code>*string</code> | The URL for the OIDC provider from which to request an ID token. |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderConfig.property.oidcToken">OidcToken</a></code> | <code>*string</code> | The OIDC ID token for use when authenticating as a Service Principal using OpenID Connect. |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderConfig.property.oidcTokenFilePath">OidcTokenFilePath</a></code> | <code>*string</code> | The path to a file containing an OIDC ID token for use when authenticating as a Service Principal using OpenID Connect. |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderConfig.property.partnerId">PartnerId</a></code> | <code>*string</code> | A GUID/UUID that is registered with Microsoft to facilitate partner resource usage attribution. |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderConfig.property.resourceProviderRegistrations">ResourceProviderRegistrations</a></code> | <code>*string</code> | The set of Resource Providers which should be automatically registered for the subscription. |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderConfig.property.resourceProvidersToRegister">ResourceProvidersToRegister</a></code> | <code>*[]*string</code> | A list of Resource Providers to explicitly register for the subscription, in addition to those specified by the `resource_provider_registrations` property. |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderConfig.property.storageUseAzuread">StorageUseAzuread</a></code> | <code>interface{}</code> | Should the AzureRM Provider use Azure AD Authentication when accessing the Storage Data Plane APIs? |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderConfig.property.subscriptionId">SubscriptionId</a></code> | <code>*string</code> | The Subscription ID which should be used. |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderConfig.property.tenantId">TenantId</a></code> | <code>*string</code> | The Tenant ID which should be used. |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderConfig.property.useAksWorkloadIdentity">UseAksWorkloadIdentity</a></code> | <code>interface{}</code> | Allow Azure AKS Workload Identity to be used for Authentication. |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderConfig.property.useCli">UseCli</a></code> | <code>interface{}</code> | Allow Azure CLI to be used for Authentication. |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderConfig.property.useMsi">UseMsi</a></code> | <code>interface{}</code> | Allow Managed Service Identity to be used for Authentication. |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderConfig.property.useOidc">UseOidc</a></code> | <code>interface{}</code> | Allow OpenID Connect to be used for authentication. |

---

##### `AdoPipelineServiceConnectionId`<sup>Optional</sup> <a name="AdoPipelineServiceConnectionId" id="@cdktn/provider-azurerm.provider.AzurermProviderConfig.property.adoPipelineServiceConnectionId"></a>

```go
AdoPipelineServiceConnectionId *string
```

- *Type:* *string

The Azure DevOps Pipeline Service Connection ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#ado_pipeline_service_connection_id AzurermProvider#ado_pipeline_service_connection_id}

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktn/provider-azurerm.provider.AzurermProviderConfig.property.alias"></a>

```go
Alias *string
```

- *Type:* *string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#alias AzurermProvider#alias}

---

##### `AuxiliaryTenantIds`<sup>Optional</sup> <a name="AuxiliaryTenantIds" id="@cdktn/provider-azurerm.provider.AzurermProviderConfig.property.auxiliaryTenantIds"></a>

```go
AuxiliaryTenantIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#auxiliary_tenant_ids AzurermProvider#auxiliary_tenant_ids}.

---

##### `ClientCertificate`<sup>Optional</sup> <a name="ClientCertificate" id="@cdktn/provider-azurerm.provider.AzurermProviderConfig.property.clientCertificate"></a>

```go
ClientCertificate *string
```

- *Type:* *string

Base64 encoded PKCS#12 certificate bundle to use when authenticating as a Service Principal using a Client Certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#client_certificate AzurermProvider#client_certificate}

---

##### `ClientCertificatePassword`<sup>Optional</sup> <a name="ClientCertificatePassword" id="@cdktn/provider-azurerm.provider.AzurermProviderConfig.property.clientCertificatePassword"></a>

```go
ClientCertificatePassword *string
```

- *Type:* *string

The password associated with the Client Certificate. For use when authenticating as a Service Principal using a Client Certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#client_certificate_password AzurermProvider#client_certificate_password}

---

##### `ClientCertificatePath`<sup>Optional</sup> <a name="ClientCertificatePath" id="@cdktn/provider-azurerm.provider.AzurermProviderConfig.property.clientCertificatePath"></a>

```go
ClientCertificatePath *string
```

- *Type:* *string

The path to the Client Certificate associated with the Service Principal for use when authenticating as a Service Principal using a Client Certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#client_certificate_path AzurermProvider#client_certificate_path}

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktn/provider-azurerm.provider.AzurermProviderConfig.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

The Client ID which should be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#client_id AzurermProvider#client_id}

---

##### `ClientIdFilePath`<sup>Optional</sup> <a name="ClientIdFilePath" id="@cdktn/provider-azurerm.provider.AzurermProviderConfig.property.clientIdFilePath"></a>

```go
ClientIdFilePath *string
```

- *Type:* *string

The path to a file containing the Client ID which should be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#client_id_file_path AzurermProvider#client_id_file_path}

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktn/provider-azurerm.provider.AzurermProviderConfig.property.clientSecret"></a>

```go
ClientSecret *string
```

- *Type:* *string

The Client Secret which should be used. For use When authenticating as a Service Principal using a Client Secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#client_secret AzurermProvider#client_secret}

---

##### `ClientSecretFilePath`<sup>Optional</sup> <a name="ClientSecretFilePath" id="@cdktn/provider-azurerm.provider.AzurermProviderConfig.property.clientSecretFilePath"></a>

```go
ClientSecretFilePath *string
```

- *Type:* *string

The path to a file containing the Client Secret which should be used.

For use When authenticating as a Service Principal using a Client Secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#client_secret_file_path AzurermProvider#client_secret_file_path}

---

##### `DisableCorrelationRequestId`<sup>Optional</sup> <a name="DisableCorrelationRequestId" id="@cdktn/provider-azurerm.provider.AzurermProviderConfig.property.disableCorrelationRequestId"></a>

```go
DisableCorrelationRequestId interface{}
```

- *Type:* interface{}

This will disable the x-ms-correlation-request-id header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#disable_correlation_request_id AzurermProvider#disable_correlation_request_id}

---

##### `DisableTerraformPartnerId`<sup>Optional</sup> <a name="DisableTerraformPartnerId" id="@cdktn/provider-azurerm.provider.AzurermProviderConfig.property.disableTerraformPartnerId"></a>

```go
DisableTerraformPartnerId interface{}
```

- *Type:* interface{}

This will disable the Terraform Partner ID which is used if a custom `partner_id` isn't specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#disable_terraform_partner_id AzurermProvider#disable_terraform_partner_id}

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktn/provider-azurerm.provider.AzurermProviderConfig.property.environment"></a>

```go
Environment *string
```

- *Type:* *string

The Cloud Environment which should be used.

Possible values are public, usgovernment, and china. Defaults to public. Not used and should not be specified when `metadata_host` is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#environment AzurermProvider#environment}

---

##### `Features`<sup>Optional</sup> <a name="Features" id="@cdktn/provider-azurerm.provider.AzurermProviderConfig.property.features"></a>

```go
Features interface{}
```

- *Type:* interface{}

features block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#features AzurermProvider#features}

---

##### `MetadataHost`<sup>Optional</sup> <a name="MetadataHost" id="@cdktn/provider-azurerm.provider.AzurermProviderConfig.property.metadataHost"></a>

```go
MetadataHost *string
```

- *Type:* *string

The Hostname which should be used for the Azure Metadata Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#metadata_host AzurermProvider#metadata_host}

---

##### `MsiApiVersion`<sup>Optional</sup> <a name="MsiApiVersion" id="@cdktn/provider-azurerm.provider.AzurermProviderConfig.property.msiApiVersion"></a>

```go
MsiApiVersion *string
```

- *Type:* *string

The API version to use for Managed Service Identity (IMDS) - for cases where the default API version is not supported by the endpoint.

e.g. for Azure Container Apps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#msi_api_version AzurermProvider#msi_api_version}

---

##### `MsiEndpoint`<sup>Optional</sup> <a name="MsiEndpoint" id="@cdktn/provider-azurerm.provider.AzurermProviderConfig.property.msiEndpoint"></a>

```go
MsiEndpoint *string
```

- *Type:* *string

The path to a custom endpoint for Managed Service Identity - in most circumstances this should be detected automatically.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#msi_endpoint AzurermProvider#msi_endpoint}

---

##### `OidcRequestToken`<sup>Optional</sup> <a name="OidcRequestToken" id="@cdktn/provider-azurerm.provider.AzurermProviderConfig.property.oidcRequestToken"></a>

```go
OidcRequestToken *string
```

- *Type:* *string

The bearer token for the request to the OIDC provider.

For use when authenticating as a Service Principal using OpenID Connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#oidc_request_token AzurermProvider#oidc_request_token}

---

##### `OidcRequestUrl`<sup>Optional</sup> <a name="OidcRequestUrl" id="@cdktn/provider-azurerm.provider.AzurermProviderConfig.property.oidcRequestUrl"></a>

```go
OidcRequestUrl *string
```

- *Type:* *string

The URL for the OIDC provider from which to request an ID token.

For use when authenticating as a Service Principal using OpenID Connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#oidc_request_url AzurermProvider#oidc_request_url}

---

##### `OidcToken`<sup>Optional</sup> <a name="OidcToken" id="@cdktn/provider-azurerm.provider.AzurermProviderConfig.property.oidcToken"></a>

```go
OidcToken *string
```

- *Type:* *string

The OIDC ID token for use when authenticating as a Service Principal using OpenID Connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#oidc_token AzurermProvider#oidc_token}

---

##### `OidcTokenFilePath`<sup>Optional</sup> <a name="OidcTokenFilePath" id="@cdktn/provider-azurerm.provider.AzurermProviderConfig.property.oidcTokenFilePath"></a>

```go
OidcTokenFilePath *string
```

- *Type:* *string

The path to a file containing an OIDC ID token for use when authenticating as a Service Principal using OpenID Connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#oidc_token_file_path AzurermProvider#oidc_token_file_path}

---

##### `PartnerId`<sup>Optional</sup> <a name="PartnerId" id="@cdktn/provider-azurerm.provider.AzurermProviderConfig.property.partnerId"></a>

```go
PartnerId *string
```

- *Type:* *string

A GUID/UUID that is registered with Microsoft to facilitate partner resource usage attribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#partner_id AzurermProvider#partner_id}

---

##### `ResourceProviderRegistrations`<sup>Optional</sup> <a name="ResourceProviderRegistrations" id="@cdktn/provider-azurerm.provider.AzurermProviderConfig.property.resourceProviderRegistrations"></a>

```go
ResourceProviderRegistrations *string
```

- *Type:* *string

The set of Resource Providers which should be automatically registered for the subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#resource_provider_registrations AzurermProvider#resource_provider_registrations}

---

##### `ResourceProvidersToRegister`<sup>Optional</sup> <a name="ResourceProvidersToRegister" id="@cdktn/provider-azurerm.provider.AzurermProviderConfig.property.resourceProvidersToRegister"></a>

```go
ResourceProvidersToRegister *[]*string
```

- *Type:* *[]*string

A list of Resource Providers to explicitly register for the subscription, in addition to those specified by the `resource_provider_registrations` property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#resource_providers_to_register AzurermProvider#resource_providers_to_register}

---

##### `StorageUseAzuread`<sup>Optional</sup> <a name="StorageUseAzuread" id="@cdktn/provider-azurerm.provider.AzurermProviderConfig.property.storageUseAzuread"></a>

```go
StorageUseAzuread interface{}
```

- *Type:* interface{}

Should the AzureRM Provider use Azure AD Authentication when accessing the Storage Data Plane APIs?

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#storage_use_azuread AzurermProvider#storage_use_azuread}

---

##### `SubscriptionId`<sup>Optional</sup> <a name="SubscriptionId" id="@cdktn/provider-azurerm.provider.AzurermProviderConfig.property.subscriptionId"></a>

```go
SubscriptionId *string
```

- *Type:* *string

The Subscription ID which should be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#subscription_id AzurermProvider#subscription_id}

---

##### `TenantId`<sup>Optional</sup> <a name="TenantId" id="@cdktn/provider-azurerm.provider.AzurermProviderConfig.property.tenantId"></a>

```go
TenantId *string
```

- *Type:* *string

The Tenant ID which should be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#tenant_id AzurermProvider#tenant_id}

---

##### `UseAksWorkloadIdentity`<sup>Optional</sup> <a name="UseAksWorkloadIdentity" id="@cdktn/provider-azurerm.provider.AzurermProviderConfig.property.useAksWorkloadIdentity"></a>

```go
UseAksWorkloadIdentity interface{}
```

- *Type:* interface{}

Allow Azure AKS Workload Identity to be used for Authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#use_aks_workload_identity AzurermProvider#use_aks_workload_identity}

---

##### `UseCli`<sup>Optional</sup> <a name="UseCli" id="@cdktn/provider-azurerm.provider.AzurermProviderConfig.property.useCli"></a>

```go
UseCli interface{}
```

- *Type:* interface{}

Allow Azure CLI to be used for Authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#use_cli AzurermProvider#use_cli}

---

##### `UseMsi`<sup>Optional</sup> <a name="UseMsi" id="@cdktn/provider-azurerm.provider.AzurermProviderConfig.property.useMsi"></a>

```go
UseMsi interface{}
```

- *Type:* interface{}

Allow Managed Service Identity to be used for Authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#use_msi AzurermProvider#use_msi}

---

##### `UseOidc`<sup>Optional</sup> <a name="UseOidc" id="@cdktn/provider-azurerm.provider.AzurermProviderConfig.property.useOidc"></a>

```go
UseOidc interface{}
```

- *Type:* interface{}

Allow OpenID Connect to be used for authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#use_oidc AzurermProvider#use_oidc}

---

### AzurermProviderFeatures <a name="AzurermProviderFeatures" id="@cdktn/provider-azurerm.provider.AzurermProviderFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.provider.AzurermProviderFeatures.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/provider"

&provider.AzurermProviderFeatures {
	ApiManagement: interface{},
	AppConfiguration: interface{},
	ApplicationInsights: interface{},
	CognitiveAccount: interface{},
	DatabricksWorkspace: interface{},
	EnhancedValidation: interface{},
	KeyVault: interface{},
	LogAnalyticsWorkspace: interface{},
	MachineLearning: interface{},
	ManagedDisk: interface{},
	Netapp: interface{},
	PersistIdOnCreateBeforePollingForCompletion: interface{},
	PostgresqlFlexibleServer: interface{},
	RecoveryService: interface{},
	RecoveryServicesVaults: interface{},
	ResourceGroup: interface{},
	Servicebus: interface{},
	SkipImportCheckOnCreateAndAllowOverwritingExistingResources: interface{},
	Storage: interface{},
	Subscription: interface{},
	TemplateDeployment: interface{},
	VirtualMachine: interface{},
	VirtualMachineScaleSet: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderFeatures.property.apiManagement">ApiManagement</a></code> | <code>interface{}</code> | api_management block. |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderFeatures.property.appConfiguration">AppConfiguration</a></code> | <code>interface{}</code> | app_configuration block. |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderFeatures.property.applicationInsights">ApplicationInsights</a></code> | <code>interface{}</code> | application_insights block. |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderFeatures.property.cognitiveAccount">CognitiveAccount</a></code> | <code>interface{}</code> | cognitive_account block. |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderFeatures.property.databricksWorkspace">DatabricksWorkspace</a></code> | <code>interface{}</code> | databricks_workspace block. |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderFeatures.property.enhancedValidation">EnhancedValidation</a></code> | <code>interface{}</code> | enhanced_validation block. |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderFeatures.property.keyVault">KeyVault</a></code> | <code>interface{}</code> | key_vault block. |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderFeatures.property.logAnalyticsWorkspace">LogAnalyticsWorkspace</a></code> | <code>interface{}</code> | log_analytics_workspace block. |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderFeatures.property.machineLearning">MachineLearning</a></code> | <code>interface{}</code> | machine_learning block. |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderFeatures.property.managedDisk">ManagedDisk</a></code> | <code>interface{}</code> | managed_disk block. |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderFeatures.property.netapp">Netapp</a></code> | <code>interface{}</code> | netapp block. |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderFeatures.property.persistIdOnCreateBeforePollingForCompletion">PersistIdOnCreateBeforePollingForCompletion</a></code> | <code>interface{}</code> | Whether to set the resource ID into state before polling asynchronous operations for completion. Defaults to `false`. |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderFeatures.property.postgresqlFlexibleServer">PostgresqlFlexibleServer</a></code> | <code>interface{}</code> | postgresql_flexible_server block. |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderFeatures.property.recoveryService">RecoveryService</a></code> | <code>interface{}</code> | recovery_service block. |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderFeatures.property.recoveryServicesVaults">RecoveryServicesVaults</a></code> | <code>interface{}</code> | recovery_services_vaults block. |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderFeatures.property.resourceGroup">ResourceGroup</a></code> | <code>interface{}</code> | resource_group block. |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderFeatures.property.servicebus">Servicebus</a></code> | <code>interface{}</code> | servicebus block. |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderFeatures.property.skipImportCheckOnCreateAndAllowOverwritingExistingResources">SkipImportCheckOnCreateAndAllowOverwritingExistingResources</a></code> | <code>interface{}</code> | Whether to skip the import check and allow the provider to overwrite existing remote resources if present. |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderFeatures.property.storage">Storage</a></code> | <code>interface{}</code> | storage block. |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderFeatures.property.subscription">Subscription</a></code> | <code>interface{}</code> | subscription block. |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderFeatures.property.templateDeployment">TemplateDeployment</a></code> | <code>interface{}</code> | template_deployment block. |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderFeatures.property.virtualMachine">VirtualMachine</a></code> | <code>interface{}</code> | virtual_machine block. |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderFeatures.property.virtualMachineScaleSet">VirtualMachineScaleSet</a></code> | <code>interface{}</code> | virtual_machine_scale_set block. |

---

##### `ApiManagement`<sup>Optional</sup> <a name="ApiManagement" id="@cdktn/provider-azurerm.provider.AzurermProviderFeatures.property.apiManagement"></a>

```go
ApiManagement interface{}
```

- *Type:* interface{}

api_management block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#api_management AzurermProvider#api_management}

---

##### `AppConfiguration`<sup>Optional</sup> <a name="AppConfiguration" id="@cdktn/provider-azurerm.provider.AzurermProviderFeatures.property.appConfiguration"></a>

```go
AppConfiguration interface{}
```

- *Type:* interface{}

app_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#app_configuration AzurermProvider#app_configuration}

---

##### `ApplicationInsights`<sup>Optional</sup> <a name="ApplicationInsights" id="@cdktn/provider-azurerm.provider.AzurermProviderFeatures.property.applicationInsights"></a>

```go
ApplicationInsights interface{}
```

- *Type:* interface{}

application_insights block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#application_insights AzurermProvider#application_insights}

---

##### `CognitiveAccount`<sup>Optional</sup> <a name="CognitiveAccount" id="@cdktn/provider-azurerm.provider.AzurermProviderFeatures.property.cognitiveAccount"></a>

```go
CognitiveAccount interface{}
```

- *Type:* interface{}

cognitive_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#cognitive_account AzurermProvider#cognitive_account}

---

##### `DatabricksWorkspace`<sup>Optional</sup> <a name="DatabricksWorkspace" id="@cdktn/provider-azurerm.provider.AzurermProviderFeatures.property.databricksWorkspace"></a>

```go
DatabricksWorkspace interface{}
```

- *Type:* interface{}

databricks_workspace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#databricks_workspace AzurermProvider#databricks_workspace}

---

##### `EnhancedValidation`<sup>Optional</sup> <a name="EnhancedValidation" id="@cdktn/provider-azurerm.provider.AzurermProviderFeatures.property.enhancedValidation"></a>

```go
EnhancedValidation interface{}
```

- *Type:* interface{}

enhanced_validation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#enhanced_validation AzurermProvider#enhanced_validation}

---

##### `KeyVault`<sup>Optional</sup> <a name="KeyVault" id="@cdktn/provider-azurerm.provider.AzurermProviderFeatures.property.keyVault"></a>

```go
KeyVault interface{}
```

- *Type:* interface{}

key_vault block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#key_vault AzurermProvider#key_vault}

---

##### `LogAnalyticsWorkspace`<sup>Optional</sup> <a name="LogAnalyticsWorkspace" id="@cdktn/provider-azurerm.provider.AzurermProviderFeatures.property.logAnalyticsWorkspace"></a>

```go
LogAnalyticsWorkspace interface{}
```

- *Type:* interface{}

log_analytics_workspace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#log_analytics_workspace AzurermProvider#log_analytics_workspace}

---

##### `MachineLearning`<sup>Optional</sup> <a name="MachineLearning" id="@cdktn/provider-azurerm.provider.AzurermProviderFeatures.property.machineLearning"></a>

```go
MachineLearning interface{}
```

- *Type:* interface{}

machine_learning block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#machine_learning AzurermProvider#machine_learning}

---

##### `ManagedDisk`<sup>Optional</sup> <a name="ManagedDisk" id="@cdktn/provider-azurerm.provider.AzurermProviderFeatures.property.managedDisk"></a>

```go
ManagedDisk interface{}
```

- *Type:* interface{}

managed_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#managed_disk AzurermProvider#managed_disk}

---

##### `Netapp`<sup>Optional</sup> <a name="Netapp" id="@cdktn/provider-azurerm.provider.AzurermProviderFeatures.property.netapp"></a>

```go
Netapp interface{}
```

- *Type:* interface{}

netapp block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#netapp AzurermProvider#netapp}

---

##### `PersistIdOnCreateBeforePollingForCompletion`<sup>Optional</sup> <a name="PersistIdOnCreateBeforePollingForCompletion" id="@cdktn/provider-azurerm.provider.AzurermProviderFeatures.property.persistIdOnCreateBeforePollingForCompletion"></a>

```go
PersistIdOnCreateBeforePollingForCompletion interface{}
```

- *Type:* interface{}

Whether to set the resource ID into state before polling asynchronous operations for completion. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#persist_id_on_create_before_polling_for_completion AzurermProvider#persist_id_on_create_before_polling_for_completion}

---

##### `PostgresqlFlexibleServer`<sup>Optional</sup> <a name="PostgresqlFlexibleServer" id="@cdktn/provider-azurerm.provider.AzurermProviderFeatures.property.postgresqlFlexibleServer"></a>

```go
PostgresqlFlexibleServer interface{}
```

- *Type:* interface{}

postgresql_flexible_server block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#postgresql_flexible_server AzurermProvider#postgresql_flexible_server}

---

##### `RecoveryService`<sup>Optional</sup> <a name="RecoveryService" id="@cdktn/provider-azurerm.provider.AzurermProviderFeatures.property.recoveryService"></a>

```go
RecoveryService interface{}
```

- *Type:* interface{}

recovery_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#recovery_service AzurermProvider#recovery_service}

---

##### `RecoveryServicesVaults`<sup>Optional</sup> <a name="RecoveryServicesVaults" id="@cdktn/provider-azurerm.provider.AzurermProviderFeatures.property.recoveryServicesVaults"></a>

```go
RecoveryServicesVaults interface{}
```

- *Type:* interface{}

recovery_services_vaults block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#recovery_services_vaults AzurermProvider#recovery_services_vaults}

---

##### `ResourceGroup`<sup>Optional</sup> <a name="ResourceGroup" id="@cdktn/provider-azurerm.provider.AzurermProviderFeatures.property.resourceGroup"></a>

```go
ResourceGroup interface{}
```

- *Type:* interface{}

resource_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#resource_group AzurermProvider#resource_group}

---

##### `Servicebus`<sup>Optional</sup> <a name="Servicebus" id="@cdktn/provider-azurerm.provider.AzurermProviderFeatures.property.servicebus"></a>

```go
Servicebus interface{}
```

- *Type:* interface{}

servicebus block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#servicebus AzurermProvider#servicebus}

---

##### `SkipImportCheckOnCreateAndAllowOverwritingExistingResources`<sup>Optional</sup> <a name="SkipImportCheckOnCreateAndAllowOverwritingExistingResources" id="@cdktn/provider-azurerm.provider.AzurermProviderFeatures.property.skipImportCheckOnCreateAndAllowOverwritingExistingResources"></a>

```go
SkipImportCheckOnCreateAndAllowOverwritingExistingResources interface{}
```

- *Type:* interface{}

Whether to skip the import check and allow the provider to overwrite existing remote resources if present.

Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#skip_import_check_on_create_and_allow_overwriting_existing_resources AzurermProvider#skip_import_check_on_create_and_allow_overwriting_existing_resources}

---

##### `Storage`<sup>Optional</sup> <a name="Storage" id="@cdktn/provider-azurerm.provider.AzurermProviderFeatures.property.storage"></a>

```go
Storage interface{}
```

- *Type:* interface{}

storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#storage AzurermProvider#storage}

---

##### `Subscription`<sup>Optional</sup> <a name="Subscription" id="@cdktn/provider-azurerm.provider.AzurermProviderFeatures.property.subscription"></a>

```go
Subscription interface{}
```

- *Type:* interface{}

subscription block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#subscription AzurermProvider#subscription}

---

##### `TemplateDeployment`<sup>Optional</sup> <a name="TemplateDeployment" id="@cdktn/provider-azurerm.provider.AzurermProviderFeatures.property.templateDeployment"></a>

```go
TemplateDeployment interface{}
```

- *Type:* interface{}

template_deployment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#template_deployment AzurermProvider#template_deployment}

---

##### `VirtualMachine`<sup>Optional</sup> <a name="VirtualMachine" id="@cdktn/provider-azurerm.provider.AzurermProviderFeatures.property.virtualMachine"></a>

```go
VirtualMachine interface{}
```

- *Type:* interface{}

virtual_machine block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#virtual_machine AzurermProvider#virtual_machine}

---

##### `VirtualMachineScaleSet`<sup>Optional</sup> <a name="VirtualMachineScaleSet" id="@cdktn/provider-azurerm.provider.AzurermProviderFeatures.property.virtualMachineScaleSet"></a>

```go
VirtualMachineScaleSet interface{}
```

- *Type:* interface{}

virtual_machine_scale_set block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#virtual_machine_scale_set AzurermProvider#virtual_machine_scale_set}

---

### AzurermProviderFeaturesApiManagement <a name="AzurermProviderFeaturesApiManagement" id="@cdktn/provider-azurerm.provider.AzurermProviderFeaturesApiManagement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.provider.AzurermProviderFeaturesApiManagement.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/provider"

&provider.AzurermProviderFeaturesApiManagement {
	PurgeSoftDeleteOnDestroy: interface{},
	RecoverSoftDeleted: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderFeaturesApiManagement.property.purgeSoftDeleteOnDestroy">PurgeSoftDeleteOnDestroy</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#purge_soft_delete_on_destroy AzurermProvider#purge_soft_delete_on_destroy}. |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderFeaturesApiManagement.property.recoverSoftDeleted">RecoverSoftDeleted</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#recover_soft_deleted AzurermProvider#recover_soft_deleted}. |

---

##### `PurgeSoftDeleteOnDestroy`<sup>Optional</sup> <a name="PurgeSoftDeleteOnDestroy" id="@cdktn/provider-azurerm.provider.AzurermProviderFeaturesApiManagement.property.purgeSoftDeleteOnDestroy"></a>

```go
PurgeSoftDeleteOnDestroy interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#purge_soft_delete_on_destroy AzurermProvider#purge_soft_delete_on_destroy}.

---

##### `RecoverSoftDeleted`<sup>Optional</sup> <a name="RecoverSoftDeleted" id="@cdktn/provider-azurerm.provider.AzurermProviderFeaturesApiManagement.property.recoverSoftDeleted"></a>

```go
RecoverSoftDeleted interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#recover_soft_deleted AzurermProvider#recover_soft_deleted}.

---

### AzurermProviderFeaturesAppConfiguration <a name="AzurermProviderFeaturesAppConfiguration" id="@cdktn/provider-azurerm.provider.AzurermProviderFeaturesAppConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.provider.AzurermProviderFeaturesAppConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/provider"

&provider.AzurermProviderFeaturesAppConfiguration {
	PurgeSoftDeleteOnDestroy: interface{},
	RecoverSoftDeleted: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderFeaturesAppConfiguration.property.purgeSoftDeleteOnDestroy">PurgeSoftDeleteOnDestroy</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#purge_soft_delete_on_destroy AzurermProvider#purge_soft_delete_on_destroy}. |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderFeaturesAppConfiguration.property.recoverSoftDeleted">RecoverSoftDeleted</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#recover_soft_deleted AzurermProvider#recover_soft_deleted}. |

---

##### `PurgeSoftDeleteOnDestroy`<sup>Optional</sup> <a name="PurgeSoftDeleteOnDestroy" id="@cdktn/provider-azurerm.provider.AzurermProviderFeaturesAppConfiguration.property.purgeSoftDeleteOnDestroy"></a>

```go
PurgeSoftDeleteOnDestroy interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#purge_soft_delete_on_destroy AzurermProvider#purge_soft_delete_on_destroy}.

---

##### `RecoverSoftDeleted`<sup>Optional</sup> <a name="RecoverSoftDeleted" id="@cdktn/provider-azurerm.provider.AzurermProviderFeaturesAppConfiguration.property.recoverSoftDeleted"></a>

```go
RecoverSoftDeleted interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#recover_soft_deleted AzurermProvider#recover_soft_deleted}.

---

### AzurermProviderFeaturesApplicationInsights <a name="AzurermProviderFeaturesApplicationInsights" id="@cdktn/provider-azurerm.provider.AzurermProviderFeaturesApplicationInsights"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.provider.AzurermProviderFeaturesApplicationInsights.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/provider"

&provider.AzurermProviderFeaturesApplicationInsights {
	DisableGeneratedRule: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderFeaturesApplicationInsights.property.disableGeneratedRule">DisableGeneratedRule</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#disable_generated_rule AzurermProvider#disable_generated_rule}. |

---

##### `DisableGeneratedRule`<sup>Optional</sup> <a name="DisableGeneratedRule" id="@cdktn/provider-azurerm.provider.AzurermProviderFeaturesApplicationInsights.property.disableGeneratedRule"></a>

```go
DisableGeneratedRule interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#disable_generated_rule AzurermProvider#disable_generated_rule}.

---

### AzurermProviderFeaturesCognitiveAccount <a name="AzurermProviderFeaturesCognitiveAccount" id="@cdktn/provider-azurerm.provider.AzurermProviderFeaturesCognitiveAccount"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.provider.AzurermProviderFeaturesCognitiveAccount.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/provider"

&provider.AzurermProviderFeaturesCognitiveAccount {
	PurgeSoftDeleteOnDestroy: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderFeaturesCognitiveAccount.property.purgeSoftDeleteOnDestroy">PurgeSoftDeleteOnDestroy</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#purge_soft_delete_on_destroy AzurermProvider#purge_soft_delete_on_destroy}. |

---

##### `PurgeSoftDeleteOnDestroy`<sup>Optional</sup> <a name="PurgeSoftDeleteOnDestroy" id="@cdktn/provider-azurerm.provider.AzurermProviderFeaturesCognitiveAccount.property.purgeSoftDeleteOnDestroy"></a>

```go
PurgeSoftDeleteOnDestroy interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#purge_soft_delete_on_destroy AzurermProvider#purge_soft_delete_on_destroy}.

---

### AzurermProviderFeaturesDatabricksWorkspace <a name="AzurermProviderFeaturesDatabricksWorkspace" id="@cdktn/provider-azurerm.provider.AzurermProviderFeaturesDatabricksWorkspace"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.provider.AzurermProviderFeaturesDatabricksWorkspace.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/provider"

&provider.AzurermProviderFeaturesDatabricksWorkspace {
	ForceDelete: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderFeaturesDatabricksWorkspace.property.forceDelete">ForceDelete</a></code> | <code>interface{}</code> | When enabled, the managed resource group that contains the Unity Catalog data will be forcibly deleted when the workspace is destroyed, regardless of contents. |

---

##### `ForceDelete`<sup>Optional</sup> <a name="ForceDelete" id="@cdktn/provider-azurerm.provider.AzurermProviderFeaturesDatabricksWorkspace.property.forceDelete"></a>

```go
ForceDelete interface{}
```

- *Type:* interface{}

When enabled, the managed resource group that contains the Unity Catalog data will be forcibly deleted when the workspace is destroyed, regardless of contents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#force_delete AzurermProvider#force_delete}

---

### AzurermProviderFeaturesEnhancedValidation <a name="AzurermProviderFeaturesEnhancedValidation" id="@cdktn/provider-azurerm.provider.AzurermProviderFeaturesEnhancedValidation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.provider.AzurermProviderFeaturesEnhancedValidation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/provider"

&provider.AzurermProviderFeaturesEnhancedValidation {
	Locations: interface{},
	PreflightEnabled: interface{},
	PreflightLocationFallback: *string,
	ResourceProviders: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderFeaturesEnhancedValidation.property.locations">Locations</a></code> | <code>interface{}</code> | Should the AzureRM Provider validate location arguments against the list of supported Azure Locations? |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderFeaturesEnhancedValidation.property.preflightEnabled">PreflightEnabled</a></code> | <code>interface{}</code> | Should the AzureRM Provider call the Azure Preflight Validation API at plan time to check the request payload for each Preflight-supported resource is valid. |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderFeaturesEnhancedValidation.property.preflightLocationFallback">PreflightLocationFallback</a></code> | <code>*string</code> | The Azure location to use as a fallback when Preflight Validation is enabled and a resource does not specify a location. |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderFeaturesEnhancedValidation.property.resourceProviders">ResourceProviders</a></code> | <code>interface{}</code> | Should the AzureRM Provider validate Resource Provider arguments against the list of supported Resource Providers? |

---

##### `Locations`<sup>Optional</sup> <a name="Locations" id="@cdktn/provider-azurerm.provider.AzurermProviderFeaturesEnhancedValidation.property.locations"></a>

```go
Locations interface{}
```

- *Type:* interface{}

Should the AzureRM Provider validate location arguments against the list of supported Azure Locations?

When enabled, invalid locations are caught at plan time; when disabled, they are caught at apply time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#locations AzurermProvider#locations}

---

##### `PreflightEnabled`<sup>Optional</sup> <a name="PreflightEnabled" id="@cdktn/provider-azurerm.provider.AzurermProviderFeaturesEnhancedValidation.property.preflightEnabled"></a>

```go
PreflightEnabled interface{}
```

- *Type:* interface{}

Should the AzureRM Provider call the Azure Preflight Validation API at plan time to check the request payload for each Preflight-supported resource is valid.

Note: requires valid credentials and external Azure API access at plan-time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#preflight_enabled AzurermProvider#preflight_enabled}

---

##### `PreflightLocationFallback`<sup>Optional</sup> <a name="PreflightLocationFallback" id="@cdktn/provider-azurerm.provider.AzurermProviderFeaturesEnhancedValidation.property.preflightLocationFallback"></a>

```go
PreflightLocationFallback *string
```

- *Type:* *string

The Azure location to use as a fallback when Preflight Validation is enabled and a resource does not specify a location.

This is typically used for resources that derive their location from a dependency that has not yet been created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#preflight_location_fallback AzurermProvider#preflight_location_fallback}

---

##### `ResourceProviders`<sup>Optional</sup> <a name="ResourceProviders" id="@cdktn/provider-azurerm.provider.AzurermProviderFeaturesEnhancedValidation.property.resourceProviders"></a>

```go
ResourceProviders interface{}
```

- *Type:* interface{}

Should the AzureRM Provider validate Resource Provider arguments against the list of supported Resource Providers?

When enabled, invalid resource providers are caught at plan time; when disabled, they are caught at apply time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#resource_providers AzurermProvider#resource_providers}

---

### AzurermProviderFeaturesKeyVault <a name="AzurermProviderFeaturesKeyVault" id="@cdktn/provider-azurerm.provider.AzurermProviderFeaturesKeyVault"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/provider"

&provider.AzurermProviderFeaturesKeyVault {
	PurgeSoftDeletedCertificatesOnDestroy: interface{},
	PurgeSoftDeletedHardwareSecurityModuleKeysOnDestroy: interface{},
	PurgeSoftDeletedHardwareSecurityModulesOnDestroy: interface{},
	PurgeSoftDeletedKeysOnDestroy: interface{},
	PurgeSoftDeletedSecretsOnDestroy: interface{},
	PurgeSoftDeleteOnDestroy: interface{},
	RecoverSoftDeletedCertificates: interface{},
	RecoverSoftDeletedHardwareSecurityModuleKeys: interface{},
	RecoverSoftDeletedKeys: interface{},
	RecoverSoftDeletedKeyVaults: interface{},
	RecoverSoftDeletedSecrets: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.purgeSoftDeletedCertificatesOnDestroy">PurgeSoftDeletedCertificatesOnDestroy</a></code> | <code>interface{}</code> | When enabled soft-deleted `azurerm_key_vault_certificate` resources will be permanently deleted (e.g purged), when destroyed. |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.purgeSoftDeletedHardwareSecurityModuleKeysOnDestroy">PurgeSoftDeletedHardwareSecurityModuleKeysOnDestroy</a></code> | <code>interface{}</code> | When enabled soft-deleted `azurerm_key_vault_managed_hardware_security_module_key` resources will be permanently deleted (e.g purged), when destroyed. |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.purgeSoftDeletedHardwareSecurityModulesOnDestroy">PurgeSoftDeletedHardwareSecurityModulesOnDestroy</a></code> | <code>interface{}</code> | When enabled soft-deleted `azurerm_key_vault_managed_hardware_security_module` resources will be permanently deleted (e.g purged), when destroyed. |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.purgeSoftDeletedKeysOnDestroy">PurgeSoftDeletedKeysOnDestroy</a></code> | <code>interface{}</code> | When enabled soft-deleted `azurerm_key_vault_key` resources will be permanently deleted (e.g purged), when destroyed. |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.purgeSoftDeletedSecretsOnDestroy">PurgeSoftDeletedSecretsOnDestroy</a></code> | <code>interface{}</code> | When enabled soft-deleted `azurerm_key_vault_secret` resources will be permanently deleted (e.g purged), when destroyed. |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.purgeSoftDeleteOnDestroy">PurgeSoftDeleteOnDestroy</a></code> | <code>interface{}</code> | When enabled soft-deleted `azurerm_key_vault` resources will be permanently deleted (e.g purged), when destroyed. |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.recoverSoftDeletedCertificates">RecoverSoftDeletedCertificates</a></code> | <code>interface{}</code> | When enabled soft-deleted `azurerm_key_vault_certificate` resources will be restored, instead of creating new ones. |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.recoverSoftDeletedHardwareSecurityModuleKeys">RecoverSoftDeletedHardwareSecurityModuleKeys</a></code> | <code>interface{}</code> | When enabled soft-deleted `azurerm_key_vault_managed_hardware_security_module_key` resources will be restored, instead of creating new ones. |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.recoverSoftDeletedKeys">RecoverSoftDeletedKeys</a></code> | <code>interface{}</code> | When enabled soft-deleted `azurerm_key_vault_key` resources will be restored, instead of creating new ones. |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.recoverSoftDeletedKeyVaults">RecoverSoftDeletedKeyVaults</a></code> | <code>interface{}</code> | When enabled soft-deleted `azurerm_key_vault` resources will be restored, instead of creating new ones. |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.recoverSoftDeletedSecrets">RecoverSoftDeletedSecrets</a></code> | <code>interface{}</code> | When enabled soft-deleted `azurerm_key_vault_secret` resources will be restored, instead of creating new ones. |

---

##### `PurgeSoftDeletedCertificatesOnDestroy`<sup>Optional</sup> <a name="PurgeSoftDeletedCertificatesOnDestroy" id="@cdktn/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.purgeSoftDeletedCertificatesOnDestroy"></a>

```go
PurgeSoftDeletedCertificatesOnDestroy interface{}
```

- *Type:* interface{}

When enabled soft-deleted `azurerm_key_vault_certificate` resources will be permanently deleted (e.g purged), when destroyed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#purge_soft_deleted_certificates_on_destroy AzurermProvider#purge_soft_deleted_certificates_on_destroy}

---

##### `PurgeSoftDeletedHardwareSecurityModuleKeysOnDestroy`<sup>Optional</sup> <a name="PurgeSoftDeletedHardwareSecurityModuleKeysOnDestroy" id="@cdktn/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.purgeSoftDeletedHardwareSecurityModuleKeysOnDestroy"></a>

```go
PurgeSoftDeletedHardwareSecurityModuleKeysOnDestroy interface{}
```

- *Type:* interface{}

When enabled soft-deleted `azurerm_key_vault_managed_hardware_security_module_key` resources will be permanently deleted (e.g purged), when destroyed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#purge_soft_deleted_hardware_security_module_keys_on_destroy AzurermProvider#purge_soft_deleted_hardware_security_module_keys_on_destroy}

---

##### `PurgeSoftDeletedHardwareSecurityModulesOnDestroy`<sup>Optional</sup> <a name="PurgeSoftDeletedHardwareSecurityModulesOnDestroy" id="@cdktn/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.purgeSoftDeletedHardwareSecurityModulesOnDestroy"></a>

```go
PurgeSoftDeletedHardwareSecurityModulesOnDestroy interface{}
```

- *Type:* interface{}

When enabled soft-deleted `azurerm_key_vault_managed_hardware_security_module` resources will be permanently deleted (e.g purged), when destroyed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#purge_soft_deleted_hardware_security_modules_on_destroy AzurermProvider#purge_soft_deleted_hardware_security_modules_on_destroy}

---

##### `PurgeSoftDeletedKeysOnDestroy`<sup>Optional</sup> <a name="PurgeSoftDeletedKeysOnDestroy" id="@cdktn/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.purgeSoftDeletedKeysOnDestroy"></a>

```go
PurgeSoftDeletedKeysOnDestroy interface{}
```

- *Type:* interface{}

When enabled soft-deleted `azurerm_key_vault_key` resources will be permanently deleted (e.g purged), when destroyed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#purge_soft_deleted_keys_on_destroy AzurermProvider#purge_soft_deleted_keys_on_destroy}

---

##### `PurgeSoftDeletedSecretsOnDestroy`<sup>Optional</sup> <a name="PurgeSoftDeletedSecretsOnDestroy" id="@cdktn/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.purgeSoftDeletedSecretsOnDestroy"></a>

```go
PurgeSoftDeletedSecretsOnDestroy interface{}
```

- *Type:* interface{}

When enabled soft-deleted `azurerm_key_vault_secret` resources will be permanently deleted (e.g purged), when destroyed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#purge_soft_deleted_secrets_on_destroy AzurermProvider#purge_soft_deleted_secrets_on_destroy}

---

##### `PurgeSoftDeleteOnDestroy`<sup>Optional</sup> <a name="PurgeSoftDeleteOnDestroy" id="@cdktn/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.purgeSoftDeleteOnDestroy"></a>

```go
PurgeSoftDeleteOnDestroy interface{}
```

- *Type:* interface{}

When enabled soft-deleted `azurerm_key_vault` resources will be permanently deleted (e.g purged), when destroyed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#purge_soft_delete_on_destroy AzurermProvider#purge_soft_delete_on_destroy}

---

##### `RecoverSoftDeletedCertificates`<sup>Optional</sup> <a name="RecoverSoftDeletedCertificates" id="@cdktn/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.recoverSoftDeletedCertificates"></a>

```go
RecoverSoftDeletedCertificates interface{}
```

- *Type:* interface{}

When enabled soft-deleted `azurerm_key_vault_certificate` resources will be restored, instead of creating new ones.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#recover_soft_deleted_certificates AzurermProvider#recover_soft_deleted_certificates}

---

##### `RecoverSoftDeletedHardwareSecurityModuleKeys`<sup>Optional</sup> <a name="RecoverSoftDeletedHardwareSecurityModuleKeys" id="@cdktn/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.recoverSoftDeletedHardwareSecurityModuleKeys"></a>

```go
RecoverSoftDeletedHardwareSecurityModuleKeys interface{}
```

- *Type:* interface{}

When enabled soft-deleted `azurerm_key_vault_managed_hardware_security_module_key` resources will be restored, instead of creating new ones.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#recover_soft_deleted_hardware_security_module_keys AzurermProvider#recover_soft_deleted_hardware_security_module_keys}

---

##### `RecoverSoftDeletedKeys`<sup>Optional</sup> <a name="RecoverSoftDeletedKeys" id="@cdktn/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.recoverSoftDeletedKeys"></a>

```go
RecoverSoftDeletedKeys interface{}
```

- *Type:* interface{}

When enabled soft-deleted `azurerm_key_vault_key` resources will be restored, instead of creating new ones.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#recover_soft_deleted_keys AzurermProvider#recover_soft_deleted_keys}

---

##### `RecoverSoftDeletedKeyVaults`<sup>Optional</sup> <a name="RecoverSoftDeletedKeyVaults" id="@cdktn/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.recoverSoftDeletedKeyVaults"></a>

```go
RecoverSoftDeletedKeyVaults interface{}
```

- *Type:* interface{}

When enabled soft-deleted `azurerm_key_vault` resources will be restored, instead of creating new ones.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#recover_soft_deleted_key_vaults AzurermProvider#recover_soft_deleted_key_vaults}

---

##### `RecoverSoftDeletedSecrets`<sup>Optional</sup> <a name="RecoverSoftDeletedSecrets" id="@cdktn/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.recoverSoftDeletedSecrets"></a>

```go
RecoverSoftDeletedSecrets interface{}
```

- *Type:* interface{}

When enabled soft-deleted `azurerm_key_vault_secret` resources will be restored, instead of creating new ones.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#recover_soft_deleted_secrets AzurermProvider#recover_soft_deleted_secrets}

---

### AzurermProviderFeaturesLogAnalyticsWorkspace <a name="AzurermProviderFeaturesLogAnalyticsWorkspace" id="@cdktn/provider-azurerm.provider.AzurermProviderFeaturesLogAnalyticsWorkspace"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.provider.AzurermProviderFeaturesLogAnalyticsWorkspace.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/provider"

&provider.AzurermProviderFeaturesLogAnalyticsWorkspace {
	PermanentlyDeleteOnDestroy: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderFeaturesLogAnalyticsWorkspace.property.permanentlyDeleteOnDestroy">PermanentlyDeleteOnDestroy</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#permanently_delete_on_destroy AzurermProvider#permanently_delete_on_destroy}. |

---

##### `PermanentlyDeleteOnDestroy`<sup>Optional</sup> <a name="PermanentlyDeleteOnDestroy" id="@cdktn/provider-azurerm.provider.AzurermProviderFeaturesLogAnalyticsWorkspace.property.permanentlyDeleteOnDestroy"></a>

```go
PermanentlyDeleteOnDestroy interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#permanently_delete_on_destroy AzurermProvider#permanently_delete_on_destroy}.

---

### AzurermProviderFeaturesMachineLearning <a name="AzurermProviderFeaturesMachineLearning" id="@cdktn/provider-azurerm.provider.AzurermProviderFeaturesMachineLearning"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.provider.AzurermProviderFeaturesMachineLearning.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/provider"

&provider.AzurermProviderFeaturesMachineLearning {
	PurgeSoftDeletedWorkspaceOnDestroy: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderFeaturesMachineLearning.property.purgeSoftDeletedWorkspaceOnDestroy">PurgeSoftDeletedWorkspaceOnDestroy</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#purge_soft_deleted_workspace_on_destroy AzurermProvider#purge_soft_deleted_workspace_on_destroy}. |

---

##### `PurgeSoftDeletedWorkspaceOnDestroy`<sup>Optional</sup> <a name="PurgeSoftDeletedWorkspaceOnDestroy" id="@cdktn/provider-azurerm.provider.AzurermProviderFeaturesMachineLearning.property.purgeSoftDeletedWorkspaceOnDestroy"></a>

```go
PurgeSoftDeletedWorkspaceOnDestroy interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#purge_soft_deleted_workspace_on_destroy AzurermProvider#purge_soft_deleted_workspace_on_destroy}.

---

### AzurermProviderFeaturesManagedDisk <a name="AzurermProviderFeaturesManagedDisk" id="@cdktn/provider-azurerm.provider.AzurermProviderFeaturesManagedDisk"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.provider.AzurermProviderFeaturesManagedDisk.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/provider"

&provider.AzurermProviderFeaturesManagedDisk {
	ExpandWithoutDowntime: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderFeaturesManagedDisk.property.expandWithoutDowntime">ExpandWithoutDowntime</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#expand_without_downtime AzurermProvider#expand_without_downtime}. |

---

##### `ExpandWithoutDowntime`<sup>Optional</sup> <a name="ExpandWithoutDowntime" id="@cdktn/provider-azurerm.provider.AzurermProviderFeaturesManagedDisk.property.expandWithoutDowntime"></a>

```go
ExpandWithoutDowntime interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#expand_without_downtime AzurermProvider#expand_without_downtime}.

---

### AzurermProviderFeaturesNetapp <a name="AzurermProviderFeaturesNetapp" id="@cdktn/provider-azurerm.provider.AzurermProviderFeaturesNetapp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.provider.AzurermProviderFeaturesNetapp.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/provider"

&provider.AzurermProviderFeaturesNetapp {
	DeleteBackupsOnBackupVaultDestroy: interface{},
	PreventVolumeDestruction: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderFeaturesNetapp.property.deleteBackupsOnBackupVaultDestroy">DeleteBackupsOnBackupVaultDestroy</a></code> | <code>interface{}</code> | When enabled, backups will be deleted when the `azurerm_netapp_backup_vault` resource is destroyed. |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderFeaturesNetapp.property.preventVolumeDestruction">PreventVolumeDestruction</a></code> | <code>interface{}</code> | When enabled, the volume will not be destroyed, safeguarding from severe data loss. |

---

##### `DeleteBackupsOnBackupVaultDestroy`<sup>Optional</sup> <a name="DeleteBackupsOnBackupVaultDestroy" id="@cdktn/provider-azurerm.provider.AzurermProviderFeaturesNetapp.property.deleteBackupsOnBackupVaultDestroy"></a>

```go
DeleteBackupsOnBackupVaultDestroy interface{}
```

- *Type:* interface{}

When enabled, backups will be deleted when the `azurerm_netapp_backup_vault` resource is destroyed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#delete_backups_on_backup_vault_destroy AzurermProvider#delete_backups_on_backup_vault_destroy}

---

##### `PreventVolumeDestruction`<sup>Optional</sup> <a name="PreventVolumeDestruction" id="@cdktn/provider-azurerm.provider.AzurermProviderFeaturesNetapp.property.preventVolumeDestruction"></a>

```go
PreventVolumeDestruction interface{}
```

- *Type:* interface{}

When enabled, the volume will not be destroyed, safeguarding from severe data loss.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#prevent_volume_destruction AzurermProvider#prevent_volume_destruction}

---

### AzurermProviderFeaturesPostgresqlFlexibleServer <a name="AzurermProviderFeaturesPostgresqlFlexibleServer" id="@cdktn/provider-azurerm.provider.AzurermProviderFeaturesPostgresqlFlexibleServer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.provider.AzurermProviderFeaturesPostgresqlFlexibleServer.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/provider"

&provider.AzurermProviderFeaturesPostgresqlFlexibleServer {
	RestartServerOnConfigurationValueChange: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderFeaturesPostgresqlFlexibleServer.property.restartServerOnConfigurationValueChange">RestartServerOnConfigurationValueChange</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#restart_server_on_configuration_value_change AzurermProvider#restart_server_on_configuration_value_change}. |

---

##### `RestartServerOnConfigurationValueChange`<sup>Optional</sup> <a name="RestartServerOnConfigurationValueChange" id="@cdktn/provider-azurerm.provider.AzurermProviderFeaturesPostgresqlFlexibleServer.property.restartServerOnConfigurationValueChange"></a>

```go
RestartServerOnConfigurationValueChange interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#restart_server_on_configuration_value_change AzurermProvider#restart_server_on_configuration_value_change}.

---

### AzurermProviderFeaturesRecoveryService <a name="AzurermProviderFeaturesRecoveryService" id="@cdktn/provider-azurerm.provider.AzurermProviderFeaturesRecoveryService"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.provider.AzurermProviderFeaturesRecoveryService.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/provider"

&provider.AzurermProviderFeaturesRecoveryService {
	PurgeProtectedItemsFromVaultOnDestroy: interface{},
	VmBackupStopProtectionAndRetainDataOnDestroy: interface{},
	VmBackupSuspendProtectionAndRetainDataOnDestroy: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderFeaturesRecoveryService.property.purgeProtectedItemsFromVaultOnDestroy">PurgeProtectedItemsFromVaultOnDestroy</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#purge_protected_items_from_vault_on_destroy AzurermProvider#purge_protected_items_from_vault_on_destroy}. |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderFeaturesRecoveryService.property.vmBackupStopProtectionAndRetainDataOnDestroy">VmBackupStopProtectionAndRetainDataOnDestroy</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#vm_backup_stop_protection_and_retain_data_on_destroy AzurermProvider#vm_backup_stop_protection_and_retain_data_on_destroy}. |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderFeaturesRecoveryService.property.vmBackupSuspendProtectionAndRetainDataOnDestroy">VmBackupSuspendProtectionAndRetainDataOnDestroy</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#vm_backup_suspend_protection_and_retain_data_on_destroy AzurermProvider#vm_backup_suspend_protection_and_retain_data_on_destroy}. |

---

##### `PurgeProtectedItemsFromVaultOnDestroy`<sup>Optional</sup> <a name="PurgeProtectedItemsFromVaultOnDestroy" id="@cdktn/provider-azurerm.provider.AzurermProviderFeaturesRecoveryService.property.purgeProtectedItemsFromVaultOnDestroy"></a>

```go
PurgeProtectedItemsFromVaultOnDestroy interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#purge_protected_items_from_vault_on_destroy AzurermProvider#purge_protected_items_from_vault_on_destroy}.

---

##### `VmBackupStopProtectionAndRetainDataOnDestroy`<sup>Optional</sup> <a name="VmBackupStopProtectionAndRetainDataOnDestroy" id="@cdktn/provider-azurerm.provider.AzurermProviderFeaturesRecoveryService.property.vmBackupStopProtectionAndRetainDataOnDestroy"></a>

```go
VmBackupStopProtectionAndRetainDataOnDestroy interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#vm_backup_stop_protection_and_retain_data_on_destroy AzurermProvider#vm_backup_stop_protection_and_retain_data_on_destroy}.

---

##### `VmBackupSuspendProtectionAndRetainDataOnDestroy`<sup>Optional</sup> <a name="VmBackupSuspendProtectionAndRetainDataOnDestroy" id="@cdktn/provider-azurerm.provider.AzurermProviderFeaturesRecoveryService.property.vmBackupSuspendProtectionAndRetainDataOnDestroy"></a>

```go
VmBackupSuspendProtectionAndRetainDataOnDestroy interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#vm_backup_suspend_protection_and_retain_data_on_destroy AzurermProvider#vm_backup_suspend_protection_and_retain_data_on_destroy}.

---

### AzurermProviderFeaturesRecoveryServicesVaults <a name="AzurermProviderFeaturesRecoveryServicesVaults" id="@cdktn/provider-azurerm.provider.AzurermProviderFeaturesRecoveryServicesVaults"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.provider.AzurermProviderFeaturesRecoveryServicesVaults.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/provider"

&provider.AzurermProviderFeaturesRecoveryServicesVaults {
	RecoverSoftDeletedBackupProtectedVm: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderFeaturesRecoveryServicesVaults.property.recoverSoftDeletedBackupProtectedVm">RecoverSoftDeletedBackupProtectedVm</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#recover_soft_deleted_backup_protected_vm AzurermProvider#recover_soft_deleted_backup_protected_vm}. |

---

##### `RecoverSoftDeletedBackupProtectedVm`<sup>Optional</sup> <a name="RecoverSoftDeletedBackupProtectedVm" id="@cdktn/provider-azurerm.provider.AzurermProviderFeaturesRecoveryServicesVaults.property.recoverSoftDeletedBackupProtectedVm"></a>

```go
RecoverSoftDeletedBackupProtectedVm interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#recover_soft_deleted_backup_protected_vm AzurermProvider#recover_soft_deleted_backup_protected_vm}.

---

### AzurermProviderFeaturesResourceGroup <a name="AzurermProviderFeaturesResourceGroup" id="@cdktn/provider-azurerm.provider.AzurermProviderFeaturesResourceGroup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.provider.AzurermProviderFeaturesResourceGroup.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/provider"

&provider.AzurermProviderFeaturesResourceGroup {
	PreventDeletionIfContainsResources: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderFeaturesResourceGroup.property.preventDeletionIfContainsResources">PreventDeletionIfContainsResources</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#prevent_deletion_if_contains_resources AzurermProvider#prevent_deletion_if_contains_resources}. |

---

##### `PreventDeletionIfContainsResources`<sup>Optional</sup> <a name="PreventDeletionIfContainsResources" id="@cdktn/provider-azurerm.provider.AzurermProviderFeaturesResourceGroup.property.preventDeletionIfContainsResources"></a>

```go
PreventDeletionIfContainsResources interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#prevent_deletion_if_contains_resources AzurermProvider#prevent_deletion_if_contains_resources}.

---

### AzurermProviderFeaturesServicebus <a name="AzurermProviderFeaturesServicebus" id="@cdktn/provider-azurerm.provider.AzurermProviderFeaturesServicebus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.provider.AzurermProviderFeaturesServicebus.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/provider"

&provider.AzurermProviderFeaturesServicebus {
	AutoDeleteSubscriptionDefaultRule: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderFeaturesServicebus.property.autoDeleteSubscriptionDefaultRule">AutoDeleteSubscriptionDefaultRule</a></code> | <code>interface{}</code> | When enabled, the $Default rule is automatically deleted after creating a Service Bus subscription, preventing unfiltered message delivery. |

---

##### `AutoDeleteSubscriptionDefaultRule`<sup>Optional</sup> <a name="AutoDeleteSubscriptionDefaultRule" id="@cdktn/provider-azurerm.provider.AzurermProviderFeaturesServicebus.property.autoDeleteSubscriptionDefaultRule"></a>

```go
AutoDeleteSubscriptionDefaultRule interface{}
```

- *Type:* interface{}

When enabled, the $Default rule is automatically deleted after creating a Service Bus subscription, preventing unfiltered message delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#auto_delete_subscription_default_rule AzurermProvider#auto_delete_subscription_default_rule}

---

### AzurermProviderFeaturesStorage <a name="AzurermProviderFeaturesStorage" id="@cdktn/provider-azurerm.provider.AzurermProviderFeaturesStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.provider.AzurermProviderFeaturesStorage.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/provider"

&provider.AzurermProviderFeaturesStorage {
	DataPlaneAvailable: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderFeaturesStorage.property.dataPlaneAvailable">DataPlaneAvailable</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#data_plane_available AzurermProvider#data_plane_available}. |

---

##### `DataPlaneAvailable`<sup>Optional</sup> <a name="DataPlaneAvailable" id="@cdktn/provider-azurerm.provider.AzurermProviderFeaturesStorage.property.dataPlaneAvailable"></a>

```go
DataPlaneAvailable interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#data_plane_available AzurermProvider#data_plane_available}.

---

### AzurermProviderFeaturesSubscription <a name="AzurermProviderFeaturesSubscription" id="@cdktn/provider-azurerm.provider.AzurermProviderFeaturesSubscription"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.provider.AzurermProviderFeaturesSubscription.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/provider"

&provider.AzurermProviderFeaturesSubscription {
	PreventCancellationOnDestroy: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderFeaturesSubscription.property.preventCancellationOnDestroy">PreventCancellationOnDestroy</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#prevent_cancellation_on_destroy AzurermProvider#prevent_cancellation_on_destroy}. |

---

##### `PreventCancellationOnDestroy`<sup>Optional</sup> <a name="PreventCancellationOnDestroy" id="@cdktn/provider-azurerm.provider.AzurermProviderFeaturesSubscription.property.preventCancellationOnDestroy"></a>

```go
PreventCancellationOnDestroy interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#prevent_cancellation_on_destroy AzurermProvider#prevent_cancellation_on_destroy}.

---

### AzurermProviderFeaturesTemplateDeployment <a name="AzurermProviderFeaturesTemplateDeployment" id="@cdktn/provider-azurerm.provider.AzurermProviderFeaturesTemplateDeployment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.provider.AzurermProviderFeaturesTemplateDeployment.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/provider"

&provider.AzurermProviderFeaturesTemplateDeployment {
	DeleteNestedItemsDuringDeletion: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderFeaturesTemplateDeployment.property.deleteNestedItemsDuringDeletion">DeleteNestedItemsDuringDeletion</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#delete_nested_items_during_deletion AzurermProvider#delete_nested_items_during_deletion}. |

---

##### `DeleteNestedItemsDuringDeletion`<sup>Required</sup> <a name="DeleteNestedItemsDuringDeletion" id="@cdktn/provider-azurerm.provider.AzurermProviderFeaturesTemplateDeployment.property.deleteNestedItemsDuringDeletion"></a>

```go
DeleteNestedItemsDuringDeletion interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#delete_nested_items_during_deletion AzurermProvider#delete_nested_items_during_deletion}.

---

### AzurermProviderFeaturesVirtualMachine <a name="AzurermProviderFeaturesVirtualMachine" id="@cdktn/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachine"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachine.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/provider"

&provider.AzurermProviderFeaturesVirtualMachine {
	DeleteOsDiskOnDeletion: interface{},
	DetachImplicitDataDiskOnDeletion: interface{},
	SkipShutdownAndForceDelete: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachine.property.deleteOsDiskOnDeletion">DeleteOsDiskOnDeletion</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#delete_os_disk_on_deletion AzurermProvider#delete_os_disk_on_deletion}. |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachine.property.detachImplicitDataDiskOnDeletion">DetachImplicitDataDiskOnDeletion</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#detach_implicit_data_disk_on_deletion AzurermProvider#detach_implicit_data_disk_on_deletion}. |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachine.property.skipShutdownAndForceDelete">SkipShutdownAndForceDelete</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#skip_shutdown_and_force_delete AzurermProvider#skip_shutdown_and_force_delete}. |

---

##### `DeleteOsDiskOnDeletion`<sup>Optional</sup> <a name="DeleteOsDiskOnDeletion" id="@cdktn/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachine.property.deleteOsDiskOnDeletion"></a>

```go
DeleteOsDiskOnDeletion interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#delete_os_disk_on_deletion AzurermProvider#delete_os_disk_on_deletion}.

---

##### `DetachImplicitDataDiskOnDeletion`<sup>Optional</sup> <a name="DetachImplicitDataDiskOnDeletion" id="@cdktn/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachine.property.detachImplicitDataDiskOnDeletion"></a>

```go
DetachImplicitDataDiskOnDeletion interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#detach_implicit_data_disk_on_deletion AzurermProvider#detach_implicit_data_disk_on_deletion}.

---

##### `SkipShutdownAndForceDelete`<sup>Optional</sup> <a name="SkipShutdownAndForceDelete" id="@cdktn/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachine.property.skipShutdownAndForceDelete"></a>

```go
SkipShutdownAndForceDelete interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#skip_shutdown_and_force_delete AzurermProvider#skip_shutdown_and_force_delete}.

---

### AzurermProviderFeaturesVirtualMachineScaleSet <a name="AzurermProviderFeaturesVirtualMachineScaleSet" id="@cdktn/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachineScaleSet"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachineScaleSet.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/provider"

&provider.AzurermProviderFeaturesVirtualMachineScaleSet {
	ForceDelete: interface{},
	ReimageOnManualUpgrade: interface{},
	RollInstancesWhenRequired: interface{},
	ScaleToZeroBeforeDeletion: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachineScaleSet.property.forceDelete">ForceDelete</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#force_delete AzurermProvider#force_delete}. |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachineScaleSet.property.reimageOnManualUpgrade">ReimageOnManualUpgrade</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#reimage_on_manual_upgrade AzurermProvider#reimage_on_manual_upgrade}. |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachineScaleSet.property.rollInstancesWhenRequired">RollInstancesWhenRequired</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#roll_instances_when_required AzurermProvider#roll_instances_when_required}. |
| <code><a href="#@cdktn/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachineScaleSet.property.scaleToZeroBeforeDeletion">ScaleToZeroBeforeDeletion</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#scale_to_zero_before_deletion AzurermProvider#scale_to_zero_before_deletion}. |

---

##### `ForceDelete`<sup>Optional</sup> <a name="ForceDelete" id="@cdktn/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachineScaleSet.property.forceDelete"></a>

```go
ForceDelete interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#force_delete AzurermProvider#force_delete}.

---

##### `ReimageOnManualUpgrade`<sup>Optional</sup> <a name="ReimageOnManualUpgrade" id="@cdktn/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachineScaleSet.property.reimageOnManualUpgrade"></a>

```go
ReimageOnManualUpgrade interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#reimage_on_manual_upgrade AzurermProvider#reimage_on_manual_upgrade}.

---

##### `RollInstancesWhenRequired`<sup>Optional</sup> <a name="RollInstancesWhenRequired" id="@cdktn/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachineScaleSet.property.rollInstancesWhenRequired"></a>

```go
RollInstancesWhenRequired interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#roll_instances_when_required AzurermProvider#roll_instances_when_required}.

---

##### `ScaleToZeroBeforeDeletion`<sup>Optional</sup> <a name="ScaleToZeroBeforeDeletion" id="@cdktn/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachineScaleSet.property.scaleToZeroBeforeDeletion"></a>

```go
ScaleToZeroBeforeDeletion interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs#scale_to_zero_before_deletion AzurermProvider#scale_to_zero_before_deletion}.

---



