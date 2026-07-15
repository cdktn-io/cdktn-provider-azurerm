/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ManagedDevopsPoolConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#dev_center_project_id ManagedDevopsPool#dev_center_project_id}
  */
  readonly devCenterProjectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#id ManagedDevopsPool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#location ManagedDevopsPool#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#maximum_concurrency ManagedDevopsPool#maximum_concurrency}
  */
  readonly maximumConcurrency: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#name ManagedDevopsPool#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#resource_group_name ManagedDevopsPool#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#tags ManagedDevopsPool#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#work_folder ManagedDevopsPool#work_folder}
  */
  readonly workFolder?: string;
  /**
  * azure_devops_organization block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#azure_devops_organization ManagedDevopsPool#azure_devops_organization}
  */
  readonly azureDevopsOrganization: ManagedDevopsPoolAzureDevopsOrganization;
  /**
  * identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#identity ManagedDevopsPool#identity}
  */
  readonly identity?: ManagedDevopsPoolIdentity;
  /**
  * stateful_agent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#stateful_agent ManagedDevopsPool#stateful_agent}
  */
  readonly statefulAgent?: ManagedDevopsPoolStatefulAgent;
  /**
  * stateless_agent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#stateless_agent ManagedDevopsPool#stateless_agent}
  */
  readonly statelessAgent?: ManagedDevopsPoolStatelessAgent;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#timeouts ManagedDevopsPool#timeouts}
  */
  readonly timeouts?: ManagedDevopsPoolTimeouts;
  /**
  * virtual_machine_scale_set_fabric block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#virtual_machine_scale_set_fabric ManagedDevopsPool#virtual_machine_scale_set_fabric}
  */
  readonly virtualMachineScaleSetFabric: ManagedDevopsPoolVirtualMachineScaleSetFabric;
}
export interface ManagedDevopsPoolAzureDevopsOrganizationOrganization {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#parallelism ManagedDevopsPool#parallelism}
  */
  readonly parallelism: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#projects ManagedDevopsPool#projects}
  */
  readonly projects?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#url ManagedDevopsPool#url}
  */
  readonly url: string;
}

export function managedDevopsPoolAzureDevopsOrganizationOrganizationToTerraform(struct?: ManagedDevopsPoolAzureDevopsOrganizationOrganization | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    parallelism: cdktn.numberToTerraform(struct!.parallelism),
    projects: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.projects),
    url: cdktn.stringToTerraform(struct!.url),
  }
}


export function managedDevopsPoolAzureDevopsOrganizationOrganizationToHclTerraform(struct?: ManagedDevopsPoolAzureDevopsOrganizationOrganization | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    parallelism: {
      value: cdktn.numberToHclTerraform(struct!.parallelism),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    projects: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.projects),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    url: {
      value: cdktn.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ManagedDevopsPoolAzureDevopsOrganizationOrganization | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parallelism !== undefined) {
      hasAnyValues = true;
      internalValueResult.parallelism = this._parallelism;
    }
    if (this._projects !== undefined) {
      hasAnyValues = true;
      internalValueResult.projects = this._projects;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDevopsPoolAzureDevopsOrganizationOrganization | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._parallelism = undefined;
      this._projects = undefined;
      this._url = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._parallelism = value.parallelism;
      this._projects = value.projects;
      this._url = value.url;
    }
  }

  // parallelism - computed: false, optional: false, required: true
  private _parallelism?: number; 
  public get parallelism() {
    return this.getNumberAttribute('parallelism');
  }
  public set parallelism(value: number) {
    this._parallelism = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parallelismInput() {
    return this._parallelism;
  }

  // projects - computed: false, optional: true, required: false
  private _projects?: string[]; 
  public get projects() {
    return this.getListAttribute('projects');
  }
  public set projects(value: string[]) {
    this._projects = value;
  }
  public resetProjects() {
    this._projects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectsInput() {
    return this._projects;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class ManagedDevopsPoolAzureDevopsOrganizationOrganizationList extends cdktn.ComplexList {
  public internalValue? : ManagedDevopsPoolAzureDevopsOrganizationOrganization[] | cdktn.IResolvable

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
  public get(index: number): ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference {
    return new ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#groups ManagedDevopsPool#groups}
  */
  readonly groups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#users ManagedDevopsPool#users}
  */
  readonly users?: string[];
}

export function managedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountToTerraform(struct?: ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference | ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    groups: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.groups),
    users: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.users),
  }
}


export function managedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountToHclTerraform(struct?: ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference | ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    groups: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.groups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    users: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.users),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groups !== undefined) {
      hasAnyValues = true;
      internalValueResult.groups = this._groups;
    }
    if (this._users !== undefined) {
      hasAnyValues = true;
      internalValueResult.users = this._users;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._groups = undefined;
      this._users = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._groups = value.groups;
      this._users = value.users;
    }
  }

  // groups - computed: false, optional: true, required: false
  private _groups?: string[]; 
  public get groups() {
    return this.getListAttribute('groups');
  }
  public set groups(value: string[]) {
    this._groups = value;
  }
  public resetGroups() {
    this._groups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
  }

  // users - computed: false, optional: true, required: false
  private _users?: string[]; 
  public get users() {
    return this.getListAttribute('users');
  }
  public set users(value: string[]) {
    this._users = value;
  }
  public resetUsers() {
    this._users = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users;
  }
}
export interface ManagedDevopsPoolAzureDevopsOrganizationPermission {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#kind ManagedDevopsPool#kind}
  */
  readonly kind: string;
  /**
  * administrator_account block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#administrator_account ManagedDevopsPool#administrator_account}
  */
  readonly administratorAccount?: ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount;
}

export function managedDevopsPoolAzureDevopsOrganizationPermissionToTerraform(struct?: ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference | ManagedDevopsPoolAzureDevopsOrganizationPermission): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    kind: cdktn.stringToTerraform(struct!.kind),
    administrator_account: managedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountToTerraform(struct!.administratorAccount),
  }
}


export function managedDevopsPoolAzureDevopsOrganizationPermissionToHclTerraform(struct?: ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference | ManagedDevopsPoolAzureDevopsOrganizationPermission): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    kind: {
      value: cdktn.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    administrator_account: {
      value: managedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountToHclTerraform(struct!.administratorAccount),
      isBlock: true,
      type: "list",
      storageClassType: "ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagedDevopsPoolAzureDevopsOrganizationPermission | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._administratorAccount?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.administratorAccount = this._administratorAccount?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDevopsPoolAzureDevopsOrganizationPermission | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kind = undefined;
      this._administratorAccount.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kind = value.kind;
      this._administratorAccount.internalValue = value.administratorAccount;
    }
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // administrator_account - computed: false, optional: true, required: false
  private _administratorAccount = new ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference(this, "administrator_account");
  public get administratorAccount() {
    return this._administratorAccount;
  }
  public putAdministratorAccount(value: ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount) {
    this._administratorAccount.internalValue = value;
  }
  public resetAdministratorAccount() {
    this._administratorAccount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get administratorAccountInput() {
    return this._administratorAccount.internalValue;
  }
}
export interface ManagedDevopsPoolAzureDevopsOrganization {
  /**
  * organization block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#organization ManagedDevopsPool#organization}
  */
  readonly organization: ManagedDevopsPoolAzureDevopsOrganizationOrganization[] | cdktn.IResolvable;
  /**
  * permission block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#permission ManagedDevopsPool#permission}
  */
  readonly permission?: ManagedDevopsPoolAzureDevopsOrganizationPermission;
}

export function managedDevopsPoolAzureDevopsOrganizationToTerraform(struct?: ManagedDevopsPoolAzureDevopsOrganizationOutputReference | ManagedDevopsPoolAzureDevopsOrganization): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    organization: cdktn.listMapper(managedDevopsPoolAzureDevopsOrganizationOrganizationToTerraform, true)(struct!.organization),
    permission: managedDevopsPoolAzureDevopsOrganizationPermissionToTerraform(struct!.permission),
  }
}


export function managedDevopsPoolAzureDevopsOrganizationToHclTerraform(struct?: ManagedDevopsPoolAzureDevopsOrganizationOutputReference | ManagedDevopsPoolAzureDevopsOrganization): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    organization: {
      value: cdktn.listMapperHcl(managedDevopsPoolAzureDevopsOrganizationOrganizationToHclTerraform, true)(struct!.organization),
      isBlock: true,
      type: "list",
      storageClassType: "ManagedDevopsPoolAzureDevopsOrganizationOrganizationList",
    },
    permission: {
      value: managedDevopsPoolAzureDevopsOrganizationPermissionToHclTerraform(struct!.permission),
      isBlock: true,
      type: "list",
      storageClassType: "ManagedDevopsPoolAzureDevopsOrganizationPermissionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedDevopsPoolAzureDevopsOrganizationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagedDevopsPoolAzureDevopsOrganization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._organization?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.organization = this._organization?.internalValue;
    }
    if (this._permission?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.permission = this._permission?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDevopsPoolAzureDevopsOrganization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._organization.internalValue = undefined;
      this._permission.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._organization.internalValue = value.organization;
      this._permission.internalValue = value.permission;
    }
  }

  // organization - computed: false, optional: false, required: true
  private _organization = new ManagedDevopsPoolAzureDevopsOrganizationOrganizationList(this, "organization", false);
  public get organization() {
    return this._organization;
  }
  public putOrganization(value: ManagedDevopsPoolAzureDevopsOrganizationOrganization[] | cdktn.IResolvable) {
    this._organization.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization.internalValue;
  }

  // permission - computed: false, optional: true, required: false
  private _permission = new ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference(this, "permission");
  public get permission() {
    return this._permission;
  }
  public putPermission(value: ManagedDevopsPoolAzureDevopsOrganizationPermission) {
    this._permission.internalValue = value;
  }
  public resetPermission() {
    this._permission.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission.internalValue;
  }
}
export interface ManagedDevopsPoolIdentity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#identity_ids ManagedDevopsPool#identity_ids}
  */
  readonly identityIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#type ManagedDevopsPool#type}
  */
  readonly type: string;
}

