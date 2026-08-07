/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// generated from provider function schema

import * as cdktn from 'cdktn';

/**
* Provider-defined functions of the azurerm provider.
*/
export class AzurermProviderFunctions {
  private readonly providerLocalName: string;

  /**
  * @param providerLocalName The local name of the provider in required_providers; defaults to the registry short name. Override when the provider is declared under a different local name — aliases do not change the namespace, local names do.
  */
  constructor(providerLocalName: string) {
    this.providerLocalName = providerLocalName;
  }

  /**
  * Parses and attempts to normalise the casing on an Azure Resource Manager ID into the correct casing for Terraform
  * @param {string} id - Resource ID
  * @returns {string}
  */
  public normaliseResourceId(id: string): string {
    return cdktn.Token.asString(cdktn.TerraformProviderFunction.invoke(this.providerLocalName, "normalise_resource_id", [id]));
  }

  /**
  * Parses an Azure Resource Manager ID and exposes the contained information
  * @param {string} id - Resource ID
  * @returns {object}
  */
  public parseResourceId(id: string): cdktn.IResolvable {
    return cdktn.TerraformProviderFunction.invoke(this.providerLocalName, "parse_resource_id", [id]);
  }
}
