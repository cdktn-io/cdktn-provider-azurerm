/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/sentinel_threat_intelligence_indicator
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SentinelThreatIntelligenceIndicatorConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/sentinel_threat_intelligence_indicator#confidence SentinelThreatIntelligenceIndicator#confidence}
  */
  readonly confidence?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/sentinel_threat_intelligence_indicator#created_by SentinelThreatIntelligenceIndicator#created_by}
  */
  readonly createdBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/sentinel_threat_intelligence_indicator#description SentinelThreatIntelligenceIndicator#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/sentinel_threat_intelligence_indicator#display_name SentinelThreatIntelligenceIndicator#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/sentinel_threat_intelligence_indicator#extension SentinelThreatIntelligenceIndicator#extension}
  */
  readonly extension?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/sentinel_threat_intelligence_indicator#id SentinelThreatIntelligenceIndicator#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/sentinel_threat_intelligence_indicator#language SentinelThreatIntelligenceIndicator#language}
  */
  readonly language?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/sentinel_threat_intelligence_indicator#object_marking_refs SentinelThreatIntelligenceIndicator#object_marking_refs}
  */
  readonly objectMarkingRefs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/sentinel_threat_intelligence_indicator#pattern SentinelThreatIntelligenceIndicator#pattern}
  */
  readonly pattern: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/sentinel_threat_intelligence_indicator#pattern_type SentinelThreatIntelligenceIndicator#pattern_type}
  */
  readonly patternType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/sentinel_threat_intelligence_indicator#pattern_version SentinelThreatIntelligenceIndicator#pattern_version}
  */
  readonly patternVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/sentinel_threat_intelligence_indicator#revoked SentinelThreatIntelligenceIndicator#revoked}
  */
  readonly revoked?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/sentinel_threat_intelligence_indicator#source SentinelThreatIntelligenceIndicator#source}
  */
  readonly source: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/sentinel_threat_intelligence_indicator#tags SentinelThreatIntelligenceIndicator#tags}
  */
  readonly tags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/sentinel_threat_intelligence_indicator#threat_types SentinelThreatIntelligenceIndicator#threat_types}
  */
  readonly threatTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/sentinel_threat_intelligence_indicator#validate_from_utc SentinelThreatIntelligenceIndicator#validate_from_utc}
  */
  readonly validateFromUtc: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/sentinel_threat_intelligence_indicator#validate_until_utc SentinelThreatIntelligenceIndicator#validate_until_utc}
  */
  readonly validateUntilUtc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/sentinel_threat_intelligence_indicator#workspace_id SentinelThreatIntelligenceIndicator#workspace_id}
  */
  readonly workspaceId: string;
  /**
  * external_reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/sentinel_threat_intelligence_indicator#external_reference SentinelThreatIntelligenceIndicator#external_reference}
  */
  readonly externalReference?: SentinelThreatIntelligenceIndicatorExternalReference[] | cdktn.IResolvable;
  /**
  * granular_marking block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/sentinel_threat_intelligence_indicator#granular_marking SentinelThreatIntelligenceIndicator#granular_marking}
  */
  readonly granularMarking?: SentinelThreatIntelligenceIndicatorGranularMarking[] | cdktn.IResolvable;
  /**
  * kill_chain_phase block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/sentinel_threat_intelligence_indicator#kill_chain_phase SentinelThreatIntelligenceIndicator#kill_chain_phase}
  */
  readonly killChainPhase?: SentinelThreatIntelligenceIndicatorKillChainPhase[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/sentinel_threat_intelligence_indicator#timeouts SentinelThreatIntelligenceIndicator#timeouts}
  */
  readonly timeouts?: SentinelThreatIntelligenceIndicatorTimeouts;
}
export interface SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValues {
}

export function sentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesToTerraform(struct?: SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValues): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function sentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesToHclTerraform(struct?: SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValues): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }

  // value_type - computed: true, optional: false, required: false
  public get valueType() {
    return this.getStringAttribute('value_type');
  }
}