export function managedDevopsPoolIdentityToTerraform(struct?: ManagedDevopsPoolIdentityOutputReference | ManagedDevopsPoolIdentity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    identity_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.identityIds),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function managedDevopsPoolIdentityToHclTerraform(struct?: ManagedDevopsPoolIdentityOutputReference | ManagedDevopsPoolIdentity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    identity_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.identityIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedDevopsPoolIdentityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagedDevopsPoolIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identityIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityIds = this._identityIds;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDevopsPoolIdentity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._identityIds = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._identityIds = value.identityIds;
      this._type = value.type;
    }
  }

  // identity_ids - computed: false, optional: false, required: true
  private _identityIds?: string[]; 
  public get identityIds() {
    return cdktn.Fn.tolist(this.getListAttribute('identity_ids'));
  }
  public set identityIds(value: string[]) {
    this._identityIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityIdsInput() {
    return this._identityIds;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface ManagedDevopsPoolStatefulAgentAutomaticResourcePrediction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#prediction_preference ManagedDevopsPool#prediction_preference}
  */
  readonly predictionPreference?: string;
}

export function managedDevopsPoolStatefulAgentAutomaticResourcePredictionToTerraform(struct?: ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference | ManagedDevopsPoolStatefulAgentAutomaticResourcePrediction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    prediction_preference: cdktn.stringToTerraform(struct!.predictionPreference),
  }
}


export function managedDevopsPoolStatefulAgentAutomaticResourcePredictionToHclTerraform(struct?: ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference | ManagedDevopsPoolStatefulAgentAutomaticResourcePrediction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    prediction_preference: {
      value: cdktn.stringToHclTerraform(struct!.predictionPreference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagedDevopsPoolStatefulAgentAutomaticResourcePrediction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._predictionPreference !== undefined) {
      hasAnyValues = true;
      internalValueResult.predictionPreference = this._predictionPreference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDevopsPoolStatefulAgentAutomaticResourcePrediction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._predictionPreference = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._predictionPreference = value.predictionPreference;
    }
  }

  // prediction_preference - computed: false, optional: true, required: false
  private _predictionPreference?: string; 
  public get predictionPreference() {
    return this.getStringAttribute('prediction_preference');
  }
  public set predictionPreference(value: string) {
    this._predictionPreference = value;
  }
  public resetPredictionPreference() {
    this._predictionPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predictionPreferenceInput() {
    return this._predictionPreference;
  }
}
export interface ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}
  */
  readonly count: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}
  */
  readonly time: string;
}

export function managedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleToTerraform(struct?: ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    count: cdktn.numberToTerraform(struct!.count),
    time: cdktn.stringToTerraform(struct!.time),
  }
}


export function managedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleToHclTerraform(struct?: ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    count: {
      value: cdktn.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time: {
      value: cdktn.stringToHclTerraform(struct!.time),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._time !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._time = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._time = value.time;
    }
  }

  // count - computed: false, optional: false, required: true
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // time - computed: false, optional: false, required: true
  private _time?: string; 
  public get time() {
    return this.getStringAttribute('time');
  }
  public set time(value: string) {
    this._time = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time;
  }
}

export class ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList extends cdktn.ComplexList {
  public internalValue? : ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule[] | cdktn.IResolvable

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
  public get(index: number): ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference {
    return new ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}
  */
  readonly count: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}
  */
  readonly time: string;
}

export function managedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleToTerraform(struct?: ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    count: cdktn.numberToTerraform(struct!.count),
    time: cdktn.stringToTerraform(struct!.time),
  }
}


export function managedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleToHclTerraform(struct?: ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    count: {
      value: cdktn.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time: {
      value: cdktn.stringToHclTerraform(struct!.time),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._time !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._time = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._time = value.time;
    }
  }

  // count - computed: false, optional: false, required: true
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // time - computed: false, optional: false, required: true
  private _time?: string; 
  public get time() {
    return this.getStringAttribute('time');
  }
  public set time(value: string) {
    this._time = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time;
  }
}

export class ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList extends cdktn.ComplexList {
  public internalValue? : ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule[] | cdktn.IResolvable

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
  public get(index: number): ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference {
    return new ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}
  */
  readonly count: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}
  */
  readonly time: string;
}

export function managedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleToTerraform(struct?: ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    count: cdktn.numberToTerraform(struct!.count),
    time: cdktn.stringToTerraform(struct!.time),
  }
}


export function managedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleToHclTerraform(struct?: ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    count: {
      value: cdktn.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time: {
      value: cdktn.stringToHclTerraform(struct!.time),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._time !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._time = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._time = value.time;
    }
  }

  // count - computed: false, optional: false, required: true
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // time - computed: false, optional: false, required: true
  private _time?: string; 
  public get time() {
    return this.getStringAttribute('time');
  }
  public set time(value: string) {
    this._time = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time;
  }
}

export class ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList extends cdktn.ComplexList {
  public internalValue? : ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule[] | cdktn.IResolvable

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
  public get(index: number): ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference {
    return new ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}
  */
  readonly count: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}
  */
  readonly time: string;
}

export function managedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleToTerraform(struct?: ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    count: cdktn.numberToTerraform(struct!.count),
    time: cdktn.stringToTerraform(struct!.time),
  }
}


export function managedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleToHclTerraform(struct?: ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    count: {
      value: cdktn.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time: {
      value: cdktn.stringToHclTerraform(struct!.time),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._time !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._time = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._time = value.time;
    }
  }

  // count - computed: false, optional: false, required: true
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // time - computed: false, optional: false, required: true
  private _time?: string; 
  public get time() {
    return this.getStringAttribute('time');
  }
  public set time(value: string) {
    this._time = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time;
  }
}

export class ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList extends cdktn.ComplexList {
  public internalValue? : ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule[] | cdktn.IResolvable

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
  public get(index: number): ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference {
    return new ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}
  */
  readonly count: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}
  */
  readonly time: string;
}

export function managedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleToTerraform(struct?: ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    count: cdktn.numberToTerraform(struct!.count),
    time: cdktn.stringToTerraform(struct!.time),
  }
}


export function managedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleToHclTerraform(struct?: ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    count: {
      value: cdktn.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time: {
      value: cdktn.stringToHclTerraform(struct!.time),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._time !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._time = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._time = value.time;
    }
  }

  // count - computed: false, optional: false, required: true
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // time - computed: false, optional: false, required: true
  private _time?: string; 
  public get time() {
    return this.getStringAttribute('time');
  }
  public set time(value: string) {
    this._time = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time;
  }
}

export class ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList extends cdktn.ComplexList {
  public internalValue? : ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule[] | cdktn.IResolvable

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
  public get(index: number): ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference {
    return new ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}
  */
  readonly count: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}
  */
  readonly time: string;
}

export function managedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleToTerraform(struct?: ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    count: cdktn.numberToTerraform(struct!.count),
    time: cdktn.stringToTerraform(struct!.time),
  }
}


export function managedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleToHclTerraform(struct?: ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    count: {
      value: cdktn.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time: {
      value: cdktn.stringToHclTerraform(struct!.time),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._time !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._time = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._time = value.time;
    }
  }

  // count - computed: false, optional: false, required: true
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // time - computed: false, optional: false, required: true
  private _time?: string; 
  public get time() {
    return this.getStringAttribute('time');
  }
  public set time(value: string) {
    this._time = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time;
  }
}

export class ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList extends cdktn.ComplexList {
  public internalValue? : ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule[] | cdktn.IResolvable

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
  public get(index: number): ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference {
    return new ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}
  */
  readonly count: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}
  */
  readonly time: string;
}

export function managedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleToTerraform(struct?: ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    count: cdktn.numberToTerraform(struct!.count),
    time: cdktn.stringToTerraform(struct!.time),
  }
}


export function managedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleToHclTerraform(struct?: ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    count: {
      value: cdktn.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time: {
      value: cdktn.stringToHclTerraform(struct!.time),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._time !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._time = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._time = value.time;
    }
  }

  // count - computed: false, optional: false, required: true
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // time - computed: false, optional: false, required: true
  private _time?: string; 
  public get time() {
    return this.getStringAttribute('time');
  }
  public set time(value: string) {
    this._time = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time;
  }
}

export class ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList extends cdktn.ComplexList {
  public internalValue? : ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule[] | cdktn.IResolvable

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
  public get(index: number): ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference {
    return new ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedDevopsPoolStatefulAgentManualResourcePrediction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#all_week_schedule ManagedDevopsPool#all_week_schedule}
  */
  readonly allWeekSchedule?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#time_zone_name ManagedDevopsPool#time_zone_name}
  */
  readonly timeZoneName?: string;
  /**
  * friday_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#friday_schedule ManagedDevopsPool#friday_schedule}
  */
  readonly fridaySchedule?: ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule[] | cdktn.IResolvable;
  /**
  * monday_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#monday_schedule ManagedDevopsPool#monday_schedule}
  */
  readonly mondaySchedule?: ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule[] | cdktn.IResolvable;
  /**
  * saturday_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#saturday_schedule ManagedDevopsPool#saturday_schedule}
  */
  readonly saturdaySchedule?: ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule[] | cdktn.IResolvable;
  /**
  * sunday_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#sunday_schedule ManagedDevopsPool#sunday_schedule}
  */
  readonly sundaySchedule?: ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule[] | cdktn.IResolvable;
  /**
  * thursday_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#thursday_schedule ManagedDevopsPool#thursday_schedule}
  */
  readonly thursdaySchedule?: ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule[] | cdktn.IResolvable;
  /**
  * tuesday_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#tuesday_schedule ManagedDevopsPool#tuesday_schedule}
  */
  readonly tuesdaySchedule?: ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule[] | cdktn.IResolvable;
  /**
  * wednesday_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#wednesday_schedule ManagedDevopsPool#wednesday_schedule}
  */
  readonly wednesdaySchedule?: ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule[] | cdktn.IResolvable;
}

export function managedDevopsPoolStatefulAgentManualResourcePredictionToTerraform(struct?: ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference | ManagedDevopsPoolStatefulAgentManualResourcePrediction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    all_week_schedule: cdktn.numberToTerraform(struct!.allWeekSchedule),
    time_zone_name: cdktn.stringToTerraform(struct!.timeZoneName),
    friday_schedule: cdktn.listMapper(managedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleToTerraform, true)(struct!.fridaySchedule),
    monday_schedule: cdktn.listMapper(managedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleToTerraform, true)(struct!.mondaySchedule),
    saturday_schedule: cdktn.listMapper(managedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleToTerraform, true)(struct!.saturdaySchedule),
    sunday_schedule: cdktn.listMapper(managedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleToTerraform, true)(struct!.sundaySchedule),
    thursday_schedule: cdktn.listMapper(managedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleToTerraform, true)(struct!.thursdaySchedule),
    tuesday_schedule: cdktn.listMapper(managedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleToTerraform, true)(struct!.tuesdaySchedule),
    wednesday_schedule: cdktn.listMapper(managedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleToTerraform, true)(struct!.wednesdaySchedule),
  }
}


