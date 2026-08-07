# `providerFunctions` Submodule <a name="`providerFunctions` Submodule" id="@cdktn/provider-azurerm.providerFunctions"></a>



## Classes <a name="Classes" id="Classes"></a>

### AzurermProviderFunctions <a name="AzurermProviderFunctions" id="@cdktn/provider-azurerm.providerFunctions.AzurermProviderFunctions"></a>

Provider-defined functions of the azurerm provider.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.providerFunctions.AzurermProviderFunctions.Initializer"></a>

```python
from cdktn_provider_azurerm import provider_functions

providerFunctions.AzurermProviderFunctions(
  provider_local_name: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.providerFunctions.AzurermProviderFunctions.Initializer.parameter.providerLocalName">provider_local_name</a></code> | <code>str</code> | The local name of the provider in required_providers; |

---

##### `provider_local_name`<sup>Required</sup> <a name="provider_local_name" id="@cdktn/provider-azurerm.providerFunctions.AzurermProviderFunctions.Initializer.parameter.providerLocalName"></a>

- *Type:* str

The local name of the provider in required_providers;

defaults to the registry short name. Override when the provider is declared under a different local name — aliases do not change the namespace, local names do.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.providerFunctions.AzurermProviderFunctions.normaliseResourceId">normalise_resource_id</a></code> | Parses and attempts to normalise the casing on an Azure Resource Manager ID into the correct casing for Terraform. |
| <code><a href="#@cdktn/provider-azurerm.providerFunctions.AzurermProviderFunctions.parseResourceId">parse_resource_id</a></code> | Parses an Azure Resource Manager ID and exposes the contained information. |

---

##### `normalise_resource_id` <a name="normalise_resource_id" id="@cdktn/provider-azurerm.providerFunctions.AzurermProviderFunctions.normaliseResourceId"></a>

```python
def normalise_resource_id(
  id: str
) -> str
```

Parses and attempts to normalise the casing on an Azure Resource Manager ID into the correct casing for Terraform.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.providerFunctions.AzurermProviderFunctions.normaliseResourceId.parameter.id"></a>

- *Type:* str

Resource ID.

---

##### `parse_resource_id` <a name="parse_resource_id" id="@cdktn/provider-azurerm.providerFunctions.AzurermProviderFunctions.parseResourceId"></a>

```python
def parse_resource_id(
  id: str
) -> IResolvable
```

Parses an Azure Resource Manager ID and exposes the contained information.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.providerFunctions.AzurermProviderFunctions.parseResourceId.parameter.id"></a>

- *Type:* str

Resource ID.

---