export class SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList extends cdktn.ComplexList {

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
  public get(index: number): SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference {
    return new SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SentinelThreatIntelligenceIndicatorParsedPattern {
}

export function sentinelThreatIntelligenceIndicatorParsedPatternToTerraform(struct?: SentinelThreatIntelligenceIndicatorParsedPattern): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function sentinelThreatIntelligenceIndicatorParsedPatternToHclTerraform(struct?: SentinelThreatIntelligenceIndicatorParsedPattern): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class SentinelThreatIntelligenceIndicatorParsedPatternOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SentinelThreatIntelligenceIndicatorParsedPattern | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SentinelThreatIntelligenceIndicatorParsedPattern | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // pattern_type_key - computed: true, optional: false, required: false
  public get patternTypeKey() {
    return this.getStringAttribute('pattern_type_key');
  }

  // pattern_type_values - computed: true, optional: false, required: false
  private _patternTypeValues = new SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList(this, "pattern_type_values", false);
  public get patternTypeValues() {
    return this._patternTypeValues;
  }
}

export class SentinelThreatIntelligenceIndicatorParsedPatternList extends cdktn.ComplexList {

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
  public get(index: number): SentinelThreatIntelligenceIndicatorParsedPatternOutputReference {
    return new SentinelThreatIntelligenceIndicatorParsedPatternOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SentinelThreatIntelligenceIndicatorExternalReference {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/sentinel_threat_intelligence_indicator#description SentinelThreatIntelligenceIndicator#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/sentinel_threat_intelligence_indicator#hashes SentinelThreatIntelligenceIndicator#hashes}
  */
  readonly hashes?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/sentinel_threat_intelligence_indicator#source_name SentinelThreatIntelligenceIndicator#source_name}
  */
  readonly sourceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/sentinel_threat_intelligence_indicator#url SentinelThreatIntelligenceIndicator#url}
  */
  readonly url?: string;
}

export function sentinelThreatIntelligenceIndicatorExternalReferenceToTerraform(struct?: SentinelThreatIntelligenceIndicatorExternalReference | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    hashes: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.hashes),
    source_name: cdktn.stringToTerraform(struct!.sourceName),
    url: cdktn.stringToTerraform(struct!.url),
  }
}


export function sentinelThreatIntelligenceIndicatorExternalReferenceToHclTerraform(struct?: SentinelThreatIntelligenceIndicatorExternalReference | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hashes: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.hashes),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    source_name: {
      value: cdktn.stringToHclTerraform(struct!.sourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SentinelThreatIntelligenceIndicatorExternalReference | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._hashes !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashes = this._hashes;
    }
    if (this._sourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceName = this._sourceName;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SentinelThreatIntelligenceIndicatorExternalReference | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._hashes = undefined;
      this._sourceName = undefined;
      this._url = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._hashes = value.hashes;
      this._sourceName = value.sourceName;
      this._url = value.url;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // hashes - computed: false, optional: true, required: false
  private _hashes?: { [key: string]: string }; 
  public get hashes() {
    return this.getStringMapAttribute('hashes');
  }
  public set hashes(value: { [key: string]: string }) {
    this._hashes = value;
  }
  public resetHashes() {
    this._hashes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashesInput() {
    return this._hashes;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // source_name - computed: false, optional: true, required: false
  private _sourceName?: string; 
  public get sourceName() {
    return this.getStringAttribute('source_name');
  }
  public set sourceName(value: string) {
    this._sourceName = value;
  }
  public resetSourceName() {
    this._sourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceNameInput() {
    return this._sourceName;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class SentinelThreatIntelligenceIndicatorExternalReferenceList extends cdktn.ComplexList {
  public internalValue? : SentinelThreatIntelligenceIndicatorExternalReference[] | cdktn.IResolvable

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
  public get(index: number): SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference {
    return new SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SentinelThreatIntelligenceIndicatorGranularMarking {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/sentinel_threat_intelligence_indicator#language SentinelThreatIntelligenceIndicator#language}
  */
  readonly language?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/sentinel_threat_intelligence_indicator#marking_ref SentinelThreatIntelligenceIndicator#marking_ref}
  */
  readonly markingRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/sentinel_threat_intelligence_indicator#selectors SentinelThreatIntelligenceIndicator#selectors}
  */
  readonly selectors?: string[];
}

export function sentinelThreatIntelligenceIndicatorGranularMarkingToTerraform(struct?: SentinelThreatIntelligenceIndicatorGranularMarking | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    language: cdktn.stringToTerraform(struct!.language),
    marking_ref: cdktn.stringToTerraform(struct!.markingRef),
    selectors: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.selectors),
  }
}


export function sentinelThreatIntelligenceIndicatorGranularMarkingToHclTerraform(struct?: SentinelThreatIntelligenceIndicatorGranularMarking | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    language: {
      value: cdktn.stringToHclTerraform(struct!.language),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    marking_ref: {
      value: cdktn.stringToHclTerraform(struct!.markingRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selectors: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.selectors),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SentinelThreatIntelligenceIndicatorGranularMarking | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._language !== undefined) {
      hasAnyValues = true;
      internalValueResult.language = this._language;
    }
    if (this._markingRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.markingRef = this._markingRef;
    }
    if (this._selectors !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectors = this._selectors;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SentinelThreatIntelligenceIndicatorGranularMarking | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._language = undefined;
      this._markingRef = undefined;
      this._selectors = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._language = value.language;
      this._markingRef = value.markingRef;
      this._selectors = value.selectors;
    }
  }

  // language - computed: false, optional: true, required: false
  private _language?: string; 
  public get language() {
    return this.getStringAttribute('language');
  }
  public set language(value: string) {
    this._language = value;
  }
  public resetLanguage() {
    this._language = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageInput() {
    return this._language;
  }

  // marking_ref - computed: false, optional: true, required: false
  private _markingRef?: string; 
  public get markingRef() {
    return this.getStringAttribute('marking_ref');
  }
  public set markingRef(value: string) {
    this._markingRef = value;
  }
  public resetMarkingRef() {
    this._markingRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get markingRefInput() {
    return this._markingRef;
  }

  // selectors - computed: false, optional: true, required: false
  private _selectors?: string[]; 
  public get selectors() {
    return this.getListAttribute('selectors');
  }
  public set selectors(value: string[]) {
    this._selectors = value;
  }
  public resetSelectors() {
    this._selectors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorsInput() {
    return this._selectors;
  }
}

export class SentinelThreatIntelligenceIndicatorGranularMarkingList extends cdktn.ComplexList {
  public internalValue? : SentinelThreatIntelligenceIndicatorGranularMarking[] | cdktn.IResolvable

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
  public get(index: number): SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference {
    return new SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SentinelThreatIntelligenceIndicatorKillChainPhase {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/sentinel_threat_intelligence_indicator#name SentinelThreatIntelligenceIndicator#name}
  */
  readonly name?: string;
}

export function sentinelThreatIntelligenceIndicatorKillChainPhaseToTerraform(struct?: SentinelThreatIntelligenceIndicatorKillChainPhase | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function sentinelThreatIntelligenceIndicatorKillChainPhaseToHclTerraform(struct?: SentinelThreatIntelligenceIndicatorKillChainPhase | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SentinelThreatIntelligenceIndicatorKillChainPhase | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SentinelThreatIntelligenceIndicatorKillChainPhase | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class SentinelThreatIntelligenceIndicatorKillChainPhaseList extends cdktn.ComplexList {
  public internalValue? : SentinelThreatIntelligenceIndicatorKillChainPhase[] | cdktn.IResolvable

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
  public get(index: number): SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference {
    return new SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SentinelThreatIntelligenceIndicatorTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/sentinel_threat_intelligence_indicator#create SentinelThreatIntelligenceIndicator#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/sentinel_threat_intelligence_indicator#delete SentinelThreatIntelligenceIndicator#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/sentinel_threat_intelligence_indicator#read SentinelThreatIntelligenceIndicator#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/sentinel_threat_intelligence_indicator#update SentinelThreatIntelligenceIndicator#update}
  */
  readonly update?: string;
}

export function sentinelThreatIntelligenceIndicatorTimeoutsToTerraform(struct?: SentinelThreatIntelligenceIndicatorTimeouts | cdktn.IResolvable): any {
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


export function sentinelThreatIntelligenceIndicatorTimeoutsToHclTerraform(struct?: SentinelThreatIntelligenceIndicatorTimeouts | cdktn.IResolvable): any {
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

export class SentinelThreatIntelligenceIndicatorTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SentinelThreatIntelligenceIndicatorTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SentinelThreatIntelligenceIndicatorTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/sentinel_threat_intelligence_indicator azurerm_sentinel_threat_intelligence_indicator}
*/
export class SentinelThreatIntelligenceIndicator extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_sentinel_threat_intelligence_indicator";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SentinelThreatIntelligenceIndicator resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SentinelThreatIntelligenceIndicator to import
  * @param importFromId The id of the existing SentinelThreatIntelligenceIndicator that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/sentinel_threat_intelligence_indicator#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SentinelThreatIntelligenceIndicator to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_sentinel_threat_intelligence_indicator", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/sentinel_threat_intelligence_indicator azurerm_sentinel_threat_intelligence_indicator} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SentinelThreatIntelligenceIndicatorConfig
  */
  public constructor(scope: Construct, id: string, config: SentinelThreatIntelligenceIndicatorConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_sentinel_threat_intelligence_indicator',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.80.0',
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
    this._confidence = config.confidence;
    this._createdBy = config.createdBy;
    this._description = config.description;
    this._displayName = config.displayName;
    this._extension = config.extension;
    this._id = config.id;
    this._language = config.language;
    this._objectMarkingRefs = config.objectMarkingRefs;
    this._pattern = config.pattern;
    this._patternType = config.patternType;
    this._patternVersion = config.patternVersion;
    this._revoked = config.revoked;
    this._source = config.source;
    this._tags = config.tags;
    this._threatTypes = config.threatTypes;
    this._validateFromUtc = config.validateFromUtc;
    this._validateUntilUtc = config.validateUntilUtc;
    this._workspaceId = config.workspaceId;
    this._externalReference.internalValue = config.externalReference;
    this._granularMarking.internalValue = config.granularMarking;
    this._killChainPhase.internalValue = config.killChainPhase;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // confidence - computed: false, optional: true, required: false
  private _confidence?: number; 
  public get confidence() {
    return this.getNumberAttribute('confidence');
  }
  public set confidence(value: number) {
    this._confidence = value;
  }
  public resetConfidence() {
    this._confidence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confidenceInput() {
    return this._confidence;
  }

  // created_by - computed: false, optional: true, required: false
  private _createdBy?: string; 
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }
  public set createdBy(value: string) {
    this._createdBy = value;
  }
  public resetCreatedBy() {
    this._createdBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdByInput() {
    return this._createdBy;
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // defanged - computed: true, optional: false, required: false
  public get defanged() {
    return this.getBooleanAttribute('defanged');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // extension - computed: true, optional: true, required: false
  private _extension?: string; 
  public get extension() {
    return this.getStringAttribute('extension');
  }
  public set extension(value: string) {
    this._extension = value;
  }
  public resetExtension() {
    this._extension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionInput() {
    return this._extension;
  }

  // external_id - computed: true, optional: false, required: false
  public get externalId() {
    return this.getStringAttribute('external_id');
  }

  // external_last_updated_time_utc - computed: true, optional: false, required: false
  public get externalLastUpdatedTimeUtc() {
    return this.getStringAttribute('external_last_updated_time_utc');
  }

  // guid - computed: true, optional: false, required: false
  public get guid() {
    return this.getStringAttribute('guid');
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

  // indicator_type - computed: true, optional: false, required: false
  public get indicatorType() {
    return this.getListAttribute('indicator_type');
  }

  // language - computed: false, optional: true, required: false
  private _language?: string; 
  public get language() {
    return this.getStringAttribute('language');
  }
  public set language(value: string) {
    this._language = value;
  }
  public resetLanguage() {
    this._language = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageInput() {
    return this._language;
  }

  // last_updated_time_utc - computed: true, optional: false, required: false
  public get lastUpdatedTimeUtc() {
    return this.getStringAttribute('last_updated_time_utc');
  }

  // object_marking_refs - computed: false, optional: true, required: false
  private _objectMarkingRefs?: string[]; 
  public get objectMarkingRefs() {
    return this.getListAttribute('object_marking_refs');
  }
  public set objectMarkingRefs(value: string[]) {
    this._objectMarkingRefs = value;
  }
  public resetObjectMarkingRefs() {
    this._objectMarkingRefs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectMarkingRefsInput() {
    return this._objectMarkingRefs;
  }

  // parsed_pattern - computed: true, optional: false, required: false
  private _parsedPattern = new SentinelThreatIntelligenceIndicatorParsedPatternList(this, "parsed_pattern", false);
  public get parsedPattern() {
    return this._parsedPattern;
  }

  // pattern - computed: false, optional: false, required: true
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }

  // pattern_type - computed: false, optional: false, required: true
  private _patternType?: string; 
  public get patternType() {
    return this.getStringAttribute('pattern_type');
  }
  public set patternType(value: string) {
    this._patternType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternTypeInput() {
    return this._patternType;
  }

  // pattern_version - computed: false, optional: true, required: false
  private _patternVersion?: string; 
  public get patternVersion() {
    return this.getStringAttribute('pattern_version');
  }
  public set patternVersion(value: string) {
    this._patternVersion = value;
  }
  public resetPatternVersion() {
    this._patternVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternVersionInput() {
    return this._patternVersion;
  }

  // revoked - computed: false, optional: true, required: false
  private _revoked?: boolean | cdktn.IResolvable; 
  public get revoked() {
    return this.getBooleanAttribute('revoked');
  }
  public set revoked(value: boolean | cdktn.IResolvable) {
    this._revoked = value;
  }
  public resetRevoked() {
    this._revoked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revokedInput() {
    return this._revoked;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // threat_types - computed: false, optional: true, required: false
  private _threatTypes?: string[]; 
  public get threatTypes() {
    return this.getListAttribute('threat_types');
  }
  public set threatTypes(value: string[]) {
    this._threatTypes = value;
  }
  public resetThreatTypes() {
    this._threatTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatTypesInput() {
    return this._threatTypes;
  }

  // validate_from_utc - computed: false, optional: false, required: true
  private _validateFromUtc?: string; 
  public get validateFromUtc() {
    return this.getStringAttribute('validate_from_utc');
  }
  public set validateFromUtc(value: string) {
    this._validateFromUtc = value;
  }
  // Temporarily expose input value. Use with caution.
  public get validateFromUtcInput() {
    return this._validateFromUtc;
  }

  // validate_until_utc - computed: false, optional: true, required: false
  private _validateUntilUtc?: string; 
  public get validateUntilUtc() {
    return this.getStringAttribute('validate_until_utc');
  }
  public set validateUntilUtc(value: string) {
    this._validateUntilUtc = value;
  }
  public resetValidateUntilUtc() {
    this._validateUntilUtc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateUntilUtcInput() {
    return this._validateUntilUtc;
  }

  // workspace_id - computed: false, optional: false, required: true
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }

  // external_reference - computed: false, optional: true, required: false
  private _externalReference = new SentinelThreatIntelligenceIndicatorExternalReferenceList(this, "external_reference", false);
  public get externalReference() {
    return this._externalReference;
  }
  public putExternalReference(value: SentinelThreatIntelligenceIndicatorExternalReference[] | cdktn.IResolvable) {
    this._externalReference.internalValue = value;
  }
  public resetExternalReference() {
    this._externalReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalReferenceInput() {
    return this._externalReference.internalValue;
  }

  // granular_marking - computed: false, optional: true, required: false
  private _granularMarking = new SentinelThreatIntelligenceIndicatorGranularMarkingList(this, "granular_marking", false);
  public get granularMarking() {
    return this._granularMarking;
  }
  public putGranularMarking(value: SentinelThreatIntelligenceIndicatorGranularMarking[] | cdktn.IResolvable) {
    this._granularMarking.internalValue = value;
  }
  public resetGranularMarking() {
    this._granularMarking.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get granularMarkingInput() {
    return this._granularMarking.internalValue;
  }

  // kill_chain_phase - computed: false, optional: true, required: false
  private _killChainPhase = new SentinelThreatIntelligenceIndicatorKillChainPhaseList(this, "kill_chain_phase", false);
  public get killChainPhase() {
    return this._killChainPhase;
  }
  public putKillChainPhase(value: SentinelThreatIntelligenceIndicatorKillChainPhase[] | cdktn.IResolvable) {
    this._killChainPhase.internalValue = value;
  }
  public resetKillChainPhase() {
    this._killChainPhase.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get killChainPhaseInput() {
    return this._killChainPhase.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SentinelThreatIntelligenceIndicatorTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SentinelThreatIntelligenceIndicatorTimeouts) {
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
      confidence: cdktn.numberToTerraform(this._confidence),
      created_by: cdktn.stringToTerraform(this._createdBy),
      description: cdktn.stringToTerraform(this._description),
      display_name: cdktn.stringToTerraform(this._displayName),
      extension: cdktn.stringToTerraform(this._extension),
      id: cdktn.stringToTerraform(this._id),
      language: cdktn.stringToTerraform(this._language),
      object_marking_refs: cdktn.listMapper(cdktn.stringToTerraform, false)(this._objectMarkingRefs),
      pattern: cdktn.stringToTerraform(this._pattern),
      pattern_type: cdktn.stringToTerraform(this._patternType),
      pattern_version: cdktn.stringToTerraform(this._patternVersion),
      revoked: cdktn.booleanToTerraform(this._revoked),
      source: cdktn.stringToTerraform(this._source),
      tags: cdktn.listMapper(cdktn.stringToTerraform, false)(this._tags),
      threat_types: cdktn.listMapper(cdktn.stringToTerraform, false)(this._threatTypes),
      validate_from_utc: cdktn.stringToTerraform(this._validateFromUtc),
      validate_until_utc: cdktn.stringToTerraform(this._validateUntilUtc),
      workspace_id: cdktn.stringToTerraform(this._workspaceId),
      external_reference: cdktn.listMapper(sentinelThreatIntelligenceIndicatorExternalReferenceToTerraform, true)(this._externalReference.internalValue),
      granular_marking: cdktn.listMapper(sentinelThreatIntelligenceIndicatorGranularMarkingToTerraform, true)(this._granularMarking.internalValue),
      kill_chain_phase: cdktn.listMapper(sentinelThreatIntelligenceIndicatorKillChainPhaseToTerraform, true)(this._killChainPhase.internalValue),
      timeouts: sentinelThreatIntelligenceIndicatorTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      confidence: {
        value: cdktn.numberToHclTerraform(this._confidence),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      created_by: {
        value: cdktn.stringToHclTerraform(this._createdBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
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
      extension: {
        value: cdktn.stringToHclTerraform(this._extension),
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
      language: {
        value: cdktn.stringToHclTerraform(this._language),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      object_marking_refs: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._objectMarkingRefs),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      pattern: {
        value: cdktn.stringToHclTerraform(this._pattern),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pattern_type: {
        value: cdktn.stringToHclTerraform(this._patternType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pattern_version: {
        value: cdktn.stringToHclTerraform(this._patternVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      revoked: {
        value: cdktn.booleanToHclTerraform(this._revoked),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      source: {
        value: cdktn.stringToHclTerraform(this._source),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      threat_types: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._threatTypes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      validate_from_utc: {
        value: cdktn.stringToHclTerraform(this._validateFromUtc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      validate_until_utc: {
        value: cdktn.stringToHclTerraform(this._validateUntilUtc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workspace_id: {
        value: cdktn.stringToHclTerraform(this._workspaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_reference: {
        value: cdktn.listMapperHcl(sentinelThreatIntelligenceIndicatorExternalReferenceToHclTerraform, true)(this._externalReference.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SentinelThreatIntelligenceIndicatorExternalReferenceList",
      },
      granular_marking: {
        value: cdktn.listMapperHcl(sentinelThreatIntelligenceIndicatorGranularMarkingToHclTerraform, true)(this._granularMarking.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SentinelThreatIntelligenceIndicatorGranularMarkingList",
      },
      kill_chain_phase: {
        value: cdktn.listMapperHcl(sentinelThreatIntelligenceIndicatorKillChainPhaseToHclTerraform, true)(this._killChainPhase.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SentinelThreatIntelligenceIndicatorKillChainPhaseList",
      },
      timeouts: {
        value: sentinelThreatIntelligenceIndicatorTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SentinelThreatIntelligenceIndicatorTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