export function managedDevopsPoolStatefulAgentManualResourcePredictionToHclTerraform(struct?: ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference | ManagedDevopsPoolStatefulAgentManualResourcePrediction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    all_week_schedule: {
      value: cdktn.numberToHclTerraform(struct!.allWeekSchedule),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_zone_name: {
      value: cdktn.stringToHclTerraform(struct!.timeZoneName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    friday_schedule: {
      value: cdktn.listMapperHcl(managedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleToHclTerraform, true)(struct!.fridaySchedule),
      isBlock: true,
      type: "set",
      storageClassType: "ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList",
    },
    monday_schedule: {
      value: cdktn.listMapperHcl(managedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleToHclTerraform, true)(struct!.mondaySchedule),
      isBlock: true,
      type: "set",
      storageClassType: "ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList",
    },
    saturday_schedule: {
      value: cdktn.listMapperHcl(managedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleToHclTerraform, true)(struct!.saturdaySchedule),
      isBlock: true,
      type: "set",
      storageClassType: "ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList",
    },
    sunday_schedule: {
      value: cdktn.listMapperHcl(managedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleToHclTerraform, true)(struct!.sundaySchedule),
      isBlock: true,
      type: "set",
      storageClassType: "ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList",
    },
    thursday_schedule: {
      value: cdktn.listMapperHcl(managedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleToHclTerraform, true)(struct!.thursdaySchedule),
      isBlock: true,
      type: "set",
      storageClassType: "ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList",
    },
    tuesday_schedule: {
      value: cdktn.listMapperHcl(managedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleToHclTerraform, true)(struct!.tuesdaySchedule),
      isBlock: true,
      type: "set",
      storageClassType: "ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList",
    },
    wednesday_schedule: {
      value: cdktn.listMapperHcl(managedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleToHclTerraform, true)(struct!.wednesdaySchedule),
      isBlock: true,
      type: "set",
      storageClassType: "ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagedDevopsPoolStatefulAgentManualResourcePrediction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allWeekSchedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.allWeekSchedule = this._allWeekSchedule;
    }
    if (this._timeZoneName !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZoneName = this._timeZoneName;
    }
    if (this._fridaySchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fridaySchedule = this._fridaySchedule?.internalValue;
    }
    if (this._mondaySchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mondaySchedule = this._mondaySchedule?.internalValue;
    }
    if (this._saturdaySchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.saturdaySchedule = this._saturdaySchedule?.internalValue;
    }
    if (this._sundaySchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sundaySchedule = this._sundaySchedule?.internalValue;
    }
    if (this._thursdaySchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.thursdaySchedule = this._thursdaySchedule?.internalValue;
    }
    if (this._tuesdaySchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tuesdaySchedule = this._tuesdaySchedule?.internalValue;
    }
    if (this._wednesdaySchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wednesdaySchedule = this._wednesdaySchedule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDevopsPoolStatefulAgentManualResourcePrediction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allWeekSchedule = undefined;
      this._timeZoneName = undefined;
      this._fridaySchedule.internalValue = undefined;
      this._mondaySchedule.internalValue = undefined;
      this._saturdaySchedule.internalValue = undefined;
      this._sundaySchedule.internalValue = undefined;
      this._thursdaySchedule.internalValue = undefined;
      this._tuesdaySchedule.internalValue = undefined;
      this._wednesdaySchedule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allWeekSchedule = value.allWeekSchedule;
      this._timeZoneName = value.timeZoneName;
      this._fridaySchedule.internalValue = value.fridaySchedule;
      this._mondaySchedule.internalValue = value.mondaySchedule;
      this._saturdaySchedule.internalValue = value.saturdaySchedule;
      this._sundaySchedule.internalValue = value.sundaySchedule;
      this._thursdaySchedule.internalValue = value.thursdaySchedule;
      this._tuesdaySchedule.internalValue = value.tuesdaySchedule;
      this._wednesdaySchedule.internalValue = value.wednesdaySchedule;
    }
  }

  // all_week_schedule - computed: false, optional: true, required: false
  private _allWeekSchedule?: number; 
  public get allWeekSchedule() {
    return this.getNumberAttribute('all_week_schedule');
  }
  public set allWeekSchedule(value: number) {
    this._allWeekSchedule = value;
  }
  public resetAllWeekSchedule() {
    this._allWeekSchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allWeekScheduleInput() {
    return this._allWeekSchedule;
  }

  // time_zone_name - computed: false, optional: true, required: false
  private _timeZoneName?: string; 
  public get timeZoneName() {
    return this.getStringAttribute('time_zone_name');
  }
  public set timeZoneName(value: string) {
    this._timeZoneName = value;
  }
  public resetTimeZoneName() {
    this._timeZoneName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneNameInput() {
    return this._timeZoneName;
  }

  // friday_schedule - computed: false, optional: true, required: false
  private _fridaySchedule = new ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList(this, "friday_schedule", true);
  public get fridaySchedule() {
    return this._fridaySchedule;
  }
  public putFridaySchedule(value: ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule[] | cdktn.IResolvable) {
    this._fridaySchedule.internalValue = value;
  }
  public resetFridaySchedule() {
    this._fridaySchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fridayScheduleInput() {
    return this._fridaySchedule.internalValue;
  }

  // monday_schedule - computed: false, optional: true, required: false
  private _mondaySchedule = new ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList(this, "monday_schedule", true);
  public get mondaySchedule() {
    return this._mondaySchedule;
  }
  public putMondaySchedule(value: ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule[] | cdktn.IResolvable) {
    this._mondaySchedule.internalValue = value;
  }
  public resetMondaySchedule() {
    this._mondaySchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mondayScheduleInput() {
    return this._mondaySchedule.internalValue;
  }

  // saturday_schedule - computed: false, optional: true, required: false
  private _saturdaySchedule = new ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList(this, "saturday_schedule", true);
  public get saturdaySchedule() {
    return this._saturdaySchedule;
  }
  public putSaturdaySchedule(value: ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule[] | cdktn.IResolvable) {
    this._saturdaySchedule.internalValue = value;
  }
  public resetSaturdaySchedule() {
    this._saturdaySchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saturdayScheduleInput() {
    return this._saturdaySchedule.internalValue;
  }

  // sunday_schedule - computed: false, optional: true, required: false
  private _sundaySchedule = new ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList(this, "sunday_schedule", true);
  public get sundaySchedule() {
    return this._sundaySchedule;
  }
  public putSundaySchedule(value: ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule[] | cdktn.IResolvable) {
    this._sundaySchedule.internalValue = value;
  }
  public resetSundaySchedule() {
    this._sundaySchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sundayScheduleInput() {
    return this._sundaySchedule.internalValue;
  }

  // thursday_schedule - computed: false, optional: true, required: false
  private _thursdaySchedule = new ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList(this, "thursday_schedule", true);
  public get thursdaySchedule() {
    return this._thursdaySchedule;
  }
  public putThursdaySchedule(value: ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule[] | cdktn.IResolvable) {
    this._thursdaySchedule.internalValue = value;
  }
  public resetThursdaySchedule() {
    this._thursdaySchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thursdayScheduleInput() {
    return this._thursdaySchedule.internalValue;
  }

  // tuesday_schedule - computed: false, optional: true, required: false
  private _tuesdaySchedule = new ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList(this, "tuesday_schedule", true);
  public get tuesdaySchedule() {
    return this._tuesdaySchedule;
  }
  public putTuesdaySchedule(value: ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule[] | cdktn.IResolvable) {
    this._tuesdaySchedule.internalValue = value;
  }
  public resetTuesdaySchedule() {
    this._tuesdaySchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tuesdayScheduleInput() {
    return this._tuesdaySchedule.internalValue;
  }

  // wednesday_schedule - computed: false, optional: true, required: false
  private _wednesdaySchedule = new ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList(this, "wednesday_schedule", true);
  public get wednesdaySchedule() {
    return this._wednesdaySchedule;
  }
  public putWednesdaySchedule(value: ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule[] | cdktn.IResolvable) {
    this._wednesdaySchedule.internalValue = value;
  }
  public resetWednesdaySchedule() {
    this._wednesdaySchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wednesdayScheduleInput() {
    return this._wednesdaySchedule.internalValue;
  }
}
export interface ManagedDevopsPoolStatefulAgent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#grace_period_time_span ManagedDevopsPool#grace_period_time_span}
  */
  readonly gracePeriodTimeSpan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#maximum_agent_lifetime ManagedDevopsPool#maximum_agent_lifetime}
  */
  readonly maximumAgentLifetime?: string;
  /**
  * automatic_resource_prediction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#automatic_resource_prediction ManagedDevopsPool#automatic_resource_prediction}
  */
  readonly automaticResourcePrediction?: ManagedDevopsPoolStatefulAgentAutomaticResourcePrediction;
  /**
  * manual_resource_prediction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#manual_resource_prediction ManagedDevopsPool#manual_resource_prediction}
  */
  readonly manualResourcePrediction?: ManagedDevopsPoolStatefulAgentManualResourcePrediction;
}

export function managedDevopsPoolStatefulAgentToTerraform(struct?: ManagedDevopsPoolStatefulAgentOutputReference | ManagedDevopsPoolStatefulAgent): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    grace_period_time_span: cdktn.stringToTerraform(struct!.gracePeriodTimeSpan),
    maximum_agent_lifetime: cdktn.stringToTerraform(struct!.maximumAgentLifetime),
    automatic_resource_prediction: managedDevopsPoolStatefulAgentAutomaticResourcePredictionToTerraform(struct!.automaticResourcePrediction),
    manual_resource_prediction: managedDevopsPoolStatefulAgentManualResourcePredictionToTerraform(struct!.manualResourcePrediction),
  }
}


export function managedDevopsPoolStatefulAgentToHclTerraform(struct?: ManagedDevopsPoolStatefulAgentOutputReference | ManagedDevopsPoolStatefulAgent): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    grace_period_time_span: {
      value: cdktn.stringToHclTerraform(struct!.gracePeriodTimeSpan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maximum_agent_lifetime: {
      value: cdktn.stringToHclTerraform(struct!.maximumAgentLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    automatic_resource_prediction: {
      value: managedDevopsPoolStatefulAgentAutomaticResourcePredictionToHclTerraform(struct!.automaticResourcePrediction),
      isBlock: true,
      type: "list",
      storageClassType: "ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionList",
    },
    manual_resource_prediction: {
      value: managedDevopsPoolStatefulAgentManualResourcePredictionToHclTerraform(struct!.manualResourcePrediction),
      isBlock: true,
      type: "list",
      storageClassType: "ManagedDevopsPoolStatefulAgentManualResourcePredictionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedDevopsPoolStatefulAgentOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagedDevopsPoolStatefulAgent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gracePeriodTimeSpan !== undefined) {
      hasAnyValues = true;
      internalValueResult.gracePeriodTimeSpan = this._gracePeriodTimeSpan;
    }
    if (this._maximumAgentLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumAgentLifetime = this._maximumAgentLifetime;
    }
    if (this._automaticResourcePrediction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.automaticResourcePrediction = this._automaticResourcePrediction?.internalValue;
    }
    if (this._manualResourcePrediction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.manualResourcePrediction = this._manualResourcePrediction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDevopsPoolStatefulAgent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gracePeriodTimeSpan = undefined;
      this._maximumAgentLifetime = undefined;
      this._automaticResourcePrediction.internalValue = undefined;
      this._manualResourcePrediction.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gracePeriodTimeSpan = value.gracePeriodTimeSpan;
      this._maximumAgentLifetime = value.maximumAgentLifetime;
      this._automaticResourcePrediction.internalValue = value.automaticResourcePrediction;
      this._manualResourcePrediction.internalValue = value.manualResourcePrediction;
    }
  }

  // grace_period_time_span - computed: false, optional: true, required: false
  private _gracePeriodTimeSpan?: string; 
  public get gracePeriodTimeSpan() {
    return this.getStringAttribute('grace_period_time_span');
  }
  public set gracePeriodTimeSpan(value: string) {
    this._gracePeriodTimeSpan = value;
  }
  public resetGracePeriodTimeSpan() {
    this._gracePeriodTimeSpan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracePeriodTimeSpanInput() {
    return this._gracePeriodTimeSpan;
  }

  // maximum_agent_lifetime - computed: false, optional: true, required: false
  private _maximumAgentLifetime?: string; 
  public get maximumAgentLifetime() {
    return this.getStringAttribute('maximum_agent_lifetime');
  }
  public set maximumAgentLifetime(value: string) {
    this._maximumAgentLifetime = value;
  }
  public resetMaximumAgentLifetime() {
    this._maximumAgentLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumAgentLifetimeInput() {
    return this._maximumAgentLifetime;
  }

  // automatic_resource_prediction - computed: false, optional: true, required: false
  private _automaticResourcePrediction = new ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference(this, "automatic_resource_prediction");
  public get automaticResourcePrediction() {
    return this._automaticResourcePrediction;
  }
  public putAutomaticResourcePrediction(value: ManagedDevopsPoolStatefulAgentAutomaticResourcePrediction) {
    this._automaticResourcePrediction.internalValue = value;
  }
  public resetAutomaticResourcePrediction() {
    this._automaticResourcePrediction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticResourcePredictionInput() {
    return this._automaticResourcePrediction.internalValue;
  }

  // manual_resource_prediction - computed: false, optional: true, required: false
  private _manualResourcePrediction = new ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference(this, "manual_resource_prediction");
  public get manualResourcePrediction() {
    return this._manualResourcePrediction;
  }
  public putManualResourcePrediction(value: ManagedDevopsPoolStatefulAgentManualResourcePrediction) {
    this._manualResourcePrediction.internalValue = value;
  }
  public resetManualResourcePrediction() {
    this._manualResourcePrediction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualResourcePredictionInput() {
    return this._manualResourcePrediction.internalValue;
  }
}
export interface ManagedDevopsPoolStatelessAgentAutomaticResourcePrediction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#prediction_preference ManagedDevopsPool#prediction_preference}
  */
  readonly predictionPreference?: string;
}

export function managedDevopsPoolStatelessAgentAutomaticResourcePredictionToTerraform(struct?: ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference | ManagedDevopsPoolStatelessAgentAutomaticResourcePrediction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    prediction_preference: cdktn.stringToTerraform(struct!.predictionPreference),
  }
}


export function managedDevopsPoolStatelessAgentAutomaticResourcePredictionToHclTerraform(struct?: ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference | ManagedDevopsPoolStatelessAgentAutomaticResourcePrediction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    prediction_preference: {
      value: cdktn.stringToHclTerraform(struct!.predictionPreference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagedDevopsPoolStatelessAgentAutomaticResourcePrediction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._predictionPreference !== undefined) {
      hasAnyValues = true;
      internalValueResult.predictionPreference = this._predictionPreference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDevopsPoolStatelessAgentAutomaticResourcePrediction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._predictionPreference = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._predictionPreference = value.predictionPreference;
    }
  }

  // prediction_preference - computed: false, optional: true, required: false
  private _predictionPreference?: string; 
  public get predictionPreference() {
    return this.getStringAttribute('prediction_preference');
  }
  public set predictionPreference(value: string) {
    this._predictionPreference = value;
  }
  public resetPredictionPreference() {
    this._predictionPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predictionPreferenceInput() {
    return this._predictionPreference;
  }
}
export interface ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}
  */
  readonly count: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}
  */
  readonly time: string;
}

export function managedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleToTerraform(struct?: ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    count: cdktn.numberToTerraform(struct!.count),
    time: cdktn.stringToTerraform(struct!.time),
  }
}


export function managedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleToHclTerraform(struct?: ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    count: {
      value: cdktn.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time: {
      value: cdktn.stringToHclTerraform(struct!.time),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._time !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._time = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._time = value.time;
    }
  }

  // count - computed: false, optional: false, required: true
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // time - computed: false, optional: false, required: true
  private _time?: string; 
  public get time() {
    return this.getStringAttribute('time');
  }
  public set time(value: string) {
    this._time = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time;
  }
}

export class ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList extends cdktn.ComplexList {
  public internalValue? : ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule[] | cdktn.IResolvable

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
  public get(index: number): ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference {
    return new ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}
  */
  readonly count: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}
  */
  readonly time: string;
}

export function managedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleToTerraform(struct?: ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    count: cdktn.numberToTerraform(struct!.count),
    time: cdktn.stringToTerraform(struct!.time),
  }
}


export function managedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleToHclTerraform(struct?: ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    count: {
      value: cdktn.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time: {
      value: cdktn.stringToHclTerraform(struct!.time),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._time !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._time = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._time = value.time;
    }
  }

  // count - computed: false, optional: false, required: true
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // time - computed: false, optional: false, required: true
  private _time?: string; 
  public get time() {
    return this.getStringAttribute('time');
  }
  public set time(value: string) {
    this._time = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time;
  }
}

export class ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList extends cdktn.ComplexList {
  public internalValue? : ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule[] | cdktn.IResolvable

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
  public get(index: number): ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference {
    return new ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}
  */
  readonly count: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}
  */
  readonly time: string;
}

export function managedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleToTerraform(struct?: ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    count: cdktn.numberToTerraform(struct!.count),
    time: cdktn.stringToTerraform(struct!.time),
  }
}


export function managedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleToHclTerraform(struct?: ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    count: {
      value: cdktn.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time: {
      value: cdktn.stringToHclTerraform(struct!.time),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._time !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._time = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._time = value.time;
    }
  }

  // count - computed: false, optional: false, required: true
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // time - computed: false, optional: false, required: true
  private _time?: string; 
  public get time() {
    return this.getStringAttribute('time');
  }
  public set time(value: string) {
    this._time = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time;
  }
}

export class ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList extends cdktn.ComplexList {
  public internalValue? : ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule[] | cdktn.IResolvable

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
  public get(index: number): ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference {
    return new ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}
  */
  readonly count: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}
  */
  readonly time: string;
}

export function managedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleToTerraform(struct?: ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    count: cdktn.numberToTerraform(struct!.count),
    time: cdktn.stringToTerraform(struct!.time),
  }
}


export function managedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleToHclTerraform(struct?: ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    count: {
      value: cdktn.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time: {
      value: cdktn.stringToHclTerraform(struct!.time),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._time !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._time = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._time = value.time;
    }
  }

  // count - computed: false, optional: false, required: true
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // time - computed: false, optional: false, required: true
  private _time?: string; 
  public get time() {
    return this.getStringAttribute('time');
  }
  public set time(value: string) {
    this._time = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time;
  }
}

export class ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList extends cdktn.ComplexList {
  public internalValue? : ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule[] | cdktn.IResolvable

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
  public get(index: number): ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference {
    return new ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}
  */
  readonly count: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}
  */
  readonly time: string;
}

export function managedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleToTerraform(struct?: ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    count: cdktn.numberToTerraform(struct!.count),
    time: cdktn.stringToTerraform(struct!.time),
  }
}


export function managedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleToHclTerraform(struct?: ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    count: {
      value: cdktn.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time: {
      value: cdktn.stringToHclTerraform(struct!.time),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._time !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._time = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._time = value.time;
    }
  }

  // count - computed: false, optional: false, required: true
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // time - computed: false, optional: false, required: true
  private _time?: string; 
  public get time() {
    return this.getStringAttribute('time');
  }
  public set time(value: string) {
    this._time = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time;
  }
}

export class ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList extends cdktn.ComplexList {
  public internalValue? : ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule[] | cdktn.IResolvable

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
  public get(index: number): ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference {
    return new ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}
  */
  readonly count: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}
  */
  readonly time: string;
}

