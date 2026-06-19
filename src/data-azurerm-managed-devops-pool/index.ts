/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/managed_devops_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAzurermManagedDevopsPoolConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/managed_devops_pool#id DataAzurermManagedDevopsPool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/managed_devops_pool#name DataAzurermManagedDevopsPool#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/managed_devops_pool#resource_group_name DataAzurermManagedDevopsPool#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/managed_devops_pool#timeouts DataAzurermManagedDevopsPool#timeouts}
  */
  readonly timeouts?: DataAzurermManagedDevopsPoolTimeouts;
}
export interface DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganization {
}

export function dataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationToTerraform(struct?: DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganization): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationToHclTerraform(struct?: DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganization): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // parallelism - computed: true, optional: false, required: false
  public get parallelism() {
    return this.getNumberAttribute('parallelism');
  }

  // projects - computed: true, optional: false, required: false
  public get projects() {
    return this.getListAttribute('projects');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference {
    return new DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount {
}

export function dataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountToTerraform(struct?: DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountToHclTerraform(struct?: DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // groups - computed: true, optional: false, required: false
  public get groups() {
    return this.getListAttribute('groups');
  }

  // users - computed: true, optional: false, required: false
  public get users() {
    return this.getListAttribute('users');
  }
}

export class DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference {
    return new DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermission {
}

export function dataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionToTerraform(struct?: DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermission): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionToHclTerraform(struct?: DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermission): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermission | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermission | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // administrator_account - computed: true, optional: false, required: false
  private _administratorAccount = new DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountList(this, "administrator_account", false);
  public get administratorAccount() {
    return this._administratorAccount;
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }
}

export class DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference {
    return new DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermManagedDevopsPoolAzureDevopsOrganization {
}

export function dataAzurermManagedDevopsPoolAzureDevopsOrganizationToTerraform(struct?: DataAzurermManagedDevopsPoolAzureDevopsOrganization): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAzurermManagedDevopsPoolAzureDevopsOrganizationToHclTerraform(struct?: DataAzurermManagedDevopsPoolAzureDevopsOrganization): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermManagedDevopsPoolAzureDevopsOrganization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermManagedDevopsPoolAzureDevopsOrganization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // organization - computed: true, optional: false, required: false
  private _organization = new DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationList(this, "organization", false);
  public get organization() {
    return this._organization;
  }

  // permission - computed: true, optional: false, required: false
  private _permission = new DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionList(this, "permission", false);
  public get permission() {
    return this._permission;
  }
}

export class DataAzurermManagedDevopsPoolAzureDevopsOrganizationList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference {
    return new DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermManagedDevopsPoolIdentity {
}

export function dataAzurermManagedDevopsPoolIdentityToTerraform(struct?: DataAzurermManagedDevopsPoolIdentity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAzurermManagedDevopsPoolIdentityToHclTerraform(struct?: DataAzurermManagedDevopsPoolIdentity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermManagedDevopsPoolIdentityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermManagedDevopsPoolIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermManagedDevopsPoolIdentity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // identity_ids - computed: true, optional: false, required: false
  public get identityIds() {
    return this.getListAttribute('identity_ids');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAzurermManagedDevopsPoolIdentityList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAzurermManagedDevopsPoolIdentityOutputReference {
    return new DataAzurermManagedDevopsPoolIdentityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePrediction {
}

export function dataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionToTerraform(struct?: DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePrediction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionToHclTerraform(struct?: DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePrediction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePrediction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePrediction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prediction_preference - computed: true, optional: false, required: false
  public get predictionPreference() {
    return this.getStringAttribute('prediction_preference');
  }
}

export class DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference {
    return new DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule {
}

export function dataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleToTerraform(struct?: DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleToHclTerraform(struct?: DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }

  // time - computed: true, optional: false, required: false
  public get time() {
    return this.getStringAttribute('time');
  }
}

export class DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference {
    return new DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule {
}

export function dataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleToTerraform(struct?: DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleToHclTerraform(struct?: DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }

  // time - computed: true, optional: false, required: false
  public get time() {
    return this.getStringAttribute('time');
  }
}

export class DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference {
    return new DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule {
}

export function dataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleToTerraform(struct?: DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleToHclTerraform(struct?: DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }

  // time - computed: true, optional: false, required: false
  public get time() {
    return this.getStringAttribute('time');
  }
}

export class DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference {
    return new DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule {
}

export function dataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleToTerraform(struct?: DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleToHclTerraform(struct?: DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }

  // time - computed: true, optional: false, required: false
  public get time() {
    return this.getStringAttribute('time');
  }
}

export class DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference {
    return new DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule {
}

export function dataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleToTerraform(struct?: DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleToHclTerraform(struct?: DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }

  // time - computed: true, optional: false, required: false
  public get time() {
    return this.getStringAttribute('time');
  }
}

export class DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference {
    return new DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule {
}

export function dataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleToTerraform(struct?: DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleToHclTerraform(struct?: DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }

  // time - computed: true, optional: false, required: false
  public get time() {
    return this.getStringAttribute('time');
  }
}

export class DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference {
    return new DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule {
}

export function dataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleToTerraform(struct?: DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleToHclTerraform(struct?: DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }

  // time - computed: true, optional: false, required: false
  public get time() {
    return this.getStringAttribute('time');
  }
}

export class DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference {
    return new DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermManagedDevopsPoolStatefulAgentManualResourcePrediction {
}

export function dataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionToTerraform(struct?: DataAzurermManagedDevopsPoolStatefulAgentManualResourcePrediction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionToHclTerraform(struct?: DataAzurermManagedDevopsPoolStatefulAgentManualResourcePrediction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermManagedDevopsPoolStatefulAgentManualResourcePrediction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermManagedDevopsPoolStatefulAgentManualResourcePrediction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // all_week_schedule - computed: true, optional: false, required: false
  public get allWeekSchedule() {
    return this.getNumberAttribute('all_week_schedule');
  }

  // friday_schedule - computed: true, optional: false, required: false
  private _fridaySchedule = new DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList(this, "friday_schedule", true);
  public get fridaySchedule() {
    return this._fridaySchedule;
  }

  // monday_schedule - computed: true, optional: false, required: false
  private _mondaySchedule = new DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList(this, "monday_schedule", true);
  public get mondaySchedule() {
    return this._mondaySchedule;
  }

  // saturday_schedule - computed: true, optional: false, required: false
  private _saturdaySchedule = new DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList(this, "saturday_schedule", true);
  public get saturdaySchedule() {
    return this._saturdaySchedule;
  }

  // sunday_schedule - computed: true, optional: false, required: false
  private _sundaySchedule = new DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList(this, "sunday_schedule", true);
  public get sundaySchedule() {
    return this._sundaySchedule;
  }

  // thursday_schedule - computed: true, optional: false, required: false
  private _thursdaySchedule = new DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList(this, "thursday_schedule", true);
  public get thursdaySchedule() {
    return this._thursdaySchedule;
  }

  // time_zone_name - computed: true, optional: false, required: false
  public get timeZoneName() {
    return this.getStringAttribute('time_zone_name');
  }

  // tuesday_schedule - computed: true, optional: false, required: false
  private _tuesdaySchedule = new DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList(this, "tuesday_schedule", true);
  public get tuesdaySchedule() {
    return this._tuesdaySchedule;
  }

  // wednesday_schedule - computed: true, optional: false, required: false
  private _wednesdaySchedule = new DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList(this, "wednesday_schedule", true);
  public get wednesdaySchedule() {
    return this._wednesdaySchedule;
  }
}

export class DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference {
    return new DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermManagedDevopsPoolStatefulAgent {
}

export function dataAzurermManagedDevopsPoolStatefulAgentToTerraform(struct?: DataAzurermManagedDevopsPoolStatefulAgent): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAzurermManagedDevopsPoolStatefulAgentToHclTerraform(struct?: DataAzurermManagedDevopsPoolStatefulAgent): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermManagedDevopsPoolStatefulAgentOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermManagedDevopsPoolStatefulAgent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermManagedDevopsPoolStatefulAgent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // automatic_resource_prediction - computed: true, optional: false, required: false
  private _automaticResourcePrediction = new DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionList(this, "automatic_resource_prediction", false);
  public get automaticResourcePrediction() {
    return this._automaticResourcePrediction;
  }

  // grace_period_time_span - computed: true, optional: false, required: false
  public get gracePeriodTimeSpan() {
    return this.getStringAttribute('grace_period_time_span');
  }

  // manual_resource_prediction - computed: true, optional: false, required: false
  private _manualResourcePrediction = new DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionList(this, "manual_resource_prediction", false);
  public get manualResourcePrediction() {
    return this._manualResourcePrediction;
  }

  // maximum_agent_lifetime - computed: true, optional: false, required: false
  public get maximumAgentLifetime() {
    return this.getStringAttribute('maximum_agent_lifetime');
  }
}

export class DataAzurermManagedDevopsPoolStatefulAgentList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAzurermManagedDevopsPoolStatefulAgentOutputReference {
    return new DataAzurermManagedDevopsPoolStatefulAgentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePrediction {
}

export function dataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionToTerraform(struct?: DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePrediction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionToHclTerraform(struct?: DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePrediction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePrediction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePrediction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prediction_preference - computed: true, optional: false, required: false
  public get predictionPreference() {
    return this.getStringAttribute('prediction_preference');
  }
}

export class DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference {
    return new DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule {
}

export function dataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleToTerraform(struct?: DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleToHclTerraform(struct?: DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }

  // time - computed: true, optional: false, required: false
  public get time() {
    return this.getStringAttribute('time');
  }
}

export class DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference {
    return new DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule {
}

export function dataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleToTerraform(struct?: DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleToHclTerraform(struct?: DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }

  // time - computed: true, optional: false, required: false
  public get time() {
    return this.getStringAttribute('time');
  }
}

export class DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference {
    return new DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule {
}

export function dataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleToTerraform(struct?: DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleToHclTerraform(struct?: DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }

  // time - computed: true, optional: false, required: false
  public get time() {
    return this.getStringAttribute('time');
  }
}

export class DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference {
    return new DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule {
}

export function dataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleToTerraform(struct?: DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleToHclTerraform(struct?: DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }

  // time - computed: true, optional: false, required: false
  public get time() {
    return this.getStringAttribute('time');
  }
}

export class DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference {
    return new DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule {
}

export function dataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleToTerraform(struct?: DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleToHclTerraform(struct?: DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }

  // time - computed: true, optional: false, required: false
  public get time() {
    return this.getStringAttribute('time');
  }
}

export class DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference {
    return new DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule {
}

export function dataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleToTerraform(struct?: DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleToHclTerraform(struct?: DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }

  // time - computed: true, optional: false, required: false
  public get time() {
    return this.getStringAttribute('time');
  }
}

export class DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference {
    return new DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule {
}

export function dataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleToTerraform(struct?: DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleToHclTerraform(struct?: DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }

  // time - computed: true, optional: false, required: false
  public get time() {
    return this.getStringAttribute('time');
  }
}

export class DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference {
    return new DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermManagedDevopsPoolStatelessAgentManualResourcePrediction {
}

export function dataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionToTerraform(struct?: DataAzurermManagedDevopsPoolStatelessAgentManualResourcePrediction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionToHclTerraform(struct?: DataAzurermManagedDevopsPoolStatelessAgentManualResourcePrediction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermManagedDevopsPoolStatelessAgentManualResourcePrediction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermManagedDevopsPoolStatelessAgentManualResourcePrediction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // all_week_schedule - computed: true, optional: false, required: false
  public get allWeekSchedule() {
    return this.getNumberAttribute('all_week_schedule');
  }

  // friday_schedule - computed: true, optional: false, required: false
  private _fridaySchedule = new DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList(this, "friday_schedule", true);
  public get fridaySchedule() {
    return this._fridaySchedule;
  }

  // monday_schedule - computed: true, optional: false, required: false
  private _mondaySchedule = new DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList(this, "monday_schedule", true);
  public get mondaySchedule() {
    return this._mondaySchedule;
  }

  // saturday_schedule - computed: true, optional: false, required: false
  private _saturdaySchedule = new DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList(this, "saturday_schedule", true);
  public get saturdaySchedule() {
    return this._saturdaySchedule;
  }

  // sunday_schedule - computed: true, optional: false, required: false
  private _sundaySchedule = new DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList(this, "sunday_schedule", true);
  public get sundaySchedule() {
    return this._sundaySchedule;
  }

  // thursday_schedule - computed: true, optional: false, required: false
  private _thursdaySchedule = new DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList(this, "thursday_schedule", true);
  public get thursdaySchedule() {
    return this._thursdaySchedule;
  }

  // time_zone_name - computed: true, optional: false, required: false
  public get timeZoneName() {
    return this.getStringAttribute('time_zone_name');
  }

  // tuesday_schedule - computed: true, optional: false, required: false
  private _tuesdaySchedule = new DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList(this, "tuesday_schedule", true);
  public get tuesdaySchedule() {
    return this._tuesdaySchedule;
  }

  // wednesday_schedule - computed: true, optional: false, required: false
  private _wednesdaySchedule = new DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList(this, "wednesday_schedule", true);
  public get wednesdaySchedule() {
    return this._wednesdaySchedule;
  }
}

export class DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference {
    return new DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermManagedDevopsPoolStatelessAgent {
}

export function dataAzurermManagedDevopsPoolStatelessAgentToTerraform(struct?: DataAzurermManagedDevopsPoolStatelessAgent): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAzurermManagedDevopsPoolStatelessAgentToHclTerraform(struct?: DataAzurermManagedDevopsPoolStatelessAgent): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermManagedDevopsPoolStatelessAgentOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermManagedDevopsPoolStatelessAgent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermManagedDevopsPoolStatelessAgent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // automatic_resource_prediction - computed: true, optional: false, required: false
  private _automaticResourcePrediction = new DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionList(this, "automatic_resource_prediction", false);
  public get automaticResourcePrediction() {
    return this._automaticResourcePrediction;
  }

  // manual_resource_prediction - computed: true, optional: false, required: false
  private _manualResourcePrediction = new DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionList(this, "manual_resource_prediction", false);
  public get manualResourcePrediction() {
    return this._manualResourcePrediction;
  }
}

export class DataAzurermManagedDevopsPoolStatelessAgentList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAzurermManagedDevopsPoolStatelessAgentOutputReference {
    return new DataAzurermManagedDevopsPoolStatelessAgentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImage {
}

export function dataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageToTerraform(struct?: DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageToHclTerraform(struct?: DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aliases - computed: true, optional: false, required: false
  public get aliases() {
    return this.getListAttribute('aliases');
  }

  // buffer - computed: true, optional: false, required: false
  public get buffer() {
    return this.getStringAttribute('buffer');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // well_known_image_name - computed: true, optional: false, required: false
  public get wellKnownImageName() {
    return this.getStringAttribute('well_known_image_name');
  }
}

export class DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference {
    return new DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement {
}

export function dataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementToTerraform(struct?: DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementToHclTerraform(struct?: DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // certificate_store_location - computed: true, optional: false, required: false
  public get certificateStoreLocation() {
    return this.getStringAttribute('certificate_store_location');
  }

  // certificate_store_name - computed: true, optional: false, required: false
  public get certificateStoreName() {
    return this.getStringAttribute('certificate_store_name');
  }

  // key_export_enabled - computed: true, optional: false, required: false
  public get keyExportEnabled() {
    return this.getBooleanAttribute('key_export_enabled');
  }

  // key_vault_certificate_ids - computed: true, optional: false, required: false
  public get keyVaultCertificateIds() {
    return this.getListAttribute('key_vault_certificate_ids');
  }
}

export class DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference {
    return new DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurity {
}

export function dataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityToTerraform(struct?: DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityToHclTerraform(struct?: DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // interactive_logon_enabled - computed: true, optional: false, required: false
  public get interactiveLogonEnabled() {
    return this.getBooleanAttribute('interactive_logon_enabled');
  }

  // key_vault_management - computed: true, optional: false, required: false
  private _keyVaultManagement = new DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementList(this, "key_vault_management", false);
  public get keyVaultManagement() {
    return this._keyVaultManagement;
  }
}

export class DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference {
    return new DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorage {
}

export function dataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageToTerraform(struct?: DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageToHclTerraform(struct?: DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // caching - computed: true, optional: false, required: false
  public get caching() {
    return this.getStringAttribute('caching');
  }

  // disk_size_in_gb - computed: true, optional: false, required: false
  public get diskSizeInGb() {
    return this.getNumberAttribute('disk_size_in_gb');
  }

  // drive_letter - computed: true, optional: false, required: false
  public get driveLetter() {
    return this.getStringAttribute('drive_letter');
  }

  // storage_account_type - computed: true, optional: false, required: false
  public get storageAccountType() {
    return this.getStringAttribute('storage_account_type');
  }
}

export class DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference {
    return new DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabric {
}

export function dataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricToTerraform(struct?: DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabric): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricToHclTerraform(struct?: DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabric): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabric | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabric | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // image - computed: true, optional: false, required: false
  private _image = new DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageList(this, "image", false);
  public get image() {
    return this._image;
  }

  // os_disk_storage_account_type - computed: true, optional: false, required: false
  public get osDiskStorageAccountType() {
    return this.getStringAttribute('os_disk_storage_account_type');
  }

  // security - computed: true, optional: false, required: false
  private _security = new DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityList(this, "security", false);
  public get security() {
    return this._security;
  }

  // sku_name - computed: true, optional: false, required: false
  public get skuName() {
    return this.getStringAttribute('sku_name');
  }

  // storage - computed: true, optional: false, required: false
  private _storage = new DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageList(this, "storage", false);
  public get storage() {
    return this._storage;
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}

export class DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference {
    return new DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermManagedDevopsPoolTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/managed_devops_pool#read DataAzurermManagedDevopsPool#read}
  */
  readonly read?: string;
}

export function dataAzurermManagedDevopsPoolTimeoutsToTerraform(struct?: DataAzurermManagedDevopsPoolTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    read: cdktn.stringToTerraform(struct!.read),
  }
}


export function dataAzurermManagedDevopsPoolTimeoutsToHclTerraform(struct?: DataAzurermManagedDevopsPoolTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    read: {
      value: cdktn.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAzurermManagedDevopsPoolTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAzurermManagedDevopsPoolTimeouts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermManagedDevopsPoolTimeouts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
    }
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/managed_devops_pool azurerm_managed_devops_pool}
*/
export class DataAzurermManagedDevopsPool extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_managed_devops_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAzurermManagedDevopsPool resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAzurermManagedDevopsPool to import
  * @param importFromId The id of the existing DataAzurermManagedDevopsPool that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/managed_devops_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAzurermManagedDevopsPool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_managed_devops_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/managed_devops_pool azurerm_managed_devops_pool} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermManagedDevopsPoolConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermManagedDevopsPoolConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_managed_devops_pool',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.78.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // azure_devops_organization - computed: true, optional: false, required: false
  private _azureDevopsOrganization = new DataAzurermManagedDevopsPoolAzureDevopsOrganizationList(this, "azure_devops_organization", false);
  public get azureDevopsOrganization() {
    return this._azureDevopsOrganization;
  }

  // dev_center_project_id - computed: true, optional: false, required: false
  public get devCenterProjectId() {
    return this.getStringAttribute('dev_center_project_id');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // identity - computed: true, optional: false, required: false
  private _identity = new DataAzurermManagedDevopsPoolIdentityList(this, "identity", false);
  public get identity() {
    return this._identity;
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // maximum_concurrency - computed: true, optional: false, required: false
  public get maximumConcurrency() {
    return this.getNumberAttribute('maximum_concurrency');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }

  // stateful_agent - computed: true, optional: false, required: false
  private _statefulAgent = new DataAzurermManagedDevopsPoolStatefulAgentList(this, "stateful_agent", false);
  public get statefulAgent() {
    return this._statefulAgent;
  }

  // stateless_agent - computed: true, optional: false, required: false
  private _statelessAgent = new DataAzurermManagedDevopsPoolStatelessAgentList(this, "stateless_agent", false);
  public get statelessAgent() {
    return this._statelessAgent;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktn.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // virtual_machine_scale_set_fabric - computed: true, optional: false, required: false
  private _virtualMachineScaleSetFabric = new DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricList(this, "virtual_machine_scale_set_fabric", false);
  public get virtualMachineScaleSetFabric() {
    return this._virtualMachineScaleSetFabric;
  }

  // work_folder - computed: true, optional: false, required: false
  public get workFolder() {
    return this.getStringAttribute('work_folder');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataAzurermManagedDevopsPoolTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataAzurermManagedDevopsPoolTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      resource_group_name: cdktn.stringToTerraform(this._resourceGroupName),
      timeouts: dataAzurermManagedDevopsPoolTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_name: {
        value: cdktn.stringToHclTerraform(this._resourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: dataAzurermManagedDevopsPoolTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataAzurermManagedDevopsPoolTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
