/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface AzurermProviderConfig {
  /**
  * The Azure DevOps Pipeline Service Connection ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#ado_pipeline_service_connection_id AzurermProvider#ado_pipeline_service_connection_id}
  */
  readonly adoPipelineServiceConnectionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#auxiliary_tenant_ids AzurermProvider#auxiliary_tenant_ids}
  */
  readonly auxiliaryTenantIds?: string[];
  /**
  * Base64 encoded PKCS#12 certificate bundle to use when authenticating as a Service Principal using a Client Certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#client_certificate AzurermProvider#client_certificate}
  */
  readonly clientCertificate?: string;
  /**
  * The password associated with the Client Certificate. For use when authenticating as a Service Principal using a Client Certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#client_certificate_password AzurermProvider#client_certificate_password}
  */
  readonly clientCertificatePassword?: string;
  /**
  * The path to the Client Certificate associated with the Service Principal for use when authenticating as a Service Principal using a Client Certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#client_certificate_path AzurermProvider#client_certificate_path}
  */
  readonly clientCertificatePath?: string;
  /**
  * The Client ID which should be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#client_id AzurermProvider#client_id}
  */
  readonly clientId?: string;
  /**
  * The path to a file containing the Client ID which should be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#client_id_file_path AzurermProvider#client_id_file_path}
  */
  readonly clientIdFilePath?: string;
  /**
  * The Client Secret which should be used. For use When authenticating as a Service Principal using a Client Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#client_secret AzurermProvider#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * The path to a file containing the Client Secret which should be used. For use When authenticating as a Service Principal using a Client Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#client_secret_file_path AzurermProvider#client_secret_file_path}
  */
  readonly clientSecretFilePath?: string;
  /**
  * This will disable the x-ms-correlation-request-id header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#disable_correlation_request_id AzurermProvider#disable_correlation_request_id}
  */
  readonly disableCorrelationRequestId?: boolean | cdktn.IResolvable;
  /**
  * This will disable the Terraform Partner ID which is used if a custom `partner_id` isn't specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#disable_terraform_partner_id AzurermProvider#disable_terraform_partner_id}
  */
  readonly disableTerraformPartnerId?: boolean | cdktn.IResolvable;
  /**
  * The Cloud Environment which should be used. Possible values are public, usgovernment, and china. Defaults to public. Not used and should not be specified when `metadata_host` is specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#environment AzurermProvider#environment}
  */
  readonly environment?: string;
  /**
  * The Hostname which should be used for the Azure Metadata Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#metadata_host AzurermProvider#metadata_host}
  */
  readonly metadataHost?: string;
  /**
  * The API version to use for Managed Service Identity (IMDS) - for cases where the default API version is not supported by the endpoint. e.g. for Azure Container Apps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#msi_api_version AzurermProvider#msi_api_version}
  */
  readonly msiApiVersion?: string;
  /**
  * The path to a custom endpoint for Managed Service Identity - in most circumstances this should be detected automatically.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#msi_endpoint AzurermProvider#msi_endpoint}
  */
  readonly msiEndpoint?: string;
  /**
  * The bearer token for the request to the OIDC provider. For use when authenticating as a Service Principal using OpenID Connect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#oidc_request_token AzurermProvider#oidc_request_token}
  */
  readonly oidcRequestToken?: string;
  /**
  * The URL for the OIDC provider from which to request an ID token. For use when authenticating as a Service Principal using OpenID Connect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#oidc_request_url AzurermProvider#oidc_request_url}
  */
  readonly oidcRequestUrl?: string;
  /**
  * The OIDC ID token for use when authenticating as a Service Principal using OpenID Connect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#oidc_token AzurermProvider#oidc_token}
  */
  readonly oidcToken?: string;
  /**
  * The path to a file containing an OIDC ID token for use when authenticating as a Service Principal using OpenID Connect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#oidc_token_file_path AzurermProvider#oidc_token_file_path}
  */
  readonly oidcTokenFilePath?: string;
  /**
  * A GUID/UUID that is registered with Microsoft to facilitate partner resource usage attribution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#partner_id AzurermProvider#partner_id}
  */
  readonly partnerId?: string;
  /**
  * The set of Resource Providers which should be automatically registered for the subscription.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#resource_provider_registrations AzurermProvider#resource_provider_registrations}
  */
  readonly resourceProviderRegistrations?: string;
  /**
  * A list of Resource Providers to explicitly register for the subscription, in addition to those specified by the `resource_provider_registrations` property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#resource_providers_to_register AzurermProvider#resource_providers_to_register}
  */
  readonly resourceProvidersToRegister?: string[];
  /**
  * Should the AzureRM Provider skip registering all of the Resource Providers that it supports, if they're not already registered?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#skip_provider_registration AzurermProvider#skip_provider_registration}
  */
  readonly skipProviderRegistration?: boolean | cdktn.IResolvable;
  /**
  * Should the AzureRM Provider use Azure AD Authentication when accessing the Storage Data Plane APIs?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#storage_use_azuread AzurermProvider#storage_use_azuread}
  */
  readonly storageUseAzuread?: boolean | cdktn.IResolvable;
  /**
  * The Subscription ID which should be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#subscription_id AzurermProvider#subscription_id}
  */
  readonly subscriptionId?: string;
  /**
  * The Tenant ID which should be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#tenant_id AzurermProvider#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * Allow Azure AKS Workload Identity to be used for Authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#use_aks_workload_identity AzurermProvider#use_aks_workload_identity}
  */
  readonly useAksWorkloadIdentity?: boolean | cdktn.IResolvable;
  /**
  * Allow Azure CLI to be used for Authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#use_cli AzurermProvider#use_cli}
  */
  readonly useCli?: boolean | cdktn.IResolvable;
  /**
  * Allow Managed Service Identity to be used for Authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#use_msi AzurermProvider#use_msi}
  */
  readonly useMsi?: boolean | cdktn.IResolvable;
  /**
  * Allow OpenID Connect to be used for authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#use_oidc AzurermProvider#use_oidc}
  */
  readonly useOidc?: boolean | cdktn.IResolvable;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#alias AzurermProvider#alias}
  */
  readonly alias?: string;
  /**
  * enhanced_validation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#enhanced_validation AzurermProvider#enhanced_validation}
  */
  readonly enhancedValidation?: AzurermProviderEnhancedValidation[] | cdktn.IResolvable;
  /**
  * features block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#features AzurermProvider#features}
  */
  readonly features?: AzurermProviderFeatures[] | cdktn.IResolvable;
}
export interface AzurermProviderEnhancedValidation {
  /**
  * Should the AzureRM Provider validate location arguments against the list of supported Azure Locations? When enabled, invalid locations are caught at plan time; when disabled, they are caught at apply time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#locations AzurermProvider#locations}
  */
  readonly locations?: boolean | cdktn.IResolvable;
  /**
  * Should the AzureRM Provider validate Resource Provider arguments against the list of supported Resource Providers? When enabled, invalid resource providers are caught at plan time; when disabled, they are caught at apply time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#resource_providers AzurermProvider#resource_providers}
  */
  readonly resourceProviders?: boolean | cdktn.IResolvable;
}

export function azurermProviderEnhancedValidationToTerraform(struct?: AzurermProviderEnhancedValidation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    locations: cdktn.booleanToTerraform(struct!.locations),
    resource_providers: cdktn.booleanToTerraform(struct!.resourceProviders),
  }
}