export function managedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleToTerraform(struct?: ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    count: cdktn.numberToTerraform(struct!.count),
    time: cdktn.stringToTerraform(struct!.time),
  }
}


export function managedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleToHclTerraform(struct?: ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    count: {
      value: cdktn.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time: {
      value: cdktn.stringToHclTerraform(struct!.time),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._time !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._time = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._time = value.time;
    }
  }

  // count - computed: false, optional: false, required: true
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // time - computed: false, optional: false, required: true
  private _time?: string; 
  public get time() {
    return this.getStringAttribute('time');
  }
  public set time(value: string) {
    this._time = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time;
  }
}

export class ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList extends cdktn.ComplexList {
  public internalValue? : ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule[] | cdktn.IResolvable

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
  public get(index: number): ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference {
    return new ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}
  */
  readonly count: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}
  */
  readonly time: string;
}

export function managedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleToTerraform(struct?: ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    count: cdktn.numberToTerraform(struct!.count),
    time: cdktn.stringToTerraform(struct!.time),
  }
}


export function managedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleToHclTerraform(struct?: ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    count: {
      value: cdktn.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time: {
      value: cdktn.stringToHclTerraform(struct!.time),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._time !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._time = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._time = value.time;
    }
  }

  // count - computed: false, optional: false, required: true
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // time - computed: false, optional: false, required: true
  private _time?: string; 
  public get time() {
    return this.getStringAttribute('time');
  }
  public set time(value: string) {
    this._time = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time;
  }
}

