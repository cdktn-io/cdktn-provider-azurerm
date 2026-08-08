/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/subscription_cost_management_view
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SubscriptionCostManagementViewConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/subscription_cost_management_view#accumulated SubscriptionCostManagementView#accumulated}
  */
  readonly accumulated: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/subscription_cost_management_view#chart_type SubscriptionCostManagementView#chart_type}
  */
  readonly chartType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/subscription_cost_management_view#display_name SubscriptionCostManagementView#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/subscription_cost_management_view#id SubscriptionCostManagementView#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/subscription_cost_management_view#name SubscriptionCostManagementView#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/subscription_cost_management_view#report_type SubscriptionCostManagementView#report_type}
  */
  readonly reportType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/subscription_cost_management_view#subscription_id SubscriptionCostManagementView#subscription_id}
  */
  readonly subscriptionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/subscription_cost_management_view#timeframe SubscriptionCostManagementView#timeframe}
  */
  readonly timeframe: string;
  /**
  * dataset block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/subscription_cost_management_view#dataset SubscriptionCostManagementView#dataset}
  */
  readonly dataset: SubscriptionCostManagementViewDataset;
  /**
  * kpi block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/subscription_cost_management_view#kpi SubscriptionCostManagementView#kpi}
  */
  readonly kpi?: SubscriptionCostManagementViewKpi[] | cdktn.IResolvable;
  /**
  * pivot block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/subscription_cost_management_view#pivot SubscriptionCostManagementView#pivot}
  */
  readonly pivot?: SubscriptionCostManagementViewPivot[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/subscription_cost_management_view#timeouts SubscriptionCostManagementView#timeouts}
  */
  readonly timeouts?: SubscriptionCostManagementViewTimeouts;
}
export interface SubscriptionCostManagementViewDatasetAggregation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/subscription_cost_management_view#column_name SubscriptionCostManagementView#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/subscription_cost_management_view#name SubscriptionCostManagementView#name}
  */
  readonly name: string;
}

