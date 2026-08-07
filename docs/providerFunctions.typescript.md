# `providerFunctions` Submodule <a name="`providerFunctions` Submodule" id="@cdktn/provider-azurerm.providerFunctions"></a>



## Classes <a name="Classes" id="Classes"></a>

### AzurermProviderFunctions <a name="AzurermProviderFunctions" id="@cdktn/provider-azurerm.providerFunctions.AzurermProviderFunctions"></a>

Provider-defined functions of the azurerm provider.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.providerFunctions.AzurermProviderFunctions.Initializer"></a>

```typescript
import { providerFunctions } from '@cdktn/provider-azurerm'

new providerFunctions.AzurermProviderFunctions(providerLocalName: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.providerFunctions.AzurermProviderFunctions.Initializer.parameter.providerLocalName">providerLocalName</a></code> | <code>string</code> | The local name of the provider in required_providers; |

---

##### `providerLocalName`<sup>Required</sup> <a name="providerLocalName" id="@cdktn/provider-azurerm.providerFunctions.AzurermProviderFunctions.Initializer.parameter.providerLocalName"></a>

- *Type:* string

The local name of the provider in required_providers;

defaults to the registry short name. Override when the provider is declared under a different local name — aliases do not change the namespace, local names do.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.providerFunctions.AzurermProviderFunctions.normaliseResourceId">normaliseResourceId</a></code> | Parses and attempts to normalise the casing on an Azure Resource Manager ID into the correct casing for Terraform. |
| <code><a href="#@cdktn/provider-azurerm.providerFunctions.AzurermProviderFunctions.parseResourceId">parseResourceId</a></code> | Parses an Azure Resource Manager ID and exposes the contained information. |

---

##### `normaliseResourceId` <a name="normaliseResourceId" id="@cdktn/provider-azurerm.providerFunctions.AzurermProviderFunctions.normaliseResourceId"></a>

```typescript
public normaliseResourceId(id: string): string
```

Parses and attempts to normalise the casing on an Azure Resource Manager ID into the correct casing for Terraform.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.providerFunctions.AzurermProviderFunctions.normaliseResourceId.parameter.id"></a>

- *Type:* string

Resource ID.

---

##### `parseResourceId` <a name="parseResourceId" id="@cdktn/provider-azurerm.providerFunctions.AzurermProviderFunctions.parseResourceId"></a>

```typescript
public parseResourceId(id: string): IResolvable
```

Parses an Azure Resource Manager ID and exposes the contained information.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.providerFunctions.AzurermProviderFunctions.parseResourceId.parameter.id"></a>

- *Type:* string

Resource ID.

---