export class ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList extends cdktn.ComplexList {
  public internalValue? : ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule[] | cdktn.IResolvable

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
  public get(index: number): ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference {
    return new ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedDevopsPoolStatelessAgentManualResourcePrediction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#all_week_schedule ManagedDevopsPool#all_week_schedule}
  */
  readonly allWeekSchedule?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#time_zone_name ManagedDevopsPool#time_zone_name}
  */
  readonly timeZoneName?: string;
  /**
  * friday_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#friday_schedule ManagedDevopsPool#friday_schedule}
  */
  readonly fridaySchedule?: ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule[] | cdktn.IResolvable;
  /**
  * monday_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#monday_schedule ManagedDevopsPool#monday_schedule}
  */
  readonly mondaySchedule?: ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule[] | cdktn.IResolvable;
  /**
  * saturday_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#saturday_schedule ManagedDevopsPool#saturday_schedule}
  */
  readonly saturdaySchedule?: ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule[] | cdktn.IResolvable;
  /**
  * sunday_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#sunday_schedule ManagedDevopsPool#sunday_schedule}
  */
  readonly sundaySchedule?: ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule[] | cdktn.IResolvable;
  /**
  * thursday_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#thursday_schedule ManagedDevopsPool#thursday_schedule}
  */
  readonly thursdaySchedule?: ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule[] | cdktn.IResolvable;
  /**
  * tuesday_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#tuesday_schedule ManagedDevopsPool#tuesday_schedule}
  */
  readonly tuesdaySchedule?: ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule[] | cdktn.IResolvable;
  /**
  * wednesday_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#wednesday_schedule ManagedDevopsPool#wednesday_schedule}
  */
  readonly wednesdaySchedule?: ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule[] | cdktn.IResolvable;
}

export function managedDevopsPoolStatelessAgentManualResourcePredictionToTerraform(struct?: ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference | ManagedDevopsPoolStatelessAgentManualResourcePrediction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    all_week_schedule: cdktn.numberToTerraform(struct!.allWeekSchedule),
    time_zone_name: cdktn.stringToTerraform(struct!.timeZoneName),
    friday_schedule: cdktn.listMapper(managedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleToTerraform, true)(struct!.fridaySchedule),
    monday_schedule: cdktn.listMapper(managedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleToTerraform, true)(struct!.mondaySchedule),
    saturday_schedule: cdktn.listMapper(managedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleToTerraform, true)(struct!.saturdaySchedule),
    sunday_schedule: cdktn.listMapper(managedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleToTerraform, true)(struct!.sundaySchedule),
    thursday_schedule: cdktn.listMapper(managedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleToTerraform, true)(struct!.thursdaySchedule),
    tuesday_schedule: cdktn.listMapper(managedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleToTerraform, true)(struct!.tuesdaySchedule),
    wednesday_schedule: cdktn.listMapper(managedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleToTerraform, true)(struct!.wednesdaySchedule),
  }
}