export function azurermProviderEnhancedValidationToHclTerraform(struct?: AzurermProviderEnhancedValidation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    locations: {
      value: cdktn.booleanToHclTerraform(struct!.locations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    resource_providers: {
      value: cdktn.booleanToHclTerraform(struct!.resourceProviders),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface AzurermProviderFeaturesApiManagement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#purge_soft_delete_on_destroy AzurermProvider#purge_soft_delete_on_destroy}
  */
  readonly purgeSoftDeleteOnDestroy?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#recover_soft_deleted AzurermProvider#recover_soft_deleted}
  */
  readonly recoverSoftDeleted?: boolean | cdktn.IResolvable;
}

export function azurermProviderFeaturesApiManagementToTerraform(struct?: AzurermProviderFeaturesApiManagement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    purge_soft_delete_on_destroy: cdktn.booleanToTerraform(struct!.purgeSoftDeleteOnDestroy),
    recover_soft_deleted: cdktn.booleanToTerraform(struct!.recoverSoftDeleted),
  }
}


export function azurermProviderFeaturesApiManagementToHclTerraform(struct?: AzurermProviderFeaturesApiManagement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    purge_soft_delete_on_destroy: {
      value: cdktn.booleanToHclTerraform(struct!.purgeSoftDeleteOnDestroy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    recover_soft_deleted: {
      value: cdktn.booleanToHclTerraform(struct!.recoverSoftDeleted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface AzurermProviderFeaturesAppConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#purge_soft_delete_on_destroy AzurermProvider#purge_soft_delete_on_destroy}
  */
  readonly purgeSoftDeleteOnDestroy?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#recover_soft_deleted AzurermProvider#recover_soft_deleted}
  */
  readonly recoverSoftDeleted?: boolean | cdktn.IResolvable;
}

export function azurermProviderFeaturesAppConfigurationToTerraform(struct?: AzurermProviderFeaturesAppConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    purge_soft_delete_on_destroy: cdktn.booleanToTerraform(struct!.purgeSoftDeleteOnDestroy),
    recover_soft_deleted: cdktn.booleanToTerraform(struct!.recoverSoftDeleted),
  }
}


export function azurermProviderFeaturesAppConfigurationToHclTerraform(struct?: AzurermProviderFeaturesAppConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    purge_soft_delete_on_destroy: {
      value: cdktn.booleanToHclTerraform(struct!.purgeSoftDeleteOnDestroy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    recover_soft_deleted: {
      value: cdktn.booleanToHclTerraform(struct!.recoverSoftDeleted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface AzurermProviderFeaturesApplicationInsights {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#disable_generated_rule AzurermProvider#disable_generated_rule}
  */
  readonly disableGeneratedRule?: boolean | cdktn.IResolvable;
}

export function azurermProviderFeaturesApplicationInsightsToTerraform(struct?: AzurermProviderFeaturesApplicationInsights | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    disable_generated_rule: cdktn.booleanToTerraform(struct!.disableGeneratedRule),
  }
}


export function azurermProviderFeaturesApplicationInsightsToHclTerraform(struct?: AzurermProviderFeaturesApplicationInsights | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    disable_generated_rule: {
      value: cdktn.booleanToHclTerraform(struct!.disableGeneratedRule),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface AzurermProviderFeaturesCognitiveAccount {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#purge_soft_delete_on_destroy AzurermProvider#purge_soft_delete_on_destroy}
  */
  readonly purgeSoftDeleteOnDestroy?: boolean | cdktn.IResolvable;
}

export function azurermProviderFeaturesCognitiveAccountToTerraform(struct?: AzurermProviderFeaturesCognitiveAccount | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    purge_soft_delete_on_destroy: cdktn.booleanToTerraform(struct!.purgeSoftDeleteOnDestroy),
  }
}


export function azurermProviderFeaturesCognitiveAccountToHclTerraform(struct?: AzurermProviderFeaturesCognitiveAccount | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    purge_soft_delete_on_destroy: {
      value: cdktn.booleanToHclTerraform(struct!.purgeSoftDeleteOnDestroy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface AzurermProviderFeaturesDatabricksWorkspace {
  /**
  * When enabled, the managed resource group that contains the Unity Catalog data will be forcibly deleted when the workspace is destroyed, regardless of contents.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#force_delete AzurermProvider#force_delete}
  */
  readonly forceDelete?: boolean | cdktn.IResolvable;
}

export function azurermProviderFeaturesDatabricksWorkspaceToTerraform(struct?: AzurermProviderFeaturesDatabricksWorkspace | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    force_delete: cdktn.booleanToTerraform(struct!.forceDelete),
  }
}


export function azurermProviderFeaturesDatabricksWorkspaceToHclTerraform(struct?: AzurermProviderFeaturesDatabricksWorkspace | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    force_delete: {
      value: cdktn.booleanToHclTerraform(struct!.forceDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface AzurermProviderFeaturesKeyVault {
  /**
  * When enabled soft-deleted `azurerm_key_vault` resources will be permanently deleted (e.g purged), when destroyed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#purge_soft_delete_on_destroy AzurermProvider#purge_soft_delete_on_destroy}
  */
  readonly purgeSoftDeleteOnDestroy?: boolean | cdktn.IResolvable;
  /**
  * When enabled soft-deleted `azurerm_key_vault_certificate` resources will be permanently deleted (e.g purged), when destroyed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#purge_soft_deleted_certificates_on_destroy AzurermProvider#purge_soft_deleted_certificates_on_destroy}
  */
  readonly purgeSoftDeletedCertificatesOnDestroy?: boolean | cdktn.IResolvable;
  /**
  * When enabled soft-deleted `azurerm_key_vault_managed_hardware_security_module_key` resources will be permanently deleted (e.g purged), when destroyed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#purge_soft_deleted_hardware_security_module_keys_on_destroy AzurermProvider#purge_soft_deleted_hardware_security_module_keys_on_destroy}
  */
  readonly purgeSoftDeletedHardwareSecurityModuleKeysOnDestroy?: boolean | cdktn.IResolvable;
  /**
  * When enabled soft-deleted `azurerm_key_vault_managed_hardware_security_module` resources will be permanently deleted (e.g purged), when destroyed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#purge_soft_deleted_hardware_security_modules_on_destroy AzurermProvider#purge_soft_deleted_hardware_security_modules_on_destroy}
  */
  readonly purgeSoftDeletedHardwareSecurityModulesOnDestroy?: boolean | cdktn.IResolvable;
  /**
  * When enabled soft-deleted `azurerm_key_vault_key` resources will be permanently deleted (e.g purged), when destroyed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#purge_soft_deleted_keys_on_destroy AzurermProvider#purge_soft_deleted_keys_on_destroy}
  */
  readonly purgeSoftDeletedKeysOnDestroy?: boolean | cdktn.IResolvable;
  /**
  * When enabled soft-deleted `azurerm_key_vault_secret` resources will be permanently deleted (e.g purged), when destroyed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#purge_soft_deleted_secrets_on_destroy AzurermProvider#purge_soft_deleted_secrets_on_destroy}
  */
  readonly purgeSoftDeletedSecretsOnDestroy?: boolean | cdktn.IResolvable;
  /**
  * When enabled soft-deleted `azurerm_key_vault_certificate` resources will be restored, instead of creating new ones
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#recover_soft_deleted_certificates AzurermProvider#recover_soft_deleted_certificates}
  */
  readonly recoverSoftDeletedCertificates?: boolean | cdktn.IResolvable;
  /**
  * When enabled soft-deleted `azurerm_key_vault_managed_hardware_security_module_key` resources will be restored, instead of creating new ones
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#recover_soft_deleted_hardware_security_module_keys AzurermProvider#recover_soft_deleted_hardware_security_module_keys}
  */
  readonly recoverSoftDeletedHardwareSecurityModuleKeys?: boolean | cdktn.IResolvable;
  /**
  * When enabled soft-deleted `azurerm_key_vault` resources will be restored, instead of creating new ones
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#recover_soft_deleted_key_vaults AzurermProvider#recover_soft_deleted_key_vaults}
  */
  readonly recoverSoftDeletedKeyVaults?: boolean | cdktn.IResolvable;
  /**
  * When enabled soft-deleted `azurerm_key_vault_key` resources will be restored, instead of creating new ones
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#recover_soft_deleted_keys AzurermProvider#recover_soft_deleted_keys}
  */
  readonly recoverSoftDeletedKeys?: boolean | cdktn.IResolvable;
  /**
  * When enabled soft-deleted `azurerm_key_vault_secret` resources will be restored, instead of creating new ones
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#recover_soft_deleted_secrets AzurermProvider#recover_soft_deleted_secrets}
  */
  readonly recoverSoftDeletedSecrets?: boolean | cdktn.IResolvable;
}

export function azurermProviderFeaturesKeyVaultToTerraform(struct?: AzurermProviderFeaturesKeyVault | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    purge_soft_delete_on_destroy: cdktn.booleanToTerraform(struct!.purgeSoftDeleteOnDestroy),
    purge_soft_deleted_certificates_on_destroy: cdktn.booleanToTerraform(struct!.purgeSoftDeletedCertificatesOnDestroy),
    purge_soft_deleted_hardware_security_module_keys_on_destroy: cdktn.booleanToTerraform(struct!.purgeSoftDeletedHardwareSecurityModuleKeysOnDestroy),
    purge_soft_deleted_hardware_security_modules_on_destroy: cdktn.booleanToTerraform(struct!.purgeSoftDeletedHardwareSecurityModulesOnDestroy),
    purge_soft_deleted_keys_on_destroy: cdktn.booleanToTerraform(struct!.purgeSoftDeletedKeysOnDestroy),
    purge_soft_deleted_secrets_on_destroy: cdktn.booleanToTerraform(struct!.purgeSoftDeletedSecretsOnDestroy),
    recover_soft_deleted_certificates: cdktn.booleanToTerraform(struct!.recoverSoftDeletedCertificates),
    recover_soft_deleted_hardware_security_module_keys: cdktn.booleanToTerraform(struct!.recoverSoftDeletedHardwareSecurityModuleKeys),
    recover_soft_deleted_key_vaults: cdktn.booleanToTerraform(struct!.recoverSoftDeletedKeyVaults),
    recover_soft_deleted_keys: cdktn.booleanToTerraform(struct!.recoverSoftDeletedKeys),
    recover_soft_deleted_secrets: cdktn.booleanToTerraform(struct!.recoverSoftDeletedSecrets),
  }
}


export function azurermProviderFeaturesKeyVaultToHclTerraform(struct?: AzurermProviderFeaturesKeyVault | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    purge_soft_delete_on_destroy: {
      value: cdktn.booleanToHclTerraform(struct!.purgeSoftDeleteOnDestroy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    purge_soft_deleted_certificates_on_destroy: {
      value: cdktn.booleanToHclTerraform(struct!.purgeSoftDeletedCertificatesOnDestroy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    purge_soft_deleted_hardware_security_module_keys_on_destroy: {
      value: cdktn.booleanToHclTerraform(struct!.purgeSoftDeletedHardwareSecurityModuleKeysOnDestroy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    purge_soft_deleted_hardware_security_modules_on_destroy: {
      value: cdktn.booleanToHclTerraform(struct!.purgeSoftDeletedHardwareSecurityModulesOnDestroy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    purge_soft_deleted_keys_on_destroy: {
      value: cdktn.booleanToHclTerraform(struct!.purgeSoftDeletedKeysOnDestroy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    purge_soft_deleted_secrets_on_destroy: {
      value: cdktn.booleanToHclTerraform(struct!.purgeSoftDeletedSecretsOnDestroy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    recover_soft_deleted_certificates: {
      value: cdktn.booleanToHclTerraform(struct!.recoverSoftDeletedCertificates),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    recover_soft_deleted_hardware_security_module_keys: {
      value: cdktn.booleanToHclTerraform(struct!.recoverSoftDeletedHardwareSecurityModuleKeys),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    recover_soft_deleted_key_vaults: {
      value: cdktn.booleanToHclTerraform(struct!.recoverSoftDeletedKeyVaults),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    recover_soft_deleted_keys: {
      value: cdktn.booleanToHclTerraform(struct!.recoverSoftDeletedKeys),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    recover_soft_deleted_secrets: {
      value: cdktn.booleanToHclTerraform(struct!.recoverSoftDeletedSecrets),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface AzurermProviderFeaturesLogAnalyticsWorkspace {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#permanently_delete_on_destroy AzurermProvider#permanently_delete_on_destroy}
  */
  readonly permanentlyDeleteOnDestroy?: boolean | cdktn.IResolvable;
}

export function azurermProviderFeaturesLogAnalyticsWorkspaceToTerraform(struct?: AzurermProviderFeaturesLogAnalyticsWorkspace | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    permanently_delete_on_destroy: cdktn.booleanToTerraform(struct!.permanentlyDeleteOnDestroy),
  }
}


export function azurermProviderFeaturesLogAnalyticsWorkspaceToHclTerraform(struct?: AzurermProviderFeaturesLogAnalyticsWorkspace | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    permanently_delete_on_destroy: {
      value: cdktn.booleanToHclTerraform(struct!.permanentlyDeleteOnDestroy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface AzurermProviderFeaturesMachineLearning {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#purge_soft_deleted_workspace_on_destroy AzurermProvider#purge_soft_deleted_workspace_on_destroy}
  */
  readonly purgeSoftDeletedWorkspaceOnDestroy?: boolean | cdktn.IResolvable;
}

export function azurermProviderFeaturesMachineLearningToTerraform(struct?: AzurermProviderFeaturesMachineLearning | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    purge_soft_deleted_workspace_on_destroy: cdktn.booleanToTerraform(struct!.purgeSoftDeletedWorkspaceOnDestroy),
  }
}


export function azurermProviderFeaturesMachineLearningToHclTerraform(struct?: AzurermProviderFeaturesMachineLearning | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    purge_soft_deleted_workspace_on_destroy: {
      value: cdktn.booleanToHclTerraform(struct!.purgeSoftDeletedWorkspaceOnDestroy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface AzurermProviderFeaturesManagedDisk {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#expand_without_downtime AzurermProvider#expand_without_downtime}
  */
  readonly expandWithoutDowntime?: boolean | cdktn.IResolvable;
}

export function azurermProviderFeaturesManagedDiskToTerraform(struct?: AzurermProviderFeaturesManagedDisk | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    expand_without_downtime: cdktn.booleanToTerraform(struct!.expandWithoutDowntime),
  }
}


export function azurermProviderFeaturesManagedDiskToHclTerraform(struct?: AzurermProviderFeaturesManagedDisk | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    expand_without_downtime: {
      value: cdktn.booleanToHclTerraform(struct!.expandWithoutDowntime),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface AzurermProviderFeaturesNetapp {
  /**
  * When enabled, backups will be deleted when the `azurerm_netapp_backup_vault` resource is destroyed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#delete_backups_on_backup_vault_destroy AzurermProvider#delete_backups_on_backup_vault_destroy}
  */
  readonly deleteBackupsOnBackupVaultDestroy?: boolean | cdktn.IResolvable;
  /**
  * When enabled, the volume will not be destroyed, safeguarding from severe data loss
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#prevent_volume_destruction AzurermProvider#prevent_volume_destruction}
  */
  readonly preventVolumeDestruction?: boolean | cdktn.IResolvable;
}

export function azurermProviderFeaturesNetappToTerraform(struct?: AzurermProviderFeaturesNetapp | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    delete_backups_on_backup_vault_destroy: cdktn.booleanToTerraform(struct!.deleteBackupsOnBackupVaultDestroy),
    prevent_volume_destruction: cdktn.booleanToTerraform(struct!.preventVolumeDestruction),
  }
}


export function azurermProviderFeaturesNetappToHclTerraform(struct?: AzurermProviderFeaturesNetapp | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    delete_backups_on_backup_vault_destroy: {
      value: cdktn.booleanToHclTerraform(struct!.deleteBackupsOnBackupVaultDestroy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prevent_volume_destruction: {
      value: cdktn.booleanToHclTerraform(struct!.preventVolumeDestruction),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface AzurermProviderFeaturesPostgresqlFlexibleServer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#restart_server_on_configuration_value_change AzurermProvider#restart_server_on_configuration_value_change}
  */
  readonly restartServerOnConfigurationValueChange?: boolean | cdktn.IResolvable;
}

export function azurermProviderFeaturesPostgresqlFlexibleServerToTerraform(struct?: AzurermProviderFeaturesPostgresqlFlexibleServer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    restart_server_on_configuration_value_change: cdktn.booleanToTerraform(struct!.restartServerOnConfigurationValueChange),
  }
}


export function azurermProviderFeaturesPostgresqlFlexibleServerToHclTerraform(struct?: AzurermProviderFeaturesPostgresqlFlexibleServer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    restart_server_on_configuration_value_change: {
      value: cdktn.booleanToHclTerraform(struct!.restartServerOnConfigurationValueChange),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface AzurermProviderFeaturesRecoveryService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#purge_protected_items_from_vault_on_destroy AzurermProvider#purge_protected_items_from_vault_on_destroy}
  */
  readonly purgeProtectedItemsFromVaultOnDestroy?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#vm_backup_stop_protection_and_retain_data_on_destroy AzurermProvider#vm_backup_stop_protection_and_retain_data_on_destroy}
  */
  readonly vmBackupStopProtectionAndRetainDataOnDestroy?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#vm_backup_suspend_protection_and_retain_data_on_destroy AzurermProvider#vm_backup_suspend_protection_and_retain_data_on_destroy}
  */
  readonly vmBackupSuspendProtectionAndRetainDataOnDestroy?: boolean | cdktn.IResolvable;
}

export function azurermProviderFeaturesRecoveryServiceToTerraform(struct?: AzurermProviderFeaturesRecoveryService | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    purge_protected_items_from_vault_on_destroy: cdktn.booleanToTerraform(struct!.purgeProtectedItemsFromVaultOnDestroy),
    vm_backup_stop_protection_and_retain_data_on_destroy: cdktn.booleanToTerraform(struct!.vmBackupStopProtectionAndRetainDataOnDestroy),
    vm_backup_suspend_protection_and_retain_data_on_destroy: cdktn.booleanToTerraform(struct!.vmBackupSuspendProtectionAndRetainDataOnDestroy),
  }
}


export function azurermProviderFeaturesRecoveryServiceToHclTerraform(struct?: AzurermProviderFeaturesRecoveryService | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    purge_protected_items_from_vault_on_destroy: {
      value: cdktn.booleanToHclTerraform(struct!.purgeProtectedItemsFromVaultOnDestroy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vm_backup_stop_protection_and_retain_data_on_destroy: {
      value: cdktn.booleanToHclTerraform(struct!.vmBackupStopProtectionAndRetainDataOnDestroy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vm_backup_suspend_protection_and_retain_data_on_destroy: {
      value: cdktn.booleanToHclTerraform(struct!.vmBackupSuspendProtectionAndRetainDataOnDestroy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface AzurermProviderFeaturesRecoveryServicesVaults {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#recover_soft_deleted_backup_protected_vm AzurermProvider#recover_soft_deleted_backup_protected_vm}
  */
  readonly recoverSoftDeletedBackupProtectedVm?: boolean | cdktn.IResolvable;
}

export function azurermProviderFeaturesRecoveryServicesVaultsToTerraform(struct?: AzurermProviderFeaturesRecoveryServicesVaults | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    recover_soft_deleted_backup_protected_vm: cdktn.booleanToTerraform(struct!.recoverSoftDeletedBackupProtectedVm),
  }
}


export function azurermProviderFeaturesRecoveryServicesVaultsToHclTerraform(struct?: AzurermProviderFeaturesRecoveryServicesVaults | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    recover_soft_deleted_backup_protected_vm: {
      value: cdktn.booleanToHclTerraform(struct!.recoverSoftDeletedBackupProtectedVm),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface AzurermProviderFeaturesResourceGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#prevent_deletion_if_contains_resources AzurermProvider#prevent_deletion_if_contains_resources}
  */
  readonly preventDeletionIfContainsResources?: boolean | cdktn.IResolvable;
}

export function azurermProviderFeaturesResourceGroupToTerraform(struct?: AzurermProviderFeaturesResourceGroup | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    prevent_deletion_if_contains_resources: cdktn.booleanToTerraform(struct!.preventDeletionIfContainsResources),
  }
}


export function azurermProviderFeaturesResourceGroupToHclTerraform(struct?: AzurermProviderFeaturesResourceGroup | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    prevent_deletion_if_contains_resources: {
      value: cdktn.booleanToHclTerraform(struct!.preventDeletionIfContainsResources),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface AzurermProviderFeaturesStorage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#data_plane_available AzurermProvider#data_plane_available}
  */
  readonly dataPlaneAvailable?: boolean | cdktn.IResolvable;
}

export function azurermProviderFeaturesStorageToTerraform(struct?: AzurermProviderFeaturesStorage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_plane_available: cdktn.booleanToTerraform(struct!.dataPlaneAvailable),
  }
}


export function azurermProviderFeaturesStorageToHclTerraform(struct?: AzurermProviderFeaturesStorage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_plane_available: {
      value: cdktn.booleanToHclTerraform(struct!.dataPlaneAvailable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface AzurermProviderFeaturesSubscription {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#prevent_cancellation_on_destroy AzurermProvider#prevent_cancellation_on_destroy}
  */
  readonly preventCancellationOnDestroy?: boolean | cdktn.IResolvable;
}

export function azurermProviderFeaturesSubscriptionToTerraform(struct?: AzurermProviderFeaturesSubscription | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    prevent_cancellation_on_destroy: cdktn.booleanToTerraform(struct!.preventCancellationOnDestroy),
  }
}


export function azurermProviderFeaturesSubscriptionToHclTerraform(struct?: AzurermProviderFeaturesSubscription | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    prevent_cancellation_on_destroy: {
      value: cdktn.booleanToHclTerraform(struct!.preventCancellationOnDestroy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface AzurermProviderFeaturesTemplateDeployment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#delete_nested_items_during_deletion AzurermProvider#delete_nested_items_during_deletion}
  */
  readonly deleteNestedItemsDuringDeletion: boolean | cdktn.IResolvable;
}

export function azurermProviderFeaturesTemplateDeploymentToTerraform(struct?: AzurermProviderFeaturesTemplateDeployment | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    delete_nested_items_during_deletion: cdktn.booleanToTerraform(struct!.deleteNestedItemsDuringDeletion),
  }
}


export function azurermProviderFeaturesTemplateDeploymentToHclTerraform(struct?: AzurermProviderFeaturesTemplateDeployment | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    delete_nested_items_during_deletion: {
      value: cdktn.booleanToHclTerraform(struct!.deleteNestedItemsDuringDeletion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface AzurermProviderFeaturesVirtualMachine {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#delete_os_disk_on_deletion AzurermProvider#delete_os_disk_on_deletion}
  */
  readonly deleteOsDiskOnDeletion?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#detach_implicit_data_disk_on_deletion AzurermProvider#detach_implicit_data_disk_on_deletion}
  */
  readonly detachImplicitDataDiskOnDeletion?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#graceful_shutdown AzurermProvider#graceful_shutdown}
  */
  readonly gracefulShutdown?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#skip_shutdown_and_force_delete AzurermProvider#skip_shutdown_and_force_delete}
  */
  readonly skipShutdownAndForceDelete?: boolean | cdktn.IResolvable;
}

export function azurermProviderFeaturesVirtualMachineToTerraform(struct?: AzurermProviderFeaturesVirtualMachine | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    delete_os_disk_on_deletion: cdktn.booleanToTerraform(struct!.deleteOsDiskOnDeletion),
    detach_implicit_data_disk_on_deletion: cdktn.booleanToTerraform(struct!.detachImplicitDataDiskOnDeletion),
    graceful_shutdown: cdktn.booleanToTerraform(struct!.gracefulShutdown),
    skip_shutdown_and_force_delete: cdktn.booleanToTerraform(struct!.skipShutdownAndForceDelete),
  }
}


export function azurermProviderFeaturesVirtualMachineToHclTerraform(struct?: AzurermProviderFeaturesVirtualMachine | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    delete_os_disk_on_deletion: {
      value: cdktn.booleanToHclTerraform(struct!.deleteOsDiskOnDeletion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    detach_implicit_data_disk_on_deletion: {
      value: cdktn.booleanToHclTerraform(struct!.detachImplicitDataDiskOnDeletion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    graceful_shutdown: {
      value: cdktn.booleanToHclTerraform(struct!.gracefulShutdown),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    skip_shutdown_and_force_delete: {
      value: cdktn.booleanToHclTerraform(struct!.skipShutdownAndForceDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface AzurermProviderFeaturesVirtualMachineScaleSet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#force_delete AzurermProvider#force_delete}
  */
  readonly forceDelete?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#reimage_on_manual_upgrade AzurermProvider#reimage_on_manual_upgrade}
  */
  readonly reimageOnManualUpgrade?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#roll_instances_when_required AzurermProvider#roll_instances_when_required}
  */
  readonly rollInstancesWhenRequired?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#scale_to_zero_before_deletion AzurermProvider#scale_to_zero_before_deletion}
  */
  readonly scaleToZeroBeforeDeletion?: boolean | cdktn.IResolvable;
}

export function azurermProviderFeaturesVirtualMachineScaleSetToTerraform(struct?: AzurermProviderFeaturesVirtualMachineScaleSet | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    force_delete: cdktn.booleanToTerraform(struct!.forceDelete),
    reimage_on_manual_upgrade: cdktn.booleanToTerraform(struct!.reimageOnManualUpgrade),
    roll_instances_when_required: cdktn.booleanToTerraform(struct!.rollInstancesWhenRequired),
    scale_to_zero_before_deletion: cdktn.booleanToTerraform(struct!.scaleToZeroBeforeDeletion),
  }
}


export function azurermProviderFeaturesVirtualMachineScaleSetToHclTerraform(struct?: AzurermProviderFeaturesVirtualMachineScaleSet | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    force_delete: {
      value: cdktn.booleanToHclTerraform(struct!.forceDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    reimage_on_manual_upgrade: {
      value: cdktn.booleanToHclTerraform(struct!.reimageOnManualUpgrade),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    roll_instances_when_required: {
      value: cdktn.booleanToHclTerraform(struct!.rollInstancesWhenRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    scale_to_zero_before_deletion: {
      value: cdktn.booleanToHclTerraform(struct!.scaleToZeroBeforeDeletion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface AzurermProviderFeatures {
  /**
  * Whether to set the resource ID into state before polling asynchronous operations for completion. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#persist_id_on_create_before_polling_for_completion AzurermProvider#persist_id_on_create_before_polling_for_completion}
  */
  readonly persistIdOnCreateBeforePollingForCompletion?: boolean | cdktn.IResolvable;
  /**
  * Whether to skip the import check and allow the provider to overwrite existing remote resources if present. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#skip_import_check_on_create_and_allow_overwriting_existing_resources AzurermProvider#skip_import_check_on_create_and_allow_overwriting_existing_resources}
  */
  readonly skipImportCheckOnCreateAndAllowOverwritingExistingResources?: boolean | cdktn.IResolvable;
  /**
  * api_management block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#api_management AzurermProvider#api_management}
  */
  readonly apiManagement?: AzurermProviderFeaturesApiManagement[] | cdktn.IResolvable;
  /**
  * app_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#app_configuration AzurermProvider#app_configuration}
  */
  readonly appConfiguration?: AzurermProviderFeaturesAppConfiguration[] | cdktn.IResolvable;
  /**
  * application_insights block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#application_insights AzurermProvider#application_insights}
  */
  readonly applicationInsights?: AzurermProviderFeaturesApplicationInsights[] | cdktn.IResolvable;
  /**
  * cognitive_account block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#cognitive_account AzurermProvider#cognitive_account}
  */
  readonly cognitiveAccount?: AzurermProviderFeaturesCognitiveAccount[] | cdktn.IResolvable;
  /**
  * databricks_workspace block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#databricks_workspace AzurermProvider#databricks_workspace}
  */
  readonly databricksWorkspace?: AzurermProviderFeaturesDatabricksWorkspace[] | cdktn.IResolvable;
  /**
  * key_vault block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#key_vault AzurermProvider#key_vault}
  */
  readonly keyVault?: AzurermProviderFeaturesKeyVault[] | cdktn.IResolvable;
  /**
  * log_analytics_workspace block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#log_analytics_workspace AzurermProvider#log_analytics_workspace}
  */
  readonly logAnalyticsWorkspace?: AzurermProviderFeaturesLogAnalyticsWorkspace[] | cdktn.IResolvable;
  /**
  * machine_learning block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#machine_learning AzurermProvider#machine_learning}
  */
  readonly machineLearning?: AzurermProviderFeaturesMachineLearning[] | cdktn.IResolvable;
  /**
  * managed_disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#managed_disk AzurermProvider#managed_disk}
  */
  readonly managedDisk?: AzurermProviderFeaturesManagedDisk[] | cdktn.IResolvable;
  /**
  * netapp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#netapp AzurermProvider#netapp}
  */
  readonly netapp?: AzurermProviderFeaturesNetapp[] | cdktn.IResolvable;
  /**
  * postgresql_flexible_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#postgresql_flexible_server AzurermProvider#postgresql_flexible_server}
  */
  readonly postgresqlFlexibleServer?: AzurermProviderFeaturesPostgresqlFlexibleServer[] | cdktn.IResolvable;
  /**
  * recovery_service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#recovery_service AzurermProvider#recovery_service}
  */
  readonly recoveryService?: AzurermProviderFeaturesRecoveryService[] | cdktn.IResolvable;
  /**
  * recovery_services_vaults block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#recovery_services_vaults AzurermProvider#recovery_services_vaults}
  */
  readonly recoveryServicesVaults?: AzurermProviderFeaturesRecoveryServicesVaults[] | cdktn.IResolvable;
  /**
  * resource_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#resource_group AzurermProvider#resource_group}
  */
  readonly resourceGroup?: AzurermProviderFeaturesResourceGroup[] | cdktn.IResolvable;
  /**
  * storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#storage AzurermProvider#storage}
  */
  readonly storage?: AzurermProviderFeaturesStorage[] | cdktn.IResolvable;
  /**
  * subscription block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#subscription AzurermProvider#subscription}
  */
  readonly subscription?: AzurermProviderFeaturesSubscription[] | cdktn.IResolvable;
  /**
  * template_deployment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#template_deployment AzurermProvider#template_deployment}
  */
  readonly templateDeployment?: AzurermProviderFeaturesTemplateDeployment[] | cdktn.IResolvable;
  /**
  * virtual_machine block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#virtual_machine AzurermProvider#virtual_machine}
  */
  readonly virtualMachine?: AzurermProviderFeaturesVirtualMachine[] | cdktn.IResolvable;
  /**
  * virtual_machine_scale_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#virtual_machine_scale_set AzurermProvider#virtual_machine_scale_set}
  */
  readonly virtualMachineScaleSet?: AzurermProviderFeaturesVirtualMachineScaleSet[] | cdktn.IResolvable;
}

export function azurermProviderFeaturesToTerraform(struct?: AzurermProviderFeatures | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    persist_id_on_create_before_polling_for_completion: cdktn.booleanToTerraform(struct!.persistIdOnCreateBeforePollingForCompletion),
    skip_import_check_on_create_and_allow_overwriting_existing_resources: cdktn.booleanToTerraform(struct!.skipImportCheckOnCreateAndAllowOverwritingExistingResources),
    api_management: cdktn.listMapper(azurermProviderFeaturesApiManagementToTerraform, true)(struct!.apiManagement),
    app_configuration: cdktn.listMapper(azurermProviderFeaturesAppConfigurationToTerraform, true)(struct!.appConfiguration),
    application_insights: cdktn.listMapper(azurermProviderFeaturesApplicationInsightsToTerraform, true)(struct!.applicationInsights),
    cognitive_account: cdktn.listMapper(azurermProviderFeaturesCognitiveAccountToTerraform, true)(struct!.cognitiveAccount),
    databricks_workspace: cdktn.listMapper(azurermProviderFeaturesDatabricksWorkspaceToTerraform, true)(struct!.databricksWorkspace),
    key_vault: cdktn.listMapper(azurermProviderFeaturesKeyVaultToTerraform, true)(struct!.keyVault),
    log_analytics_workspace: cdktn.listMapper(azurermProviderFeaturesLogAnalyticsWorkspaceToTerraform, true)(struct!.logAnalyticsWorkspace),
    machine_learning: cdktn.listMapper(azurermProviderFeaturesMachineLearningToTerraform, true)(struct!.machineLearning),
    managed_disk: cdktn.listMapper(azurermProviderFeaturesManagedDiskToTerraform, true)(struct!.managedDisk),
    netapp: cdktn.listMapper(azurermProviderFeaturesNetappToTerraform, true)(struct!.netapp),
    postgresql_flexible_server: cdktn.listMapper(azurermProviderFeaturesPostgresqlFlexibleServerToTerraform, true)(struct!.postgresqlFlexibleServer),
    recovery_service: cdktn.listMapper(azurermProviderFeaturesRecoveryServiceToTerraform, true)(struct!.recoveryService),
    recovery_services_vaults: cdktn.listMapper(azurermProviderFeaturesRecoveryServicesVaultsToTerraform, true)(struct!.recoveryServicesVaults),
    resource_group: cdktn.listMapper(azurermProviderFeaturesResourceGroupToTerraform, true)(struct!.resourceGroup),
    storage: cdktn.listMapper(azurermProviderFeaturesStorageToTerraform, true)(struct!.storage),
    subscription: cdktn.listMapper(azurermProviderFeaturesSubscriptionToTerraform, true)(struct!.subscription),
    template_deployment: cdktn.listMapper(azurermProviderFeaturesTemplateDeploymentToTerraform, true)(struct!.templateDeployment),
    virtual_machine: cdktn.listMapper(azurermProviderFeaturesVirtualMachineToTerraform, true)(struct!.virtualMachine),
    virtual_machine_scale_set: cdktn.listMapper(azurermProviderFeaturesVirtualMachineScaleSetToTerraform, true)(struct!.virtualMachineScaleSet),
  }
}


export function azurermProviderFeaturesToHclTerraform(struct?: AzurermProviderFeatures | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    persist_id_on_create_before_polling_for_completion: {
      value: cdktn.booleanToHclTerraform(struct!.persistIdOnCreateBeforePollingForCompletion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    skip_import_check_on_create_and_allow_overwriting_existing_resources: {
      value: cdktn.booleanToHclTerraform(struct!.skipImportCheckOnCreateAndAllowOverwritingExistingResources),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    api_management: {
      value: cdktn.listMapperHcl(azurermProviderFeaturesApiManagementToHclTerraform, true)(struct!.apiManagement),
      isBlock: true,
      type: "list",
      storageClassType: "AzurermProviderFeaturesApiManagementList",
    },
    app_configuration: {
      value: cdktn.listMapperHcl(azurermProviderFeaturesAppConfigurationToHclTerraform, true)(struct!.appConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "AzurermProviderFeaturesAppConfigurationList",
    },
    application_insights: {
      value: cdktn.listMapperHcl(azurermProviderFeaturesApplicationInsightsToHclTerraform, true)(struct!.applicationInsights),
      isBlock: true,
      type: "list",
      storageClassType: "AzurermProviderFeaturesApplicationInsightsList",
    },
    cognitive_account: {
      value: cdktn.listMapperHcl(azurermProviderFeaturesCognitiveAccountToHclTerraform, true)(struct!.cognitiveAccount),
      isBlock: true,
      type: "list",
      storageClassType: "AzurermProviderFeaturesCognitiveAccountList",
    },
    databricks_workspace: {
      value: cdktn.listMapperHcl(azurermProviderFeaturesDatabricksWorkspaceToHclTerraform, true)(struct!.databricksWorkspace),
      isBlock: true,
      type: "list",
      storageClassType: "AzurermProviderFeaturesDatabricksWorkspaceList",
    },
    key_vault: {
      value: cdktn.listMapperHcl(azurermProviderFeaturesKeyVaultToHclTerraform, true)(struct!.keyVault),
      isBlock: true,
      type: "list",
      storageClassType: "AzurermProviderFeaturesKeyVaultList",
    },
    log_analytics_workspace: {
      value: cdktn.listMapperHcl(azurermProviderFeaturesLogAnalyticsWorkspaceToHclTerraform, true)(struct!.logAnalyticsWorkspace),
      isBlock: true,
      type: "list",
      storageClassType: "AzurermProviderFeaturesLogAnalyticsWorkspaceList",
    },
    machine_learning: {
      value: cdktn.listMapperHcl(azurermProviderFeaturesMachineLearningToHclTerraform, true)(struct!.machineLearning),
      isBlock: true,
      type: "list",
      storageClassType: "AzurermProviderFeaturesMachineLearningList",
    },
    managed_disk: {
      value: cdktn.listMapperHcl(azurermProviderFeaturesManagedDiskToHclTerraform, true)(struct!.managedDisk),
      isBlock: true,
      type: "list",
      storageClassType: "AzurermProviderFeaturesManagedDiskList",
    },
    netapp: {
      value: cdktn.listMapperHcl(azurermProviderFeaturesNetappToHclTerraform, true)(struct!.netapp),
      isBlock: true,
      type: "list",
      storageClassType: "AzurermProviderFeaturesNetappList",
    },
    postgresql_flexible_server: {
      value: cdktn.listMapperHcl(azurermProviderFeaturesPostgresqlFlexibleServerToHclTerraform, true)(struct!.postgresqlFlexibleServer),
      isBlock: true,
      type: "list",
      storageClassType: "AzurermProviderFeaturesPostgresqlFlexibleServerList",
    },
    recovery_service: {
      value: cdktn.listMapperHcl(azurermProviderFeaturesRecoveryServiceToHclTerraform, true)(struct!.recoveryService),
      isBlock: true,
      type: "list",
      storageClassType: "AzurermProviderFeaturesRecoveryServiceList",
    },
    recovery_services_vaults: {
      value: cdktn.listMapperHcl(azurermProviderFeaturesRecoveryServicesVaultsToHclTerraform, true)(struct!.recoveryServicesVaults),
      isBlock: true,
      type: "list",
      storageClassType: "AzurermProviderFeaturesRecoveryServicesVaultsList",
    },
    resource_group: {
      value: cdktn.listMapperHcl(azurermProviderFeaturesResourceGroupToHclTerraform, true)(struct!.resourceGroup),
      isBlock: true,
      type: "list",
      storageClassType: "AzurermProviderFeaturesResourceGroupList",
    },
    storage: {
      value: cdktn.listMapperHcl(azurermProviderFeaturesStorageToHclTerraform, true)(struct!.storage),
      isBlock: true,
      type: "list",
      storageClassType: "AzurermProviderFeaturesStorageList",
    },
    subscription: {
      value: cdktn.listMapperHcl(azurermProviderFeaturesSubscriptionToHclTerraform, true)(struct!.subscription),
      isBlock: true,
      type: "list",
      storageClassType: "AzurermProviderFeaturesSubscriptionList",
    },
    template_deployment: {
      value: cdktn.listMapperHcl(azurermProviderFeaturesTemplateDeploymentToHclTerraform, true)(struct!.templateDeployment),
      isBlock: true,
      type: "list",
      storageClassType: "AzurermProviderFeaturesTemplateDeploymentList",
    },
    virtual_machine: {
      value: cdktn.listMapperHcl(azurermProviderFeaturesVirtualMachineToHclTerraform, true)(struct!.virtualMachine),
      isBlock: true,
      type: "list",
      storageClassType: "AzurermProviderFeaturesVirtualMachineList",
    },
    virtual_machine_scale_set: {
      value: cdktn.listMapperHcl(azurermProviderFeaturesVirtualMachineScaleSetToHclTerraform, true)(struct!.virtualMachineScaleSet),
      isBlock: true,
      type: "list",
      storageClassType: "AzurermProviderFeaturesVirtualMachineScaleSetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs azurerm}
*/
export class AzurermProvider extends cdktn.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AzurermProvider resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AzurermProvider to import
  * @param importFromId The id of the existing AzurermProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AzurermProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "azurerm", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs azurerm} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AzurermProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AzurermProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'azurerm',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.77.0',
        providerVersionConstraint: '~> 4.0'
      },
      terraformProviderSource: 'azurerm'
    });
    this._adoPipelineServiceConnectionId = config.adoPipelineServiceConnectionId;
    this._auxiliaryTenantIds = config.auxiliaryTenantIds;
    this._clientCertificate = config.clientCertificate;
    this._clientCertificatePassword = config.clientCertificatePassword;
    this._clientCertificatePath = config.clientCertificatePath;
    this._clientId = config.clientId;
    this._clientIdFilePath = config.clientIdFilePath;
    this._clientSecret = config.clientSecret;
    this._clientSecretFilePath = config.clientSecretFilePath;
    this._disableCorrelationRequestId = config.disableCorrelationRequestId;
    this._disableTerraformPartnerId = config.disableTerraformPartnerId;
    this._environment = config.environment;
    this._metadataHost = config.metadataHost;
    this._msiApiVersion = config.msiApiVersion;
    this._msiEndpoint = config.msiEndpoint;
    this._oidcRequestToken = config.oidcRequestToken;
    this._oidcRequestUrl = config.oidcRequestUrl;
    this._oidcToken = config.oidcToken;
    this._oidcTokenFilePath = config.oidcTokenFilePath;
    this._partnerId = config.partnerId;
    this._resourceProviderRegistrations = config.resourceProviderRegistrations;
    this._resourceProvidersToRegister = config.resourceProvidersToRegister;
    this._skipProviderRegistration = config.skipProviderRegistration;
    this._storageUseAzuread = config.storageUseAzuread;
    this._subscriptionId = config.subscriptionId;
    this._tenantId = config.tenantId;
    this._useAksWorkloadIdentity = config.useAksWorkloadIdentity;
    this._useCli = config.useCli;
    this._useMsi = config.useMsi;
    this._useOidc = config.useOidc;
    this._alias = config.alias;
    this._enhancedValidation = config.enhancedValidation;
    this._features = config.features;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ado_pipeline_service_connection_id - computed: false, optional: true, required: false
  private _adoPipelineServiceConnectionId?: string; 
  public get adoPipelineServiceConnectionId() {
    return this._adoPipelineServiceConnectionId;
  }
  public set adoPipelineServiceConnectionId(value: string | undefined) {
    this._adoPipelineServiceConnectionId = value;
  }
  public resetAdoPipelineServiceConnectionId() {
    this._adoPipelineServiceConnectionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adoPipelineServiceConnectionIdInput() {
    return this._adoPipelineServiceConnectionId;
  }

  // auxiliary_tenant_ids - computed: false, optional: true, required: false
  private _auxiliaryTenantIds?: string[]; 
  public get auxiliaryTenantIds() {
    return this._auxiliaryTenantIds;
  }
  public set auxiliaryTenantIds(value: string[] | undefined) {
    this._auxiliaryTenantIds = value;
  }
  public resetAuxiliaryTenantIds() {
    this._auxiliaryTenantIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auxiliaryTenantIdsInput() {
    return this._auxiliaryTenantIds;
  }

  // client_certificate - computed: false, optional: true, required: false
  private _clientCertificate?: string; 
  public get clientCertificate() {
    return this._clientCertificate;
  }
  public set clientCertificate(value: string | undefined) {
    this._clientCertificate = value;
  }
  public resetClientCertificate() {
    this._clientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateInput() {
    return this._clientCertificate;
  }

  // client_certificate_password - computed: false, optional: true, required: false
  private _clientCertificatePassword?: string; 
  public get clientCertificatePassword() {
    return this._clientCertificatePassword;
  }
  public set clientCertificatePassword(value: string | undefined) {
    this._clientCertificatePassword = value;
  }
  public resetClientCertificatePassword() {
    this._clientCertificatePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificatePasswordInput() {
    return this._clientCertificatePassword;
  }

  // client_certificate_path - computed: false, optional: true, required: false
  private _clientCertificatePath?: string; 
  public get clientCertificatePath() {
    return this._clientCertificatePath;
  }
  public set clientCertificatePath(value: string | undefined) {
    this._clientCertificatePath = value;
  }
  public resetClientCertificatePath() {
    this._clientCertificatePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificatePathInput() {
    return this._clientCertificatePath;
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this._clientId;
  }
  public set clientId(value: string | undefined) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_id_file_path - computed: false, optional: true, required: false
  private _clientIdFilePath?: string; 
  public get clientIdFilePath() {
    return this._clientIdFilePath;
  }
  public set clientIdFilePath(value: string | undefined) {
    this._clientIdFilePath = value;
  }
  public resetClientIdFilePath() {
    this._clientIdFilePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdFilePathInput() {
    return this._clientIdFilePath;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this._clientSecret;
  }
  public set clientSecret(value: string | undefined) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // client_secret_file_path - computed: false, optional: true, required: false
  private _clientSecretFilePath?: string; 
  public get clientSecretFilePath() {
    return this._clientSecretFilePath;
  }
  public set clientSecretFilePath(value: string | undefined) {
    this._clientSecretFilePath = value;
  }
  public resetClientSecretFilePath() {
    this._clientSecretFilePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretFilePathInput() {
    return this._clientSecretFilePath;
  }

  // disable_correlation_request_id - computed: false, optional: true, required: false
  private _disableCorrelationRequestId?: boolean | cdktn.IResolvable; 
  public get disableCorrelationRequestId() {
    return this._disableCorrelationRequestId;
  }
  public set disableCorrelationRequestId(value: boolean | cdktn.IResolvable | undefined) {
    this._disableCorrelationRequestId = value;
  }
  public resetDisableCorrelationRequestId() {
    this._disableCorrelationRequestId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableCorrelationRequestIdInput() {
    return this._disableCorrelationRequestId;
  }

  // disable_terraform_partner_id - computed: false, optional: true, required: false
  private _disableTerraformPartnerId?: boolean | cdktn.IResolvable; 
  public get disableTerraformPartnerId() {
    return this._disableTerraformPartnerId;
  }
  public set disableTerraformPartnerId(value: boolean | cdktn.IResolvable | undefined) {
    this._disableTerraformPartnerId = value;
  }
  public resetDisableTerraformPartnerId() {
    this._disableTerraformPartnerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableTerraformPartnerIdInput() {
    return this._disableTerraformPartnerId;
  }

  // environment - computed: false, optional: true, required: false
  private _environment?: string; 
  public get environment() {
    return this._environment;
  }
  public set environment(value: string | undefined) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // metadata_host - computed: false, optional: true, required: false
  private _metadataHost?: string; 
  public get metadataHost() {
    return this._metadataHost;
  }
  public set metadataHost(value: string | undefined) {
    this._metadataHost = value;
  }
  public resetMetadataHost() {
    this._metadataHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataHostInput() {
    return this._metadataHost;
  }

  // msi_api_version - computed: false, optional: true, required: false
  private _msiApiVersion?: string; 
  public get msiApiVersion() {
    return this._msiApiVersion;
  }
  public set msiApiVersion(value: string | undefined) {
    this._msiApiVersion = value;
  }
  public resetMsiApiVersion() {
    this._msiApiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msiApiVersionInput() {
    return this._msiApiVersion;
  }

  // msi_endpoint - computed: false, optional: true, required: false
  private _msiEndpoint?: string; 
  public get msiEndpoint() {
    return this._msiEndpoint;
  }
  public set msiEndpoint(value: string | undefined) {
    this._msiEndpoint = value;
  }
  public resetMsiEndpoint() {
    this._msiEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msiEndpointInput() {
    return this._msiEndpoint;
  }

  // oidc_request_token - computed: false, optional: true, required: false
  private _oidcRequestToken?: string; 
  public get oidcRequestToken() {
    return this._oidcRequestToken;
  }
  public set oidcRequestToken(value: string | undefined) {
    this._oidcRequestToken = value;
  }
  public resetOidcRequestToken() {
    this._oidcRequestToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcRequestTokenInput() {
    return this._oidcRequestToken;
  }

  // oidc_request_url - computed: false, optional: true, required: false
  private _oidcRequestUrl?: string; 
  public get oidcRequestUrl() {
    return this._oidcRequestUrl;
  }
  public set oidcRequestUrl(value: string | undefined) {
    this._oidcRequestUrl = value;
  }
  public resetOidcRequestUrl() {
    this._oidcRequestUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcRequestUrlInput() {
    return this._oidcRequestUrl;
  }

  // oidc_token - computed: false, optional: true, required: false
  private _oidcToken?: string; 
  public get oidcToken() {
    return this._oidcToken;
  }
  public set oidcToken(value: string | undefined) {
    this._oidcToken = value;
  }
  public resetOidcToken() {
    this._oidcToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcTokenInput() {
    return this._oidcToken;
  }

  // oidc_token_file_path - computed: false, optional: true, required: false
  private _oidcTokenFilePath?: string; 
  public get oidcTokenFilePath() {
    return this._oidcTokenFilePath;
  }
  public set oidcTokenFilePath(value: string | undefined) {
    this._oidcTokenFilePath = value;
  }
  public resetOidcTokenFilePath() {
    this._oidcTokenFilePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcTokenFilePathInput() {
    return this._oidcTokenFilePath;
  }

  // partner_id - computed: false, optional: true, required: false
  private _partnerId?: string; 
  public get partnerId() {
    return this._partnerId;
  }
  public set partnerId(value: string | undefined) {
    this._partnerId = value;
  }
  public resetPartnerId() {
    this._partnerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partnerIdInput() {
    return this._partnerId;
  }

  // resource_provider_registrations - computed: false, optional: true, required: false
  private _resourceProviderRegistrations?: string; 
  public get resourceProviderRegistrations() {
    return this._resourceProviderRegistrations;
  }
  public set resourceProviderRegistrations(value: string | undefined) {
    this._resourceProviderRegistrations = value;
  }
  public resetResourceProviderRegistrations() {
    this._resourceProviderRegistrations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceProviderRegistrationsInput() {
    return this._resourceProviderRegistrations;
  }

  // resource_providers_to_register - computed: false, optional: true, required: false
  private _resourceProvidersToRegister?: string[]; 
  public get resourceProvidersToRegister() {
    return this._resourceProvidersToRegister;
  }
  public set resourceProvidersToRegister(value: string[] | undefined) {
    this._resourceProvidersToRegister = value;
  }
  public resetResourceProvidersToRegister() {
    this._resourceProvidersToRegister = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceProvidersToRegisterInput() {
    return this._resourceProvidersToRegister;
  }

  // skip_provider_registration - computed: false, optional: true, required: false
  private _skipProviderRegistration?: boolean | cdktn.IResolvable; 
  public get skipProviderRegistration() {
    return this._skipProviderRegistration;
  }
  public set skipProviderRegistration(value: boolean | cdktn.IResolvable | undefined) {
    this._skipProviderRegistration = value;
  }
  public resetSkipProviderRegistration() {
    this._skipProviderRegistration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipProviderRegistrationInput() {
    return this._skipProviderRegistration;
  }

  // storage_use_azuread - computed: false, optional: true, required: false
  private _storageUseAzuread?: boolean | cdktn.IResolvable; 
  public get storageUseAzuread() {
    return this._storageUseAzuread;
  }
  public set storageUseAzuread(value: boolean | cdktn.IResolvable | undefined) {
    this._storageUseAzuread = value;
  }
  public resetStorageUseAzuread() {
    this._storageUseAzuread = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageUseAzureadInput() {
    return this._storageUseAzuread;
  }

  // subscription_id - computed: false, optional: true, required: false
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this._subscriptionId;
  }
  public set subscriptionId(value: string | undefined) {
    this._subscriptionId = value;
  }
  public resetSubscriptionId() {
    this._subscriptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }

  // tenant_id - computed: false, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this._tenantId;
  }
  public set tenantId(value: string | undefined) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // use_aks_workload_identity - computed: false, optional: true, required: false
  private _useAksWorkloadIdentity?: boolean | cdktn.IResolvable; 
  public get useAksWorkloadIdentity() {
    return this._useAksWorkloadIdentity;
  }
  public set useAksWorkloadIdentity(value: boolean | cdktn.IResolvable | undefined) {
    this._useAksWorkloadIdentity = value;
  }
  public resetUseAksWorkloadIdentity() {
    this._useAksWorkloadIdentity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useAksWorkloadIdentityInput() {
    return this._useAksWorkloadIdentity;
  }

  // use_cli - computed: false, optional: true, required: false
  private _useCli?: boolean | cdktn.IResolvable; 
  public get useCli() {
    return this._useCli;
  }
  public set useCli(value: boolean | cdktn.IResolvable | undefined) {
    this._useCli = value;
  }
  public resetUseCli() {
    this._useCli = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useCliInput() {
    return this._useCli;
  }

  // use_msi - computed: false, optional: true, required: false
  private _useMsi?: boolean | cdktn.IResolvable; 
  public get useMsi() {
    return this._useMsi;
  }
  public set useMsi(value: boolean | cdktn.IResolvable | undefined) {
    this._useMsi = value;
  }
  public resetUseMsi() {
    this._useMsi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMsiInput() {
    return this._useMsi;
  }

  // use_oidc - computed: false, optional: true, required: false
  private _useOidc?: boolean | cdktn.IResolvable; 
  public get useOidc() {
    return this._useOidc;
  }
  public set useOidc(value: boolean | cdktn.IResolvable | undefined) {
    this._useOidc = value;
  }
  public resetUseOidc() {
    this._useOidc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useOidcInput() {
    return this._useOidc;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // enhanced_validation - computed: false, optional: true, required: false
  private _enhancedValidation?: AzurermProviderEnhancedValidation[] | cdktn.IResolvable; 
  public get enhancedValidation() {
    return this._enhancedValidation;
  }
  public set enhancedValidation(value: AzurermProviderEnhancedValidation[] | cdktn.IResolvable | undefined) {
    this._enhancedValidation = value;
  }
  public resetEnhancedValidation() {
    this._enhancedValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enhancedValidationInput() {
    return this._enhancedValidation;
  }

  // features - computed: false, optional: true, required: false
  private _features?: AzurermProviderFeatures[] | cdktn.IResolvable; 
  public get features() {
    return this._features;
  }
  public set features(value: AzurermProviderFeatures[] | cdktn.IResolvable | undefined) {
    this._features = value;
  }
  public resetFeatures() {
    this._features = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featuresInput() {
    return this._features;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ado_pipeline_service_connection_id: cdktn.stringToTerraform(this._adoPipelineServiceConnectionId),
      auxiliary_tenant_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._auxiliaryTenantIds),
      client_certificate: cdktn.stringToTerraform(this._clientCertificate),
      client_certificate_password: cdktn.stringToTerraform(this._clientCertificatePassword),
      client_certificate_path: cdktn.stringToTerraform(this._clientCertificatePath),
      client_id: cdktn.stringToTerraform(this._clientId),
      client_id_file_path: cdktn.stringToTerraform(this._clientIdFilePath),
      client_secret: cdktn.stringToTerraform(this._clientSecret),
      client_secret_file_path: cdktn.stringToTerraform(this._clientSecretFilePath),
      disable_correlation_request_id: cdktn.booleanToTerraform(this._disableCorrelationRequestId),
      disable_terraform_partner_id: cdktn.booleanToTerraform(this._disableTerraformPartnerId),
      environment: cdktn.stringToTerraform(this._environment),
      metadata_host: cdktn.stringToTerraform(this._metadataHost),
      msi_api_version: cdktn.stringToTerraform(this._msiApiVersion),
      msi_endpoint: cdktn.stringToTerraform(this._msiEndpoint),
      oidc_request_token: cdktn.stringToTerraform(this._oidcRequestToken),
      oidc_request_url: cdktn.stringToTerraform(this._oidcRequestUrl),
      oidc_token: cdktn.stringToTerraform(this._oidcToken),
      oidc_token_file_path: cdktn.stringToTerraform(this._oidcTokenFilePath),
      partner_id: cdktn.stringToTerraform(this._partnerId),
      resource_provider_registrations: cdktn.stringToTerraform(this._resourceProviderRegistrations),
      resource_providers_to_register: cdktn.listMapper(cdktn.stringToTerraform, false)(this._resourceProvidersToRegister),
      skip_provider_registration: cdktn.booleanToTerraform(this._skipProviderRegistration),
      storage_use_azuread: cdktn.booleanToTerraform(this._storageUseAzuread),
      subscription_id: cdktn.stringToTerraform(this._subscriptionId),
      tenant_id: cdktn.stringToTerraform(this._tenantId),
      use_aks_workload_identity: cdktn.booleanToTerraform(this._useAksWorkloadIdentity),
      use_cli: cdktn.booleanToTerraform(this._useCli),
      use_msi: cdktn.booleanToTerraform(this._useMsi),
      use_oidc: cdktn.booleanToTerraform(this._useOidc),
      alias: cdktn.stringToTerraform(this._alias),
      enhanced_validation: cdktn.listMapper(azurermProviderEnhancedValidationToTerraform, true)(this._enhancedValidation),
      features: cdktn.listMapper(azurermProviderFeaturesToTerraform, true)(this._features),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ado_pipeline_service_connection_id: {
        value: cdktn.stringToHclTerraform(this._adoPipelineServiceConnectionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auxiliary_tenant_ids: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._auxiliaryTenantIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      client_certificate: {
        value: cdktn.stringToHclTerraform(this._clientCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_certificate_password: {
        value: cdktn.stringToHclTerraform(this._clientCertificatePassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_certificate_path: {
        value: cdktn.stringToHclTerraform(this._clientCertificatePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_id: {
        value: cdktn.stringToHclTerraform(this._clientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_id_file_path: {
        value: cdktn.stringToHclTerraform(this._clientIdFilePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_secret: {
        value: cdktn.stringToHclTerraform(this._clientSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_secret_file_path: {
        value: cdktn.stringToHclTerraform(this._clientSecretFilePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_correlation_request_id: {
        value: cdktn.booleanToHclTerraform(this._disableCorrelationRequestId),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_terraform_partner_id: {
        value: cdktn.booleanToHclTerraform(this._disableTerraformPartnerId),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      environment: {
        value: cdktn.stringToHclTerraform(this._environment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metadata_host: {
        value: cdktn.stringToHclTerraform(this._metadataHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      msi_api_version: {
        value: cdktn.stringToHclTerraform(this._msiApiVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      msi_endpoint: {
        value: cdktn.stringToHclTerraform(this._msiEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oidc_request_token: {
        value: cdktn.stringToHclTerraform(this._oidcRequestToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oidc_request_url: {
        value: cdktn.stringToHclTerraform(this._oidcRequestUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oidc_token: {
        value: cdktn.stringToHclTerraform(this._oidcToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oidc_token_file_path: {
        value: cdktn.stringToHclTerraform(this._oidcTokenFilePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      partner_id: {
        value: cdktn.stringToHclTerraform(this._partnerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_provider_registrations: {
        value: cdktn.stringToHclTerraform(this._resourceProviderRegistrations),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_providers_to_register: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._resourceProvidersToRegister),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      skip_provider_registration: {
        value: cdktn.booleanToHclTerraform(this._skipProviderRegistration),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      storage_use_azuread: {
        value: cdktn.booleanToHclTerraform(this._storageUseAzuread),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      subscription_id: {
        value: cdktn.stringToHclTerraform(this._subscriptionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_id: {
        value: cdktn.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_aks_workload_identity: {
        value: cdktn.booleanToHclTerraform(this._useAksWorkloadIdentity),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_cli: {
        value: cdktn.booleanToHclTerraform(this._useCli),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_msi: {
        value: cdktn.booleanToHclTerraform(this._useMsi),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_oidc: {
        value: cdktn.booleanToHclTerraform(this._useOidc),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      alias: {
        value: cdktn.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enhanced_validation: {
        value: cdktn.listMapperHcl(azurermProviderEnhancedValidationToHclTerraform, true)(this._enhancedValidation),
        isBlock: true,
        type: "list",
        storageClassType: "AzurermProviderEnhancedValidationList",
      },
      features: {
        value: cdktn.listMapperHcl(azurermProviderFeaturesToHclTerraform, true)(this._features),
        isBlock: true,
        type: "list",
        storageClassType: "AzurermProviderFeaturesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
