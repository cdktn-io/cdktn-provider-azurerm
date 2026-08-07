# `providerFunctions` Submodule <a name="`providerFunctions` Submodule" id="@cdktn/provider-azurerm.providerFunctions"></a>



## Classes <a name="Classes" id="Classes"></a>

### AzurermProviderFunctions <a name="AzurermProviderFunctions" id="@cdktn/provider-azurerm.providerFunctions.AzurermProviderFunctions"></a>

Provider-defined functions of the azurerm provider.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.providerFunctions.AzurermProviderFunctions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new AzurermProviderFunctions(string ProviderLocalName);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.providerFunctions.AzurermProviderFunctions.Initializer.parameter.providerLocalName">ProviderLocalName</a></code> | <code>string</code> | The local name of the provider in required_providers; |

---

##### `ProviderLocalName`<sup>Required</sup> <a name="ProviderLocalName" id="@cdktn/provider-azurerm.providerFunctions.AzurermProviderFunctions.Initializer.parameter.providerLocalName"></a>

- *Type:* string

The local name of the provider in required_providers;

defaults to the registry short name. Override when the provider is declared under a different local name — aliases do not change the namespace, local names do.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.providerFunctions.AzurermProviderFunctions.normaliseResourceId">NormaliseResourceId</a></code> | Parses and attempts to normalise the casing on an Azure Resource Manager ID into the correct casing for Terraform. |
| <code><a href="#@cdktn/provider-azurerm.providerFunctions.AzurermProviderFunctions.parseResourceId">ParseResourceId</a></code> | Parses an Azure Resource Manager ID and exposes the contained information. |

---

##### `NormaliseResourceId` <a name="NormaliseResourceId" id="@cdktn/provider-azurerm.providerFunctions.AzurermProviderFunctions.normaliseResourceId"></a>

```csharp
private string NormaliseResourceId(string Id)
```

Parses and attempts to normalise the casing on an Azure Resource Manager ID into the correct casing for Terraform.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.providerFunctions.AzurermProviderFunctions.normaliseResourceId.parameter.id"></a>

- *Type:* string

Resource ID.

---

##### `ParseResourceId` <a name="ParseResourceId" id="@cdktn/provider-azurerm.providerFunctions.AzurermProviderFunctions.parseResourceId"></a>

```csharp
private IResolvable ParseResourceId(string Id)
```

Parses an Azure Resource Manager ID and exposes the contained information.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.providerFunctions.AzurermProviderFunctions.parseResourceId.parameter.id"></a>

- *Type:* string

Resource ID.

---