export function managedDevopsPoolStatelessAgentManualResourcePredictionToHclTerraform(struct?: ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference | ManagedDevopsPoolStatelessAgentManualResourcePrediction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    all_week_schedule: {
      value: cdktn.numberToHclTerraform(struct!.allWeekSchedule),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_zone_name: {
      value: cdktn.stringToHclTerraform(struct!.timeZoneName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    friday_schedule: {
      value: cdktn.listMapperHcl(managedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleToHclTerraform, true)(struct!.fridaySchedule),
      isBlock: true,
      type: "set",
      storageClassType: "ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList",
    },
    monday_schedule: {
      value: cdktn.listMapperHcl(managedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleToHclTerraform, true)(struct!.mondaySchedule),
      isBlock: true,
      type: "set",
      storageClassType: "ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList",
    },
    saturday_schedule: {
      value: cdktn.listMapperHcl(managedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleToHclTerraform, true)(struct!.saturdaySchedule),
      isBlock: true,
      type: "set",
      storageClassType: "ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList",
    },
    sunday_schedule: {
      value: cdktn.listMapperHcl(managedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleToHclTerraform, true)(struct!.sundaySchedule),
      isBlock: true,
      type: "set",
      storageClassType: "ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList",
    },
    thursday_schedule: {
      value: cdktn.listMapperHcl(managedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleToHclTerraform, true)(struct!.thursdaySchedule),
      isBlock: true,
      type: "set",
      storageClassType: "ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList",
    },
    tuesday_schedule: {
      value: cdktn.listMapperHcl(managedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleToHclTerraform, true)(struct!.tuesdaySchedule),
      isBlock: true,
      type: "set",
      storageClassType: "ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList",
    },
    wednesday_schedule: {
      value: cdktn.listMapperHcl(managedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleToHclTerraform, true)(struct!.wednesdaySchedule),
      isBlock: true,
      type: "set",
      storageClassType: "ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagedDevopsPoolStatelessAgentManualResourcePrediction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allWeekSchedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.allWeekSchedule = this._allWeekSchedule;
    }
    if (this._timeZoneName !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZoneName = this._timeZoneName;
    }
    if (this._fridaySchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fridaySchedule = this._fridaySchedule?.internalValue;
    }
    if (this._mondaySchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mondaySchedule = this._mondaySchedule?.internalValue;
    }
    if (this._saturdaySchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.saturdaySchedule = this._saturdaySchedule?.internalValue;
    }
    if (this._sundaySchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sundaySchedule = this._sundaySchedule?.internalValue;
    }
    if (this._thursdaySchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.thursdaySchedule = this._thursdaySchedule?.internalValue;
    }
    if (this._tuesdaySchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tuesdaySchedule = this._tuesdaySchedule?.internalValue;
    }
    if (this._wednesdaySchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wednesdaySchedule = this._wednesdaySchedule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDevopsPoolStatelessAgentManualResourcePrediction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allWeekSchedule = undefined;
      this._timeZoneName = undefined;
      this._fridaySchedule.internalValue = undefined;
      this._mondaySchedule.internalValue = undefined;
      this._saturdaySchedule.internalValue = undefined;
      this._sundaySchedule.internalValue = undefined;
      this._thursdaySchedule.internalValue = undefined;
      this._tuesdaySchedule.internalValue = undefined;
      this._wednesdaySchedule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allWeekSchedule = value.allWeekSchedule;
      this._timeZoneName = value.timeZoneName;
      this._fridaySchedule.internalValue = value.fridaySchedule;
      this._mondaySchedule.internalValue = value.mondaySchedule;
      this._saturdaySchedule.internalValue = value.saturdaySchedule;
      this._sundaySchedule.internalValue = value.sundaySchedule;
      this._thursdaySchedule.internalValue = value.thursdaySchedule;
      this._tuesdaySchedule.internalValue = value.tuesdaySchedule;
      this._wednesdaySchedule.internalValue = value.wednesdaySchedule;
    }
  }

  // all_week_schedule - computed: false, optional: true, required: false
  private _allWeekSchedule?: number; 
  public get allWeekSchedule() {
    return this.getNumberAttribute('all_week_schedule');
  }
  public set allWeekSchedule(value: number) {
    this._allWeekSchedule = value;
  }
  public resetAllWeekSchedule() {
    this._allWeekSchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allWeekScheduleInput() {
    return this._allWeekSchedule;
  }

  // time_zone_name - computed: false, optional: true, required: false
  private _timeZoneName?: string; 
  public get timeZoneName() {
    return this.getStringAttribute('time_zone_name');
  }
  public set timeZoneName(value: string) {
    this._timeZoneName = value;
  }
  public resetTimeZoneName() {
    this._timeZoneName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneNameInput() {
    return this._timeZoneName;
  }

  // friday_schedule - computed: false, optional: true, required: false
  private _fridaySchedule = new ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList(this, "friday_schedule", true);
  public get fridaySchedule() {
    return this._fridaySchedule;
  }
  public putFridaySchedule(value: ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule[] | cdktn.IResolvable) {
    this._fridaySchedule.internalValue = value;
  }
  public resetFridaySchedule() {
    this._fridaySchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fridayScheduleInput() {
    return this._fridaySchedule.internalValue;
  }

  // monday_schedule - computed: false, optional: true, required: false
  private _mondaySchedule = new ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList(this, "monday_schedule", true);
  public get mondaySchedule() {
    return this._mondaySchedule;
  }
  public putMondaySchedule(value: ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule[] | cdktn.IResolvable) {
    this._mondaySchedule.internalValue = value;
  }
  public resetMondaySchedule() {
    this._mondaySchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mondayScheduleInput() {
    return this._mondaySchedule.internalValue;
  }

  // saturday_schedule - computed: false, optional: true, required: false
  private _saturdaySchedule = new ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList(this, "saturday_schedule", true);
  public get saturdaySchedule() {
    return this._saturdaySchedule;
  }
  public putSaturdaySchedule(value: ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule[] | cdktn.IResolvable) {
    this._saturdaySchedule.internalValue = value;
  }
  public resetSaturdaySchedule() {
    this._saturdaySchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saturdayScheduleInput() {
    return this._saturdaySchedule.internalValue;
  }

  // sunday_schedule - computed: false, optional: true, required: false
  private _sundaySchedule = new ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList(this, "sunday_schedule", true);
  public get sundaySchedule() {
    return this._sundaySchedule;
  }
  public putSundaySchedule(value: ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule[] | cdktn.IResolvable) {
    this._sundaySchedule.internalValue = value;
  }
  public resetSundaySchedule() {
    this._sundaySchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sundayScheduleInput() {
    return this._sundaySchedule.internalValue;
  }

  // thursday_schedule - computed: false, optional: true, required: false
  private _thursdaySchedule = new ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList(this, "thursday_schedule", true);
  public get thursdaySchedule() {
    return this._thursdaySchedule;
  }
  public putThursdaySchedule(value: ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule[] | cdktn.IResolvable) {
    this._thursdaySchedule.internalValue = value;
  }
  public resetThursdaySchedule() {
    this._thursdaySchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thursdayScheduleInput() {
    return this._thursdaySchedule.internalValue;
  }

  // tuesday_schedule - computed: false, optional: true, required: false
  private _tuesdaySchedule = new ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList(this, "tuesday_schedule", true);
  public get tuesdaySchedule() {
    return this._tuesdaySchedule;
  }
  public putTuesdaySchedule(value: ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule[] | cdktn.IResolvable) {
    this._tuesdaySchedule.internalValue = value;
  }
  public resetTuesdaySchedule() {
    this._tuesdaySchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tuesdayScheduleInput() {
    return this._tuesdaySchedule.internalValue;
  }

  // wednesday_schedule - computed: false, optional: true, required: false
  private _wednesdaySchedule = new ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList(this, "wednesday_schedule", true);
  public get wednesdaySchedule() {
    return this._wednesdaySchedule;
  }
  public putWednesdaySchedule(value: ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule[] | cdktn.IResolvable) {
    this._wednesdaySchedule.internalValue = value;
  }
  public resetWednesdaySchedule() {
    this._wednesdaySchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wednesdayScheduleInput() {
    return this._wednesdaySchedule.internalValue;
  }
}
export interface ManagedDevopsPoolStatelessAgent {
  /**
  * automatic_resource_prediction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#automatic_resource_prediction ManagedDevopsPool#automatic_resource_prediction}
  */
  readonly automaticResourcePrediction?: ManagedDevopsPoolStatelessAgentAutomaticResourcePrediction;
  /**
  * manual_resource_prediction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#manual_resource_prediction ManagedDevopsPool#manual_resource_prediction}
  */
  readonly manualResourcePrediction?: ManagedDevopsPoolStatelessAgentManualResourcePrediction;
}

export function managedDevopsPoolStatelessAgentToTerraform(struct?: ManagedDevopsPoolStatelessAgentOutputReference | ManagedDevopsPoolStatelessAgent): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    automatic_resource_prediction: managedDevopsPoolStatelessAgentAutomaticResourcePredictionToTerraform(struct!.automaticResourcePrediction),
    manual_resource_prediction: managedDevopsPoolStatelessAgentManualResourcePredictionToTerraform(struct!.manualResourcePrediction),
  }
}


export function managedDevopsPoolStatelessAgentToHclTerraform(struct?: ManagedDevopsPoolStatelessAgentOutputReference | ManagedDevopsPoolStatelessAgent): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    automatic_resource_prediction: {
      value: managedDevopsPoolStatelessAgentAutomaticResourcePredictionToHclTerraform(struct!.automaticResourcePrediction),
      isBlock: true,
      type: "list",
      storageClassType: "ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionList",
    },
    manual_resource_prediction: {
      value: managedDevopsPoolStatelessAgentManualResourcePredictionToHclTerraform(struct!.manualResourcePrediction),
      isBlock: true,
      type: "list",
      storageClassType: "ManagedDevopsPoolStatelessAgentManualResourcePredictionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedDevopsPoolStatelessAgentOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagedDevopsPoolStatelessAgent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._automaticResourcePrediction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.automaticResourcePrediction = this._automaticResourcePrediction?.internalValue;
    }
    if (this._manualResourcePrediction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.manualResourcePrediction = this._manualResourcePrediction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDevopsPoolStatelessAgent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._automaticResourcePrediction.internalValue = undefined;
      this._manualResourcePrediction.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._automaticResourcePrediction.internalValue = value.automaticResourcePrediction;
      this._manualResourcePrediction.internalValue = value.manualResourcePrediction;
    }
  }

  // automatic_resource_prediction - computed: false, optional: true, required: false
  private _automaticResourcePrediction = new ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference(this, "automatic_resource_prediction");
  public get automaticResourcePrediction() {
    return this._automaticResourcePrediction;
  }
  public putAutomaticResourcePrediction(value: ManagedDevopsPoolStatelessAgentAutomaticResourcePrediction) {
    this._automaticResourcePrediction.internalValue = value;
  }
  public resetAutomaticResourcePrediction() {
    this._automaticResourcePrediction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticResourcePredictionInput() {
    return this._automaticResourcePrediction.internalValue;
  }

  // manual_resource_prediction - computed: false, optional: true, required: false
  private _manualResourcePrediction = new ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference(this, "manual_resource_prediction");
  public get manualResourcePrediction() {
    return this._manualResourcePrediction;
  }
  public putManualResourcePrediction(value: ManagedDevopsPoolStatelessAgentManualResourcePrediction) {
    this._manualResourcePrediction.internalValue = value;
  }
  public resetManualResourcePrediction() {
    this._manualResourcePrediction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualResourcePredictionInput() {
    return this._manualResourcePrediction.internalValue;
  }
}
export interface ManagedDevopsPoolTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#create ManagedDevopsPool#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#delete ManagedDevopsPool#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#read ManagedDevopsPool#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#update ManagedDevopsPool#update}
  */
  readonly update?: string;
}

export function managedDevopsPoolTimeoutsToTerraform(struct?: ManagedDevopsPoolTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
    read: cdktn.stringToTerraform(struct!.read),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function managedDevopsPoolTimeoutsToHclTerraform(struct?: ManagedDevopsPoolTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    create: {
      value: cdktn.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktn.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktn.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktn.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedDevopsPoolTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ManagedDevopsPoolTimeouts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDevopsPoolTimeouts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
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

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
export interface ManagedDevopsPoolVirtualMachineScaleSetFabricImage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#aliases ManagedDevopsPool#aliases}
  */
  readonly aliases?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#buffer ManagedDevopsPool#buffer}
  */
  readonly buffer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#id ManagedDevopsPool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#well_known_image_name ManagedDevopsPool#well_known_image_name}
  */
  readonly wellKnownImageName?: string;
}

export function managedDevopsPoolVirtualMachineScaleSetFabricImageToTerraform(struct?: ManagedDevopsPoolVirtualMachineScaleSetFabricImage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aliases: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.aliases),
    buffer: cdktn.stringToTerraform(struct!.buffer),
    id: cdktn.stringToTerraform(struct!.id),
    well_known_image_name: cdktn.stringToTerraform(struct!.wellKnownImageName),
  }
}


export function managedDevopsPoolVirtualMachineScaleSetFabricImageToHclTerraform(struct?: ManagedDevopsPoolVirtualMachineScaleSetFabricImage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    aliases: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.aliases),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    buffer: {
      value: cdktn.stringToHclTerraform(struct!.buffer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    well_known_image_name: {
      value: cdktn.stringToHclTerraform(struct!.wellKnownImageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ManagedDevopsPoolVirtualMachineScaleSetFabricImage | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aliases !== undefined) {
      hasAnyValues = true;
      internalValueResult.aliases = this._aliases;
    }
    if (this._buffer !== undefined) {
      hasAnyValues = true;
      internalValueResult.buffer = this._buffer;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._wellKnownImageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.wellKnownImageName = this._wellKnownImageName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDevopsPoolVirtualMachineScaleSetFabricImage | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aliases = undefined;
      this._buffer = undefined;
      this._id = undefined;
      this._wellKnownImageName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aliases = value.aliases;
      this._buffer = value.buffer;
      this._id = value.id;
      this._wellKnownImageName = value.wellKnownImageName;
    }
  }

  // aliases - computed: false, optional: true, required: false
  private _aliases?: string[]; 
  public get aliases() {
    return this.getListAttribute('aliases');
  }
  public set aliases(value: string[]) {
    this._aliases = value;
  }
  public resetAliases() {
    this._aliases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasesInput() {
    return this._aliases;
  }

  // buffer - computed: false, optional: true, required: false
  private _buffer?: string; 
  public get buffer() {
    return this.getStringAttribute('buffer');
  }
  public set buffer(value: string) {
    this._buffer = value;
  }
  public resetBuffer() {
    this._buffer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferInput() {
    return this._buffer;
  }

  // id - computed: false, optional: true, required: false
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

  // well_known_image_name - computed: false, optional: true, required: false
  private _wellKnownImageName?: string; 
  public get wellKnownImageName() {
    return this.getStringAttribute('well_known_image_name');
  }
  public set wellKnownImageName(value: string) {
    this._wellKnownImageName = value;
  }
  public resetWellKnownImageName() {
    this._wellKnownImageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wellKnownImageNameInput() {
    return this._wellKnownImageName;
  }
}

export class ManagedDevopsPoolVirtualMachineScaleSetFabricImageList extends cdktn.ComplexList {
  public internalValue? : ManagedDevopsPoolVirtualMachineScaleSetFabricImage[] | cdktn.IResolvable

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
  public get(index: number): ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference {
    return new ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#certificate_store_location ManagedDevopsPool#certificate_store_location}
  */
  readonly certificateStoreLocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#certificate_store_name ManagedDevopsPool#certificate_store_name}
  */
  readonly certificateStoreName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#key_export_enabled ManagedDevopsPool#key_export_enabled}
  */
  readonly keyExportEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#key_vault_certificate_ids ManagedDevopsPool#key_vault_certificate_ids}
  */
  readonly keyVaultCertificateIds: string[];
}

export function managedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementToTerraform(struct?: ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference | ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    certificate_store_location: cdktn.stringToTerraform(struct!.certificateStoreLocation),
    certificate_store_name: cdktn.stringToTerraform(struct!.certificateStoreName),
    key_export_enabled: cdktn.booleanToTerraform(struct!.keyExportEnabled),
    key_vault_certificate_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.keyVaultCertificateIds),
  }
}


export function managedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementToHclTerraform(struct?: ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference | ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    certificate_store_location: {
      value: cdktn.stringToHclTerraform(struct!.certificateStoreLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate_store_name: {
      value: cdktn.stringToHclTerraform(struct!.certificateStoreName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_export_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.keyExportEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key_vault_certificate_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.keyVaultCertificateIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateStoreLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateStoreLocation = this._certificateStoreLocation;
    }
    if (this._certificateStoreName !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateStoreName = this._certificateStoreName;
    }
    if (this._keyExportEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyExportEnabled = this._keyExportEnabled;
    }
    if (this._keyVaultCertificateIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyVaultCertificateIds = this._keyVaultCertificateIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certificateStoreLocation = undefined;
      this._certificateStoreName = undefined;
      this._keyExportEnabled = undefined;
      this._keyVaultCertificateIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certificateStoreLocation = value.certificateStoreLocation;
      this._certificateStoreName = value.certificateStoreName;
      this._keyExportEnabled = value.keyExportEnabled;
      this._keyVaultCertificateIds = value.keyVaultCertificateIds;
    }
  }

  // certificate_store_location - computed: false, optional: true, required: false
  private _certificateStoreLocation?: string; 
  public get certificateStoreLocation() {
    return this.getStringAttribute('certificate_store_location');
  }
  public set certificateStoreLocation(value: string) {
    this._certificateStoreLocation = value;
  }
  public resetCertificateStoreLocation() {
    this._certificateStoreLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateStoreLocationInput() {
    return this._certificateStoreLocation;
  }

  // certificate_store_name - computed: false, optional: true, required: false
  private _certificateStoreName?: string; 
  public get certificateStoreName() {
    return this.getStringAttribute('certificate_store_name');
  }
  public set certificateStoreName(value: string) {
    this._certificateStoreName = value;
  }
  public resetCertificateStoreName() {
    this._certificateStoreName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateStoreNameInput() {
    return this._certificateStoreName;
  }

  // key_export_enabled - computed: false, optional: true, required: false
  private _keyExportEnabled?: boolean | cdktn.IResolvable; 
  public get keyExportEnabled() {
    return this.getBooleanAttribute('key_export_enabled');
  }
  public set keyExportEnabled(value: boolean | cdktn.IResolvable) {
    this._keyExportEnabled = value;
  }
  public resetKeyExportEnabled() {
    this._keyExportEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyExportEnabledInput() {
    return this._keyExportEnabled;
  }

  // key_vault_certificate_ids - computed: false, optional: false, required: true
  private _keyVaultCertificateIds?: string[]; 
  public get keyVaultCertificateIds() {
    return this.getListAttribute('key_vault_certificate_ids');
  }
  public set keyVaultCertificateIds(value: string[]) {
    this._keyVaultCertificateIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultCertificateIdsInput() {
    return this._keyVaultCertificateIds;
  }
}
export interface ManagedDevopsPoolVirtualMachineScaleSetFabricSecurity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#interactive_logon_enabled ManagedDevopsPool#interactive_logon_enabled}
  */
  readonly interactiveLogonEnabled?: boolean | cdktn.IResolvable;
  /**
  * key_vault_management block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#key_vault_management ManagedDevopsPool#key_vault_management}
  */
  readonly keyVaultManagement?: ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement;
}

export function managedDevopsPoolVirtualMachineScaleSetFabricSecurityToTerraform(struct?: ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference | ManagedDevopsPoolVirtualMachineScaleSetFabricSecurity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    interactive_logon_enabled: cdktn.booleanToTerraform(struct!.interactiveLogonEnabled),
    key_vault_management: managedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementToTerraform(struct!.keyVaultManagement),
  }
}


export function managedDevopsPoolVirtualMachineScaleSetFabricSecurityToHclTerraform(struct?: ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference | ManagedDevopsPoolVirtualMachineScaleSetFabricSecurity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    interactive_logon_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.interactiveLogonEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key_vault_management: {
      value: managedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementToHclTerraform(struct!.keyVaultManagement),
      isBlock: true,
      type: "list",
      storageClassType: "ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagedDevopsPoolVirtualMachineScaleSetFabricSecurity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interactiveLogonEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.interactiveLogonEnabled = this._interactiveLogonEnabled;
    }
    if (this._keyVaultManagement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyVaultManagement = this._keyVaultManagement?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDevopsPoolVirtualMachineScaleSetFabricSecurity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interactiveLogonEnabled = undefined;
      this._keyVaultManagement.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interactiveLogonEnabled = value.interactiveLogonEnabled;
      this._keyVaultManagement.internalValue = value.keyVaultManagement;
    }
  }

  // interactive_logon_enabled - computed: false, optional: true, required: false
  private _interactiveLogonEnabled?: boolean | cdktn.IResolvable; 
  public get interactiveLogonEnabled() {
    return this.getBooleanAttribute('interactive_logon_enabled');
  }
  public set interactiveLogonEnabled(value: boolean | cdktn.IResolvable) {
    this._interactiveLogonEnabled = value;
  }
  public resetInteractiveLogonEnabled() {
    this._interactiveLogonEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interactiveLogonEnabledInput() {
    return this._interactiveLogonEnabled;
  }

  // key_vault_management - computed: false, optional: true, required: false
  private _keyVaultManagement = new ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference(this, "key_vault_management");
  public get keyVaultManagement() {
    return this._keyVaultManagement;
  }
  public putKeyVaultManagement(value: ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement) {
    this._keyVaultManagement.internalValue = value;
  }
  public resetKeyVaultManagement() {
    this._keyVaultManagement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultManagementInput() {
    return this._keyVaultManagement.internalValue;
  }
}
export interface ManagedDevopsPoolVirtualMachineScaleSetFabricStorage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#caching ManagedDevopsPool#caching}
  */
  readonly caching?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#disk_size_in_gb ManagedDevopsPool#disk_size_in_gb}
  */
  readonly diskSizeInGb: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#drive_letter ManagedDevopsPool#drive_letter}
  */
  readonly driveLetter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#storage_account_type ManagedDevopsPool#storage_account_type}
  */
  readonly storageAccountType?: string;
}

export function managedDevopsPoolVirtualMachineScaleSetFabricStorageToTerraform(struct?: ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference | ManagedDevopsPoolVirtualMachineScaleSetFabricStorage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    caching: cdktn.stringToTerraform(struct!.caching),
    disk_size_in_gb: cdktn.numberToTerraform(struct!.diskSizeInGb),
    drive_letter: cdktn.stringToTerraform(struct!.driveLetter),
    storage_account_type: cdktn.stringToTerraform(struct!.storageAccountType),
  }
}


export function managedDevopsPoolVirtualMachineScaleSetFabricStorageToHclTerraform(struct?: ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference | ManagedDevopsPoolVirtualMachineScaleSetFabricStorage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    caching: {
      value: cdktn.stringToHclTerraform(struct!.caching),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_size_in_gb: {
      value: cdktn.numberToHclTerraform(struct!.diskSizeInGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drive_letter: {
      value: cdktn.stringToHclTerraform(struct!.driveLetter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_account_type: {
      value: cdktn.stringToHclTerraform(struct!.storageAccountType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagedDevopsPoolVirtualMachineScaleSetFabricStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caching !== undefined) {
      hasAnyValues = true;
      internalValueResult.caching = this._caching;
    }
    if (this._diskSizeInGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSizeInGb = this._diskSizeInGb;
    }
    if (this._driveLetter !== undefined) {
      hasAnyValues = true;
      internalValueResult.driveLetter = this._driveLetter;
    }
    if (this._storageAccountType !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageAccountType = this._storageAccountType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDevopsPoolVirtualMachineScaleSetFabricStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caching = undefined;
      this._diskSizeInGb = undefined;
      this._driveLetter = undefined;
      this._storageAccountType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caching = value.caching;
      this._diskSizeInGb = value.diskSizeInGb;
      this._driveLetter = value.driveLetter;
      this._storageAccountType = value.storageAccountType;
    }
  }

  // caching - computed: false, optional: true, required: false
  private _caching?: string; 
  public get caching() {
    return this.getStringAttribute('caching');
  }
  public set caching(value: string) {
    this._caching = value;
  }
  public resetCaching() {
    this._caching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cachingInput() {
    return this._caching;
  }

  // disk_size_in_gb - computed: false, optional: false, required: true
  private _diskSizeInGb?: number; 
  public get diskSizeInGb() {
    return this.getNumberAttribute('disk_size_in_gb');
  }
  public set diskSizeInGb(value: number) {
    this._diskSizeInGb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeInGbInput() {
    return this._diskSizeInGb;
  }

  // drive_letter - computed: false, optional: true, required: false
  private _driveLetter?: string; 
  public get driveLetter() {
    return this.getStringAttribute('drive_letter');
  }
  public set driveLetter(value: string) {
    this._driveLetter = value;
  }
  public resetDriveLetter() {
    this._driveLetter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driveLetterInput() {
    return this._driveLetter;
  }

  // storage_account_type - computed: false, optional: true, required: false
  private _storageAccountType?: string; 
  public get storageAccountType() {
    return this.getStringAttribute('storage_account_type');
  }
  public set storageAccountType(value: string) {
    this._storageAccountType = value;
  }
  public resetStorageAccountType() {
    this._storageAccountType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountTypeInput() {
    return this._storageAccountType;
  }
}
export interface ManagedDevopsPoolVirtualMachineScaleSetFabric {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#os_disk_storage_account_type ManagedDevopsPool#os_disk_storage_account_type}
  */
  readonly osDiskStorageAccountType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#sku_name ManagedDevopsPool#sku_name}
  */
  readonly skuName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#subnet_id ManagedDevopsPool#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * image block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#image ManagedDevopsPool#image}
  */
  readonly image: ManagedDevopsPoolVirtualMachineScaleSetFabricImage[] | cdktn.IResolvable;
  /**
  * security block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#security ManagedDevopsPool#security}
  */
  readonly security?: ManagedDevopsPoolVirtualMachineScaleSetFabricSecurity;
  /**
  * storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#storage ManagedDevopsPool#storage}
  */
  readonly storage?: ManagedDevopsPoolVirtualMachineScaleSetFabricStorage;
}

export function managedDevopsPoolVirtualMachineScaleSetFabricToTerraform(struct?: ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference | ManagedDevopsPoolVirtualMachineScaleSetFabric): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    os_disk_storage_account_type: cdktn.stringToTerraform(struct!.osDiskStorageAccountType),
    sku_name: cdktn.stringToTerraform(struct!.skuName),
    subnet_id: cdktn.stringToTerraform(struct!.subnetId),
    image: cdktn.listMapper(managedDevopsPoolVirtualMachineScaleSetFabricImageToTerraform, true)(struct!.image),
    security: managedDevopsPoolVirtualMachineScaleSetFabricSecurityToTerraform(struct!.security),
    storage: managedDevopsPoolVirtualMachineScaleSetFabricStorageToTerraform(struct!.storage),
  }
}


export function managedDevopsPoolVirtualMachineScaleSetFabricToHclTerraform(struct?: ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference | ManagedDevopsPoolVirtualMachineScaleSetFabric): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    os_disk_storage_account_type: {
      value: cdktn.stringToHclTerraform(struct!.osDiskStorageAccountType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sku_name: {
      value: cdktn.stringToHclTerraform(struct!.skuName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktn.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image: {
      value: cdktn.listMapperHcl(managedDevopsPoolVirtualMachineScaleSetFabricImageToHclTerraform, true)(struct!.image),
      isBlock: true,
      type: "list",
      storageClassType: "ManagedDevopsPoolVirtualMachineScaleSetFabricImageList",
    },
    security: {
      value: managedDevopsPoolVirtualMachineScaleSetFabricSecurityToHclTerraform(struct!.security),
      isBlock: true,
      type: "list",
      storageClassType: "ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityList",
    },
    storage: {
      value: managedDevopsPoolVirtualMachineScaleSetFabricStorageToHclTerraform(struct!.storage),
      isBlock: true,
      type: "list",
      storageClassType: "ManagedDevopsPoolVirtualMachineScaleSetFabricStorageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagedDevopsPoolVirtualMachineScaleSetFabric | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._osDiskStorageAccountType !== undefined) {
      hasAnyValues = true;
      internalValueResult.osDiskStorageAccountType = this._osDiskStorageAccountType;
    }
    if (this._skuName !== undefined) {
      hasAnyValues = true;
      internalValueResult.skuName = this._skuName;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._image?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image?.internalValue;
    }
    if (this._security?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.security = this._security?.internalValue;
    }
    if (this._storage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDevopsPoolVirtualMachineScaleSetFabric | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._osDiskStorageAccountType = undefined;
      this._skuName = undefined;
      this._subnetId = undefined;
      this._image.internalValue = undefined;
      this._security.internalValue = undefined;
      this._storage.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._osDiskStorageAccountType = value.osDiskStorageAccountType;
      this._skuName = value.skuName;
      this._subnetId = value.subnetId;
      this._image.internalValue = value.image;
      this._security.internalValue = value.security;
      this._storage.internalValue = value.storage;
    }
  }

  // os_disk_storage_account_type - computed: false, optional: true, required: false
  private _osDiskStorageAccountType?: string; 
  public get osDiskStorageAccountType() {
    return this.getStringAttribute('os_disk_storage_account_type');
  }
  public set osDiskStorageAccountType(value: string) {
    this._osDiskStorageAccountType = value;
  }
  public resetOsDiskStorageAccountType() {
    this._osDiskStorageAccountType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osDiskStorageAccountTypeInput() {
    return this._osDiskStorageAccountType;
  }

  // sku_name - computed: false, optional: false, required: true
  private _skuName?: string; 
  public get skuName() {
    return this.getStringAttribute('sku_name');
  }
  public set skuName(value: string) {
    this._skuName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skuNameInput() {
    return this._skuName;
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // image - computed: false, optional: false, required: true
  private _image = new ManagedDevopsPoolVirtualMachineScaleSetFabricImageList(this, "image", false);
  public get image() {
    return this._image;
  }
  public putImage(value: ManagedDevopsPoolVirtualMachineScaleSetFabricImage[] | cdktn.IResolvable) {
    this._image.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image.internalValue;
  }

  // security - computed: false, optional: true, required: false
  private _security = new ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference(this, "security");
  public get security() {
    return this._security;
  }
  public putSecurity(value: ManagedDevopsPoolVirtualMachineScaleSetFabricSecurity) {
    this._security.internalValue = value;
  }
  public resetSecurity() {
    this._security.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityInput() {
    return this._security.internalValue;
  }

  // storage - computed: false, optional: true, required: false
  private _storage = new ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference(this, "storage");
  public get storage() {
    return this._storage;
  }
  public putStorage(value: ManagedDevopsPoolVirtualMachineScaleSetFabricStorage) {
    this._storage.internalValue = value;
  }
  public resetStorage() {
    this._storage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool azurerm_managed_devops_pool}
*/
export class ManagedDevopsPool extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_managed_devops_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ManagedDevopsPool resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagedDevopsPool to import
  * @param importFromId The id of the existing ManagedDevopsPool that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagedDevopsPool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_managed_devops_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool azurerm_managed_devops_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagedDevopsPoolConfig
  */
  public constructor(scope: Construct, id: string, config: ManagedDevopsPoolConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_managed_devops_pool',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.81.0',
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
    this._devCenterProjectId = config.devCenterProjectId;
    this._id = config.id;
    this._location = config.location;
    this._maximumConcurrency = config.maximumConcurrency;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._workFolder = config.workFolder;
    this._azureDevopsOrganization.internalValue = config.azureDevopsOrganization;
    this._identity.internalValue = config.identity;
    this._statefulAgent.internalValue = config.statefulAgent;
    this._statelessAgent.internalValue = config.statelessAgent;
    this._timeouts.internalValue = config.timeouts;
    this._virtualMachineScaleSetFabric.internalValue = config.virtualMachineScaleSetFabric;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dev_center_project_id - computed: false, optional: false, required: true
  private _devCenterProjectId?: string; 
  public get devCenterProjectId() {
    return this.getStringAttribute('dev_center_project_id');
  }
  public set devCenterProjectId(value: string) {
    this._devCenterProjectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get devCenterProjectIdInput() {
    return this._devCenterProjectId;
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

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // maximum_concurrency - computed: false, optional: false, required: true
  private _maximumConcurrency?: number; 
  public get maximumConcurrency() {
    return this.getNumberAttribute('maximum_concurrency');
  }
  public set maximumConcurrency(value: number) {
    this._maximumConcurrency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumConcurrencyInput() {
    return this._maximumConcurrency;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // work_folder - computed: false, optional: true, required: false
  private _workFolder?: string; 
  public get workFolder() {
    return this.getStringAttribute('work_folder');
  }
  public set workFolder(value: string) {
    this._workFolder = value;
  }
  public resetWorkFolder() {
    this._workFolder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workFolderInput() {
    return this._workFolder;
  }

  // azure_devops_organization - computed: false, optional: false, required: true
  private _azureDevopsOrganization = new ManagedDevopsPoolAzureDevopsOrganizationOutputReference(this, "azure_devops_organization");
  public get azureDevopsOrganization() {
    return this._azureDevopsOrganization;
  }
  public putAzureDevopsOrganization(value: ManagedDevopsPoolAzureDevopsOrganization) {
    this._azureDevopsOrganization.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get azureDevopsOrganizationInput() {
    return this._azureDevopsOrganization.internalValue;
  }

  // identity - computed: false, optional: true, required: false
  private _identity = new ManagedDevopsPoolIdentityOutputReference(this, "identity");
  public get identity() {
    return this._identity;
  }
  public putIdentity(value: ManagedDevopsPoolIdentity) {
    this._identity.internalValue = value;
  }
  public resetIdentity() {
    this._identity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity.internalValue;
  }

  // stateful_agent - computed: false, optional: true, required: false
  private _statefulAgent = new ManagedDevopsPoolStatefulAgentOutputReference(this, "stateful_agent");
  public get statefulAgent() {
    return this._statefulAgent;
  }
  public putStatefulAgent(value: ManagedDevopsPoolStatefulAgent) {
    this._statefulAgent.internalValue = value;
  }
  public resetStatefulAgent() {
    this._statefulAgent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statefulAgentInput() {
    return this._statefulAgent.internalValue;
  }

  // stateless_agent - computed: false, optional: true, required: false
  private _statelessAgent = new ManagedDevopsPoolStatelessAgentOutputReference(this, "stateless_agent");
  public get statelessAgent() {
    return this._statelessAgent;
  }
  public putStatelessAgent(value: ManagedDevopsPoolStatelessAgent) {
    this._statelessAgent.internalValue = value;
  }
  public resetStatelessAgent() {
    this._statelessAgent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statelessAgentInput() {
    return this._statelessAgent.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ManagedDevopsPoolTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ManagedDevopsPoolTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // virtual_machine_scale_set_fabric - computed: false, optional: false, required: true
  private _virtualMachineScaleSetFabric = new ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference(this, "virtual_machine_scale_set_fabric");
  public get virtualMachineScaleSetFabric() {
    return this._virtualMachineScaleSetFabric;
  }
  public putVirtualMachineScaleSetFabric(value: ManagedDevopsPoolVirtualMachineScaleSetFabric) {
    this._virtualMachineScaleSetFabric.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualMachineScaleSetFabricInput() {
    return this._virtualMachineScaleSetFabric.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dev_center_project_id: cdktn.stringToTerraform(this._devCenterProjectId),
      id: cdktn.stringToTerraform(this._id),
      location: cdktn.stringToTerraform(this._location),
      maximum_concurrency: cdktn.numberToTerraform(this._maximumConcurrency),
      name: cdktn.stringToTerraform(this._name),
      resource_group_name: cdktn.stringToTerraform(this._resourceGroupName),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      work_folder: cdktn.stringToTerraform(this._workFolder),
      azure_devops_organization: managedDevopsPoolAzureDevopsOrganizationToTerraform(this._azureDevopsOrganization.internalValue),
      identity: managedDevopsPoolIdentityToTerraform(this._identity.internalValue),
      stateful_agent: managedDevopsPoolStatefulAgentToTerraform(this._statefulAgent.internalValue),
      stateless_agent: managedDevopsPoolStatelessAgentToTerraform(this._statelessAgent.internalValue),
      timeouts: managedDevopsPoolTimeoutsToTerraform(this._timeouts.internalValue),
      virtual_machine_scale_set_fabric: managedDevopsPoolVirtualMachineScaleSetFabricToTerraform(this._virtualMachineScaleSetFabric.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dev_center_project_id: {
        value: cdktn.stringToHclTerraform(this._devCenterProjectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktn.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maximum_concurrency: {
        value: cdktn.numberToHclTerraform(this._maximumConcurrency),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      tags: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      work_folder: {
        value: cdktn.stringToHclTerraform(this._workFolder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_devops_organization: {
        value: managedDevopsPoolAzureDevopsOrganizationToHclTerraform(this._azureDevopsOrganization.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagedDevopsPoolAzureDevopsOrganizationList",
      },
      identity: {
        value: managedDevopsPoolIdentityToHclTerraform(this._identity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagedDevopsPoolIdentityList",
      },
      stateful_agent: {
        value: managedDevopsPoolStatefulAgentToHclTerraform(this._statefulAgent.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagedDevopsPoolStatefulAgentList",
      },
      stateless_agent: {
        value: managedDevopsPoolStatelessAgentToHclTerraform(this._statelessAgent.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagedDevopsPoolStatelessAgentList",
      },
      timeouts: {
        value: managedDevopsPoolTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ManagedDevopsPoolTimeouts",
      },
      virtual_machine_scale_set_fabric: {
        value: managedDevopsPoolVirtualMachineScaleSetFabricToHclTerraform(this._virtualMachineScaleSetFabric.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagedDevopsPoolVirtualMachineScaleSetFabricList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