export function subscriptionCostManagementViewDatasetAggregationToTerraform(struct?: SubscriptionCostManagementViewDatasetAggregation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    column_name: cdktn.stringToTerraform(struct!.columnName),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function subscriptionCostManagementViewDatasetAggregationToHclTerraform(struct?: SubscriptionCostManagementViewDatasetAggregation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    column_name: {
      value: cdktn.stringToHclTerraform(struct!.columnName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SubscriptionCostManagementViewDatasetAggregationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SubscriptionCostManagementViewDatasetAggregation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnName = this._columnName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SubscriptionCostManagementViewDatasetAggregation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columnName = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columnName = value.columnName;
      this._name = value.name;
    }
  }

  // column_name - computed: false, optional: false, required: true
  private _columnName?: string; 
  public get columnName() {
    return this.getStringAttribute('column_name');
  }
  public set columnName(value: string) {
    this._columnName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnNameInput() {
    return this._columnName;
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
}

export class SubscriptionCostManagementViewDatasetAggregationList extends cdktn.ComplexList {
  public internalValue? : SubscriptionCostManagementViewDatasetAggregation[] | cdktn.IResolvable

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
  public get(index: number): SubscriptionCostManagementViewDatasetAggregationOutputReference {
    return new SubscriptionCostManagementViewDatasetAggregationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SubscriptionCostManagementViewDatasetGrouping {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/subscription_cost_management_view#name SubscriptionCostManagementView#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/subscription_cost_management_view#type SubscriptionCostManagementView#type}
  */
  readonly type: string;
}

export function subscriptionCostManagementViewDatasetGroupingToTerraform(struct?: SubscriptionCostManagementViewDatasetGrouping | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function subscriptionCostManagementViewDatasetGroupingToHclTerraform(struct?: SubscriptionCostManagementViewDatasetGrouping | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class SubscriptionCostManagementViewDatasetGroupingOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SubscriptionCostManagementViewDatasetGrouping | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SubscriptionCostManagementViewDatasetGrouping | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type = value.type;
    }
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

export class SubscriptionCostManagementViewDatasetGroupingList extends cdktn.ComplexList {
  public internalValue? : SubscriptionCostManagementViewDatasetGrouping[] | cdktn.IResolvable

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
  public get(index: number): SubscriptionCostManagementViewDatasetGroupingOutputReference {
    return new SubscriptionCostManagementViewDatasetGroupingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SubscriptionCostManagementViewDatasetSorting {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/subscription_cost_management_view#direction SubscriptionCostManagementView#direction}
  */
  readonly direction: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/subscription_cost_management_view#name SubscriptionCostManagementView#name}
  */
  readonly name: string;
}

export function subscriptionCostManagementViewDatasetSortingToTerraform(struct?: SubscriptionCostManagementViewDatasetSorting | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    direction: cdktn.stringToTerraform(struct!.direction),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function subscriptionCostManagementViewDatasetSortingToHclTerraform(struct?: SubscriptionCostManagementViewDatasetSorting | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    direction: {
      value: cdktn.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SubscriptionCostManagementViewDatasetSortingOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SubscriptionCostManagementViewDatasetSorting | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SubscriptionCostManagementViewDatasetSorting | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._direction = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._direction = value.direction;
      this._name = value.name;
    }
  }

  // direction - computed: false, optional: false, required: true
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
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
}

export class SubscriptionCostManagementViewDatasetSortingList extends cdktn.ComplexList {
  public internalValue? : SubscriptionCostManagementViewDatasetSorting[] | cdktn.IResolvable

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
  public get(index: number): SubscriptionCostManagementViewDatasetSortingOutputReference {
    return new SubscriptionCostManagementViewDatasetSortingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SubscriptionCostManagementViewDataset {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/subscription_cost_management_view#granularity SubscriptionCostManagementView#granularity}
  */
  readonly granularity: string;
  /**
  * aggregation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/subscription_cost_management_view#aggregation SubscriptionCostManagementView#aggregation}
  */
  readonly aggregation: SubscriptionCostManagementViewDatasetAggregation[] | cdktn.IResolvable;
  /**
  * grouping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/subscription_cost_management_view#grouping SubscriptionCostManagementView#grouping}
  */
  readonly grouping?: SubscriptionCostManagementViewDatasetGrouping[] | cdktn.IResolvable;
  /**
  * sorting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/subscription_cost_management_view#sorting SubscriptionCostManagementView#sorting}
  */
  readonly sorting?: SubscriptionCostManagementViewDatasetSorting[] | cdktn.IResolvable;
}

export function subscriptionCostManagementViewDatasetToTerraform(struct?: SubscriptionCostManagementViewDatasetOutputReference | SubscriptionCostManagementViewDataset): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    granularity: cdktn.stringToTerraform(struct!.granularity),
    aggregation: cdktn.listMapper(subscriptionCostManagementViewDatasetAggregationToTerraform, true)(struct!.aggregation),
    grouping: cdktn.listMapper(subscriptionCostManagementViewDatasetGroupingToTerraform, true)(struct!.grouping),
    sorting: cdktn.listMapper(subscriptionCostManagementViewDatasetSortingToTerraform, true)(struct!.sorting),
  }
}


export function subscriptionCostManagementViewDatasetToHclTerraform(struct?: SubscriptionCostManagementViewDatasetOutputReference | SubscriptionCostManagementViewDataset): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    granularity: {
      value: cdktn.stringToHclTerraform(struct!.granularity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aggregation: {
      value: cdktn.listMapperHcl(subscriptionCostManagementViewDatasetAggregationToHclTerraform, true)(struct!.aggregation),
      isBlock: true,
      type: "set",
      storageClassType: "SubscriptionCostManagementViewDatasetAggregationList",
    },
    grouping: {
      value: cdktn.listMapperHcl(subscriptionCostManagementViewDatasetGroupingToHclTerraform, true)(struct!.grouping),
      isBlock: true,
      type: "list",
      storageClassType: "SubscriptionCostManagementViewDatasetGroupingList",
    },
    sorting: {
      value: cdktn.listMapperHcl(subscriptionCostManagementViewDatasetSortingToHclTerraform, true)(struct!.sorting),
      isBlock: true,
      type: "list",
      storageClassType: "SubscriptionCostManagementViewDatasetSortingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SubscriptionCostManagementViewDatasetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SubscriptionCostManagementViewDataset | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._granularity !== undefined) {
      hasAnyValues = true;
      internalValueResult.granularity = this._granularity;
    }
    if (this._aggregation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation?.internalValue;
    }
    if (this._grouping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grouping = this._grouping?.internalValue;
    }
    if (this._sorting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sorting = this._sorting?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SubscriptionCostManagementViewDataset | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._granularity = undefined;
      this._aggregation.internalValue = undefined;
      this._grouping.internalValue = undefined;
      this._sorting.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._granularity = value.granularity;
      this._aggregation.internalValue = value.aggregation;
      this._grouping.internalValue = value.grouping;
      this._sorting.internalValue = value.sorting;
    }
  }

  // granularity - computed: false, optional: false, required: true
  private _granularity?: string; 
  public get granularity() {
    return this.getStringAttribute('granularity');
  }
  public set granularity(value: string) {
    this._granularity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get granularityInput() {
    return this._granularity;
  }

  // aggregation - computed: false, optional: false, required: true
  private _aggregation = new SubscriptionCostManagementViewDatasetAggregationList(this, "aggregation", true);
  public get aggregation() {
    return this._aggregation;
  }
  public putAggregation(value: SubscriptionCostManagementViewDatasetAggregation[] | cdktn.IResolvable) {
    this._aggregation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationInput() {
    return this._aggregation.internalValue;
  }

  // grouping - computed: false, optional: true, required: false
  private _grouping = new SubscriptionCostManagementViewDatasetGroupingList(this, "grouping", false);
  public get grouping() {
    return this._grouping;
  }
  public putGrouping(value: SubscriptionCostManagementViewDatasetGrouping[] | cdktn.IResolvable) {
    this._grouping.internalValue = value;
  }
  public resetGrouping() {
    this._grouping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupingInput() {
    return this._grouping.internalValue;
  }

  // sorting - computed: false, optional: true, required: false
  private _sorting = new SubscriptionCostManagementViewDatasetSortingList(this, "sorting", false);
  public get sorting() {
    return this._sorting;
  }
  public putSorting(value: SubscriptionCostManagementViewDatasetSorting[] | cdktn.IResolvable) {
    this._sorting.internalValue = value;
  }
  public resetSorting() {
    this._sorting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortingInput() {
    return this._sorting.internalValue;
  }
}
export interface SubscriptionCostManagementViewKpi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/subscription_cost_management_view#type SubscriptionCostManagementView#type}
  */
  readonly type: string;
}

export function subscriptionCostManagementViewKpiToTerraform(struct?: SubscriptionCostManagementViewKpi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function subscriptionCostManagementViewKpiToHclTerraform(struct?: SubscriptionCostManagementViewKpi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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

export class SubscriptionCostManagementViewKpiOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SubscriptionCostManagementViewKpi | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SubscriptionCostManagementViewKpi | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
    }
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

export class SubscriptionCostManagementViewKpiList extends cdktn.ComplexList {
  public internalValue? : SubscriptionCostManagementViewKpi[] | cdktn.IResolvable

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
  public get(index: number): SubscriptionCostManagementViewKpiOutputReference {
    return new SubscriptionCostManagementViewKpiOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SubscriptionCostManagementViewPivot {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/subscription_cost_management_view#name SubscriptionCostManagementView#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/subscription_cost_management_view#type SubscriptionCostManagementView#type}
  */
  readonly type: string;
}

export function subscriptionCostManagementViewPivotToTerraform(struct?: SubscriptionCostManagementViewPivot | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function subscriptionCostManagementViewPivotToHclTerraform(struct?: SubscriptionCostManagementViewPivot | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class SubscriptionCostManagementViewPivotOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SubscriptionCostManagementViewPivot | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SubscriptionCostManagementViewPivot | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type = value.type;
    }
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

export class SubscriptionCostManagementViewPivotList extends cdktn.ComplexList {
  public internalValue? : SubscriptionCostManagementViewPivot[] | cdktn.IResolvable

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
  public get(index: number): SubscriptionCostManagementViewPivotOutputReference {
    return new SubscriptionCostManagementViewPivotOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SubscriptionCostManagementViewTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/subscription_cost_management_view#create SubscriptionCostManagementView#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/subscription_cost_management_view#delete SubscriptionCostManagementView#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/subscription_cost_management_view#read SubscriptionCostManagementView#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/subscription_cost_management_view#update SubscriptionCostManagementView#update}
  */
  readonly update?: string;
}

export function subscriptionCostManagementViewTimeoutsToTerraform(struct?: SubscriptionCostManagementViewTimeouts | cdktn.IResolvable): any {
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


export function subscriptionCostManagementViewTimeoutsToHclTerraform(struct?: SubscriptionCostManagementViewTimeouts | cdktn.IResolvable): any {
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

export class SubscriptionCostManagementViewTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SubscriptionCostManagementViewTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SubscriptionCostManagementViewTimeouts | cdktn.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/subscription_cost_management_view azurerm_subscription_cost_management_view}
*/
export class SubscriptionCostManagementView extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_subscription_cost_management_view";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SubscriptionCostManagementView resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SubscriptionCostManagementView to import
  * @param importFromId The id of the existing SubscriptionCostManagementView that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/subscription_cost_management_view#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SubscriptionCostManagementView to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_subscription_cost_management_view", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/subscription_cost_management_view azurerm_subscription_cost_management_view} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SubscriptionCostManagementViewConfig
  */
  public constructor(scope: Construct, id: string, config: SubscriptionCostManagementViewConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_subscription_cost_management_view',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '5.0.1',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accumulated = config.accumulated;
    this._chartType = config.chartType;
    this._displayName = config.displayName;
    this._id = config.id;
    this._name = config.name;
    this._reportType = config.reportType;
    this._subscriptionId = config.subscriptionId;
    this._timeframe = config.timeframe;
    this._dataset.internalValue = config.dataset;
    this._kpi.internalValue = config.kpi;
    this._pivot.internalValue = config.pivot;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accumulated - computed: false, optional: false, required: true
  private _accumulated?: boolean | cdktn.IResolvable; 
  public get accumulated() {
    return this.getBooleanAttribute('accumulated');
  }
  public set accumulated(value: boolean | cdktn.IResolvable) {
    this._accumulated = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accumulatedInput() {
    return this._accumulated;
  }

  // chart_type - computed: false, optional: false, required: true
  private _chartType?: string; 
  public get chartType() {
    return this.getStringAttribute('chart_type');
  }
  public set chartType(value: string) {
    this._chartType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get chartTypeInput() {
    return this._chartType;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // report_type - computed: false, optional: false, required: true
  private _reportType?: string; 
  public get reportType() {
    return this.getStringAttribute('report_type');
  }
  public set reportType(value: string) {
    this._reportType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reportTypeInput() {
    return this._reportType;
  }

  // subscription_id - computed: false, optional: false, required: true
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }

  // timeframe - computed: false, optional: false, required: true
  private _timeframe?: string; 
  public get timeframe() {
    return this.getStringAttribute('timeframe');
  }
  public set timeframe(value: string) {
    this._timeframe = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeframeInput() {
    return this._timeframe;
  }

  // dataset - computed: false, optional: false, required: true
  private _dataset = new SubscriptionCostManagementViewDatasetOutputReference(this, "dataset");
  public get dataset() {
    return this._dataset;
  }
  public putDataset(value: SubscriptionCostManagementViewDataset) {
    this._dataset.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetInput() {
    return this._dataset.internalValue;
  }

  // kpi - computed: false, optional: true, required: false
  private _kpi = new SubscriptionCostManagementViewKpiList(this, "kpi", false);
  public get kpi() {
    return this._kpi;
  }
  public putKpi(value: SubscriptionCostManagementViewKpi[] | cdktn.IResolvable) {
    this._kpi.internalValue = value;
  }
  public resetKpi() {
    this._kpi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kpiInput() {
    return this._kpi.internalValue;
  }

  // pivot - computed: false, optional: true, required: false
  private _pivot = new SubscriptionCostManagementViewPivotList(this, "pivot", false);
  public get pivot() {
    return this._pivot;
  }
  public putPivot(value: SubscriptionCostManagementViewPivot[] | cdktn.IResolvable) {
    this._pivot.internalValue = value;
  }
  public resetPivot() {
    this._pivot.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pivotInput() {
    return this._pivot.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SubscriptionCostManagementViewTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SubscriptionCostManagementViewTimeouts) {
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
      accumulated: cdktn.booleanToTerraform(this._accumulated),
      chart_type: cdktn.stringToTerraform(this._chartType),
      display_name: cdktn.stringToTerraform(this._displayName),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      report_type: cdktn.stringToTerraform(this._reportType),
      subscription_id: cdktn.stringToTerraform(this._subscriptionId),
      timeframe: cdktn.stringToTerraform(this._timeframe),
      dataset: subscriptionCostManagementViewDatasetToTerraform(this._dataset.internalValue),
      kpi: cdktn.listMapper(subscriptionCostManagementViewKpiToTerraform, true)(this._kpi.internalValue),
      pivot: cdktn.listMapper(subscriptionCostManagementViewPivotToTerraform, true)(this._pivot.internalValue),
      timeouts: subscriptionCostManagementViewTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accumulated: {
        value: cdktn.booleanToHclTerraform(this._accumulated),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      chart_type: {
        value: cdktn.stringToHclTerraform(this._chartType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktn.stringToHclTerraform(this._displayName),
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
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      report_type: {
        value: cdktn.stringToHclTerraform(this._reportType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscription_id: {
        value: cdktn.stringToHclTerraform(this._subscriptionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeframe: {
        value: cdktn.stringToHclTerraform(this._timeframe),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dataset: {
        value: subscriptionCostManagementViewDatasetToHclTerraform(this._dataset.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SubscriptionCostManagementViewDatasetList",
      },
      kpi: {
        value: cdktn.listMapperHcl(subscriptionCostManagementViewKpiToHclTerraform, true)(this._kpi.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SubscriptionCostManagementViewKpiList",
      },
      pivot: {
        value: cdktn.listMapperHcl(subscriptionCostManagementViewPivotToHclTerraform, true)(this._pivot.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SubscriptionCostManagementViewPivotList",
      },
      timeouts: {
        value: subscriptionCostManagementViewTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SubscriptionCostManagementViewTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
