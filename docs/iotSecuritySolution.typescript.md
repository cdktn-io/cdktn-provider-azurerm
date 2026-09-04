# `iotSecuritySolution` Submodule <a name="`iotSecuritySolution` Submodule" id="@cdktn/provider-azurerm.iotSecuritySolution"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotSecuritySolution <a name="IotSecuritySolution" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/iot_security_solution azurerm_iot_security_solution}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer"></a>

```typescript
import { iotSecuritySolution } from '@cdktn/provider-azurerm'

new iotSecuritySolution.IotSecuritySolution(scope: Construct, id: string, config: IotSecuritySolutionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig">IotSecuritySolutionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig">IotSecuritySolutionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.putAdditionalWorkspace">putAdditionalWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.putRecommendations">putRecommendations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetAdditionalWorkspace">resetAdditionalWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetDisabledDataSources">resetDisabledDataSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetEventsToExport">resetEventsToExport</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetLogAnalyticsWorkspaceId">resetLogAnalyticsWorkspaceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetLogUnmaskedIpsEnabled">resetLogUnmaskedIpsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetQueryForResources">resetQueryForResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetQuerySubscriptionIds">resetQuerySubscriptionIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetRecommendations">resetRecommendations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAdditionalWorkspace` <a name="putAdditionalWorkspace" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.putAdditionalWorkspace"></a>

```typescript
public putAdditionalWorkspace(value: IResolvable | IotSecuritySolutionAdditionalWorkspace[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.putAdditionalWorkspace.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspace">IotSecuritySolutionAdditionalWorkspace</a>[]

---

##### `putRecommendations` <a name="putRecommendations" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.putRecommendations"></a>

```typescript
public putRecommendations(value: IotSecuritySolutionRecommendations): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.putRecommendations.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendations">IotSecuritySolutionRecommendations</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.putTimeouts"></a>

```typescript
public putTimeouts(value: IotSecuritySolutionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts">IotSecuritySolutionTimeouts</a>

---

##### `resetAdditionalWorkspace` <a name="resetAdditionalWorkspace" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetAdditionalWorkspace"></a>

```typescript
public resetAdditionalWorkspace(): void
```

##### `resetDisabledDataSources` <a name="resetDisabledDataSources" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetDisabledDataSources"></a>

```typescript
public resetDisabledDataSources(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetEventsToExport` <a name="resetEventsToExport" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetEventsToExport"></a>

```typescript
public resetEventsToExport(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLogAnalyticsWorkspaceId` <a name="resetLogAnalyticsWorkspaceId" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetLogAnalyticsWorkspaceId"></a>

```typescript
public resetLogAnalyticsWorkspaceId(): void
```

##### `resetLogUnmaskedIpsEnabled` <a name="resetLogUnmaskedIpsEnabled" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetLogUnmaskedIpsEnabled"></a>

```typescript
public resetLogUnmaskedIpsEnabled(): void
```

##### `resetQueryForResources` <a name="resetQueryForResources" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetQueryForResources"></a>

```typescript
public resetQueryForResources(): void
```

##### `resetQuerySubscriptionIds` <a name="resetQuerySubscriptionIds" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetQuerySubscriptionIds"></a>

```typescript
public resetQuerySubscriptionIds(): void
```

##### `resetRecommendations` <a name="resetRecommendations" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetRecommendations"></a>

```typescript
public resetRecommendations(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IotSecuritySolution resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.isConstruct"></a>

```typescript
import { iotSecuritySolution } from '@cdktn/provider-azurerm'

iotSecuritySolution.IotSecuritySolution.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.isTerraformElement"></a>

```typescript
import { iotSecuritySolution } from '@cdktn/provider-azurerm'

iotSecuritySolution.IotSecuritySolution.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.isTerraformResource"></a>

```typescript
import { iotSecuritySolution } from '@cdktn/provider-azurerm'

iotSecuritySolution.IotSecuritySolution.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.generateConfigForImport"></a>

```typescript
import { iotSecuritySolution } from '@cdktn/provider-azurerm'

iotSecuritySolution.IotSecuritySolution.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a IotSecuritySolution resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IotSecuritySolution to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IotSecuritySolution that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/iot_security_solution#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IotSecuritySolution to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.additionalWorkspace">additionalWorkspace</a></code> | <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList">IotSecuritySolutionAdditionalWorkspaceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.recommendations">recommendations</a></code> | <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference">IotSecuritySolutionRecommendationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference">IotSecuritySolutionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.additionalWorkspaceInput">additionalWorkspaceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspace">IotSecuritySolutionAdditionalWorkspace</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.disabledDataSourcesInput">disabledDataSourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.eventsToExportInput">eventsToExportInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.iothubIdsInput">iothubIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.logAnalyticsWorkspaceIdInput">logAnalyticsWorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.logUnmaskedIpsEnabledInput">logUnmaskedIpsEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.queryForResourcesInput">queryForResourcesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.querySubscriptionIdsInput">querySubscriptionIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.recommendationsInput">recommendationsInput</a></code> | <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendations">IotSecuritySolutionRecommendations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts">IotSecuritySolutionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.disabledDataSources">disabledDataSources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.eventsToExport">eventsToExport</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.iothubIds">iothubIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.logAnalyticsWorkspaceId">logAnalyticsWorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.logUnmaskedIpsEnabled">logUnmaskedIpsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.queryForResources">queryForResources</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.querySubscriptionIds">querySubscriptionIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `additionalWorkspace`<sup>Required</sup> <a name="additionalWorkspace" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.additionalWorkspace"></a>

```typescript
public readonly additionalWorkspace: IotSecuritySolutionAdditionalWorkspaceList;
```

- *Type:* <a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList">IotSecuritySolutionAdditionalWorkspaceList</a>

---

##### `recommendations`<sup>Required</sup> <a name="recommendations" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.recommendations"></a>

```typescript
public readonly recommendations: IotSecuritySolutionRecommendationsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference">IotSecuritySolutionRecommendationsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.timeouts"></a>

```typescript
public readonly timeouts: IotSecuritySolutionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference">IotSecuritySolutionTimeoutsOutputReference</a>

---

##### `additionalWorkspaceInput`<sup>Optional</sup> <a name="additionalWorkspaceInput" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.additionalWorkspaceInput"></a>

```typescript
public readonly additionalWorkspaceInput: IResolvable | IotSecuritySolutionAdditionalWorkspace[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspace">IotSecuritySolutionAdditionalWorkspace</a>[]

---

##### `disabledDataSourcesInput`<sup>Optional</sup> <a name="disabledDataSourcesInput" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.disabledDataSourcesInput"></a>

```typescript
public readonly disabledDataSourcesInput: string[];
```

- *Type:* string[]

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `eventsToExportInput`<sup>Optional</sup> <a name="eventsToExportInput" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.eventsToExportInput"></a>

```typescript
public readonly eventsToExportInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `iothubIdsInput`<sup>Optional</sup> <a name="iothubIdsInput" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.iothubIdsInput"></a>

```typescript
public readonly iothubIdsInput: string[];
```

- *Type:* string[]

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `logAnalyticsWorkspaceIdInput`<sup>Optional</sup> <a name="logAnalyticsWorkspaceIdInput" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.logAnalyticsWorkspaceIdInput"></a>

```typescript
public readonly logAnalyticsWorkspaceIdInput: string;
```

- *Type:* string

---

##### `logUnmaskedIpsEnabledInput`<sup>Optional</sup> <a name="logUnmaskedIpsEnabledInput" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.logUnmaskedIpsEnabledInput"></a>

```typescript
public readonly logUnmaskedIpsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `queryForResourcesInput`<sup>Optional</sup> <a name="queryForResourcesInput" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.queryForResourcesInput"></a>

```typescript
public readonly queryForResourcesInput: string;
```

- *Type:* string

---

##### `querySubscriptionIdsInput`<sup>Optional</sup> <a name="querySubscriptionIdsInput" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.querySubscriptionIdsInput"></a>

```typescript
public readonly querySubscriptionIdsInput: string[];
```

- *Type:* string[]

---

##### `recommendationsInput`<sup>Optional</sup> <a name="recommendationsInput" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.recommendationsInput"></a>

```typescript
public readonly recommendationsInput: IotSecuritySolutionRecommendations;
```

- *Type:* <a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendations">IotSecuritySolutionRecommendations</a>

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | IotSecuritySolutionTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts">IotSecuritySolutionTimeouts</a>

---

##### `disabledDataSources`<sup>Required</sup> <a name="disabledDataSources" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.disabledDataSources"></a>

```typescript
public readonly disabledDataSources: string[];
```

- *Type:* string[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `eventsToExport`<sup>Required</sup> <a name="eventsToExport" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.eventsToExport"></a>

```typescript
public readonly eventsToExport: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `iothubIds`<sup>Required</sup> <a name="iothubIds" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.iothubIds"></a>

```typescript
public readonly iothubIds: string[];
```

- *Type:* string[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `logAnalyticsWorkspaceId`<sup>Required</sup> <a name="logAnalyticsWorkspaceId" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.logAnalyticsWorkspaceId"></a>

```typescript
public readonly logAnalyticsWorkspaceId: string;
```

- *Type:* string

---

##### `logUnmaskedIpsEnabled`<sup>Required</sup> <a name="logUnmaskedIpsEnabled" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.logUnmaskedIpsEnabled"></a>

```typescript
public readonly logUnmaskedIpsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `queryForResources`<sup>Required</sup> <a name="queryForResources" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.queryForResources"></a>

```typescript
public readonly queryForResources: string;
```

- *Type:* string

---

##### `querySubscriptionIds`<sup>Required</sup> <a name="querySubscriptionIds" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.querySubscriptionIds"></a>

```typescript
public readonly querySubscriptionIds: string[];
```

- *Type:* string[]

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IotSecuritySolutionAdditionalWorkspace <a name="IotSecuritySolutionAdditionalWorkspace" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspace"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspace.Initializer"></a>

```typescript
import { iotSecuritySolution } from '@cdktn/provider-azurerm'

const iotSecuritySolutionAdditionalWorkspace: iotSecuritySolution.IotSecuritySolutionAdditionalWorkspace = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspace.property.dataTypes">dataTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/iot_security_solution#data_types IotSecuritySolution#data_types}. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspace.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/iot_security_solution#workspace_id IotSecuritySolution#workspace_id}. |

---

##### `dataTypes`<sup>Required</sup> <a name="dataTypes" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspace.property.dataTypes"></a>

```typescript
public readonly dataTypes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/iot_security_solution#data_types IotSecuritySolution#data_types}.

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspace.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/iot_security_solution#workspace_id IotSecuritySolution#workspace_id}.

---

### IotSecuritySolutionConfig <a name="IotSecuritySolutionConfig" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.Initializer"></a>

```typescript
import { iotSecuritySolution } from '@cdktn/provider-azurerm'

const iotSecuritySolutionConfig: iotSecuritySolution.IotSecuritySolutionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/iot_security_solution#display_name IotSecuritySolution#display_name}. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.iothubIds">iothubIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/iot_security_solution#iothub_ids IotSecuritySolution#iothub_ids}. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/iot_security_solution#location IotSecuritySolution#location}. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/iot_security_solution#name IotSecuritySolution#name}. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/iot_security_solution#resource_group_name IotSecuritySolution#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.additionalWorkspace">additionalWorkspace</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspace">IotSecuritySolutionAdditionalWorkspace</a>[]</code> | additional_workspace block. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.disabledDataSources">disabledDataSources</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/iot_security_solution#disabled_data_sources IotSecuritySolution#disabled_data_sources}. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/iot_security_solution#enabled IotSecuritySolution#enabled}. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.eventsToExport">eventsToExport</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/iot_security_solution#events_to_export IotSecuritySolution#events_to_export}. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/iot_security_solution#id IotSecuritySolution#id}. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.logAnalyticsWorkspaceId">logAnalyticsWorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/iot_security_solution#log_analytics_workspace_id IotSecuritySolution#log_analytics_workspace_id}. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.logUnmaskedIpsEnabled">logUnmaskedIpsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/iot_security_solution#log_unmasked_ips_enabled IotSecuritySolution#log_unmasked_ips_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.queryForResources">queryForResources</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/iot_security_solution#query_for_resources IotSecuritySolution#query_for_resources}. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.querySubscriptionIds">querySubscriptionIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/iot_security_solution#query_subscription_ids IotSecuritySolution#query_subscription_ids}. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.recommendations">recommendations</a></code> | <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendations">IotSecuritySolutionRecommendations</a></code> | recommendations block. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/iot_security_solution#tags IotSecuritySolution#tags}. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts">IotSecuritySolutionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/iot_security_solution#display_name IotSecuritySolution#display_name}.

---

##### `iothubIds`<sup>Required</sup> <a name="iothubIds" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.iothubIds"></a>

```typescript
public readonly iothubIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/iot_security_solution#iothub_ids IotSecuritySolution#iothub_ids}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/iot_security_solution#location IotSecuritySolution#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/iot_security_solution#name IotSecuritySolution#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/iot_security_solution#resource_group_name IotSecuritySolution#resource_group_name}.

---

##### `additionalWorkspace`<sup>Optional</sup> <a name="additionalWorkspace" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.additionalWorkspace"></a>

```typescript
public readonly additionalWorkspace: IResolvable | IotSecuritySolutionAdditionalWorkspace[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspace">IotSecuritySolutionAdditionalWorkspace</a>[]

additional_workspace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/iot_security_solution#additional_workspace IotSecuritySolution#additional_workspace}

---

##### `disabledDataSources`<sup>Optional</sup> <a name="disabledDataSources" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.disabledDataSources"></a>

```typescript
public readonly disabledDataSources: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/iot_security_solution#disabled_data_sources IotSecuritySolution#disabled_data_sources}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/iot_security_solution#enabled IotSecuritySolution#enabled}.

---

##### `eventsToExport`<sup>Optional</sup> <a name="eventsToExport" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.eventsToExport"></a>

```typescript
public readonly eventsToExport: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/iot_security_solution#events_to_export IotSecuritySolution#events_to_export}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/iot_security_solution#id IotSecuritySolution#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logAnalyticsWorkspaceId`<sup>Optional</sup> <a name="logAnalyticsWorkspaceId" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.logAnalyticsWorkspaceId"></a>

```typescript
public readonly logAnalyticsWorkspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/iot_security_solution#log_analytics_workspace_id IotSecuritySolution#log_analytics_workspace_id}.

---

##### `logUnmaskedIpsEnabled`<sup>Optional</sup> <a name="logUnmaskedIpsEnabled" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.logUnmaskedIpsEnabled"></a>

```typescript
public readonly logUnmaskedIpsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/iot_security_solution#log_unmasked_ips_enabled IotSecuritySolution#log_unmasked_ips_enabled}.

---

##### `queryForResources`<sup>Optional</sup> <a name="queryForResources" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.queryForResources"></a>

```typescript
public readonly queryForResources: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/iot_security_solution#query_for_resources IotSecuritySolution#query_for_resources}.

---

##### `querySubscriptionIds`<sup>Optional</sup> <a name="querySubscriptionIds" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.querySubscriptionIds"></a>

```typescript
public readonly querySubscriptionIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/iot_security_solution#query_subscription_ids IotSecuritySolution#query_subscription_ids}.

---

##### `recommendations`<sup>Optional</sup> <a name="recommendations" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.recommendations"></a>

```typescript
public readonly recommendations: IotSecuritySolutionRecommendations;
```

- *Type:* <a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendations">IotSecuritySolutionRecommendations</a>

recommendations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/iot_security_solution#recommendations IotSecuritySolution#recommendations}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/iot_security_solution#tags IotSecuritySolution#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: IotSecuritySolutionTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts">IotSecuritySolutionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/iot_security_solution#timeouts IotSecuritySolution#timeouts}

---

### IotSecuritySolutionRecommendations <a name="IotSecuritySolutionRecommendations" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendations.Initializer"></a>

```typescript
import { iotSecuritySolution } from '@cdktn/provider-azurerm'

const iotSecuritySolutionRecommendations: iotSecuritySolution.IotSecuritySolutionRecommendations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendations.property.acrAuthentication">acrAuthentication</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/iot_security_solution#acr_authentication IotSecuritySolution#acr_authentication}. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendations.property.agentSendUnutilizedMsg">agentSendUnutilizedMsg</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/iot_security_solution#agent_send_unutilized_msg IotSecuritySolution#agent_send_unutilized_msg}. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendations.property.baseline">baseline</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/iot_security_solution#baseline IotSecuritySolution#baseline}. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendations.property.edgeHubMemOptimize">edgeHubMemOptimize</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/iot_security_solution#edge_hub_mem_optimize IotSecuritySolution#edge_hub_mem_optimize}. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendations.property.edgeLoggingOption">edgeLoggingOption</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/iot_security_solution#edge_logging_option IotSecuritySolution#edge_logging_option}. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendations.property.inconsistentModuleSettings">inconsistentModuleSettings</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/iot_security_solution#inconsistent_module_settings IotSecuritySolution#inconsistent_module_settings}. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendations.property.installAgent">installAgent</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/iot_security_solution#install_agent IotSecuritySolution#install_agent}. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendations.property.ipFilterDenyAll">ipFilterDenyAll</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/iot_security_solution#ip_filter_deny_all IotSecuritySolution#ip_filter_deny_all}. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendations.property.ipFilterPermissiveRule">ipFilterPermissiveRule</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/iot_security_solution#ip_filter_permissive_rule IotSecuritySolution#ip_filter_permissive_rule}. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendations.property.openPorts">openPorts</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/iot_security_solution#open_ports IotSecuritySolution#open_ports}. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendations.property.permissiveFirewallPolicy">permissiveFirewallPolicy</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/iot_security_solution#permissive_firewall_policy IotSecuritySolution#permissive_firewall_policy}. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendations.property.permissiveInputFirewallRules">permissiveInputFirewallRules</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/iot_security_solution#permissive_input_firewall_rules IotSecuritySolution#permissive_input_firewall_rules}. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendations.property.permissiveOutputFirewallRules">permissiveOutputFirewallRules</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/iot_security_solution#permissive_output_firewall_rules IotSecuritySolution#permissive_output_firewall_rules}. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendations.property.privilegedDockerOptions">privilegedDockerOptions</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/iot_security_solution#privileged_docker_options IotSecuritySolution#privileged_docker_options}. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendations.property.sharedCredentials">sharedCredentials</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/iot_security_solution#shared_credentials IotSecuritySolution#shared_credentials}. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendations.property.vulnerableTlsCipherSuite">vulnerableTlsCipherSuite</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/iot_security_solution#vulnerable_tls_cipher_suite IotSecuritySolution#vulnerable_tls_cipher_suite}. |

---

##### `acrAuthentication`<sup>Optional</sup> <a name="acrAuthentication" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendations.property.acrAuthentication"></a>

```typescript
public readonly acrAuthentication: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/iot_security_solution#acr_authentication IotSecuritySolution#acr_authentication}.

---

##### `agentSendUnutilizedMsg`<sup>Optional</sup> <a name="agentSendUnutilizedMsg" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendations.property.agentSendUnutilizedMsg"></a>

```typescript
public readonly agentSendUnutilizedMsg: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/iot_security_solution#agent_send_unutilized_msg IotSecuritySolution#agent_send_unutilized_msg}.

---

##### `baseline`<sup>Optional</sup> <a name="baseline" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendations.property.baseline"></a>

```typescript
public readonly baseline: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/iot_security_solution#baseline IotSecuritySolution#baseline}.

---

##### `edgeHubMemOptimize`<sup>Optional</sup> <a name="edgeHubMemOptimize" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendations.property.edgeHubMemOptimize"></a>

```typescript
public readonly edgeHubMemOptimize: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/iot_security_solution#edge_hub_mem_optimize IotSecuritySolution#edge_hub_mem_optimize}.

---

##### `edgeLoggingOption`<sup>Optional</sup> <a name="edgeLoggingOption" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendations.property.edgeLoggingOption"></a>

```typescript
public readonly edgeLoggingOption: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/iot_security_solution#edge_logging_option IotSecuritySolution#edge_logging_option}.

---

##### `inconsistentModuleSettings`<sup>Optional</sup> <a name="inconsistentModuleSettings" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendations.property.inconsistentModuleSettings"></a>

```typescript
public readonly inconsistentModuleSettings: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/iot_security_solution#inconsistent_module_settings IotSecuritySolution#inconsistent_module_settings}.

---

##### `installAgent`<sup>Optional</sup> <a name="installAgent" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendations.property.installAgent"></a>

```typescript
public readonly installAgent: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/iot_security_solution#install_agent IotSecuritySolution#install_agent}.

---

##### `ipFilterDenyAll`<sup>Optional</sup> <a name="ipFilterDenyAll" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendations.property.ipFilterDenyAll"></a>

```typescript
public readonly ipFilterDenyAll: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/iot_security_solution#ip_filter_deny_all IotSecuritySolution#ip_filter_deny_all}.

---

##### `ipFilterPermissiveRule`<sup>Optional</sup> <a name="ipFilterPermissiveRule" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendations.property.ipFilterPermissiveRule"></a>

```typescript
public readonly ipFilterPermissiveRule: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/iot_security_solution#ip_filter_permissive_rule IotSecuritySolution#ip_filter_permissive_rule}.

---

##### `openPorts`<sup>Optional</sup> <a name="openPorts" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendations.property.openPorts"></a>

```typescript
public readonly openPorts: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/iot_security_solution#open_ports IotSecuritySolution#open_ports}.

---

##### `permissiveFirewallPolicy`<sup>Optional</sup> <a name="permissiveFirewallPolicy" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendations.property.permissiveFirewallPolicy"></a>

```typescript
public readonly permissiveFirewallPolicy: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/iot_security_solution#permissive_firewall_policy IotSecuritySolution#permissive_firewall_policy}.

---

##### `permissiveInputFirewallRules`<sup>Optional</sup> <a name="permissiveInputFirewallRules" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendations.property.permissiveInputFirewallRules"></a>

```typescript
public readonly permissiveInputFirewallRules: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/iot_security_solution#permissive_input_firewall_rules IotSecuritySolution#permissive_input_firewall_rules}.

---

##### `permissiveOutputFirewallRules`<sup>Optional</sup> <a name="permissiveOutputFirewallRules" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendations.property.permissiveOutputFirewallRules"></a>

```typescript
public readonly permissiveOutputFirewallRules: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/iot_security_solution#permissive_output_firewall_rules IotSecuritySolution#permissive_output_firewall_rules}.

---

##### `privilegedDockerOptions`<sup>Optional</sup> <a name="privilegedDockerOptions" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendations.property.privilegedDockerOptions"></a>

```typescript
public readonly privilegedDockerOptions: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/iot_security_solution#privileged_docker_options IotSecuritySolution#privileged_docker_options}.

---

##### `sharedCredentials`<sup>Optional</sup> <a name="sharedCredentials" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendations.property.sharedCredentials"></a>

```typescript
public readonly sharedCredentials: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/iot_security_solution#shared_credentials IotSecuritySolution#shared_credentials}.

---

##### `vulnerableTlsCipherSuite`<sup>Optional</sup> <a name="vulnerableTlsCipherSuite" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendations.property.vulnerableTlsCipherSuite"></a>

```typescript
public readonly vulnerableTlsCipherSuite: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/iot_security_solution#vulnerable_tls_cipher_suite IotSecuritySolution#vulnerable_tls_cipher_suite}.

---

### IotSecuritySolutionTimeouts <a name="IotSecuritySolutionTimeouts" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts.Initializer"></a>

```typescript
import { iotSecuritySolution } from '@cdktn/provider-azurerm'

const iotSecuritySolutionTimeouts: iotSecuritySolution.IotSecuritySolutionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/iot_security_solution#create IotSecuritySolution#create}. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/iot_security_solution#delete IotSecuritySolution#delete}. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/iot_security_solution#read IotSecuritySolution#read}. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/iot_security_solution#update IotSecuritySolution#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/iot_security_solution#create IotSecuritySolution#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/iot_security_solution#delete IotSecuritySolution#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/iot_security_solution#read IotSecuritySolution#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/iot_security_solution#update IotSecuritySolution#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotSecuritySolutionAdditionalWorkspaceList <a name="IotSecuritySolutionAdditionalWorkspaceList" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.Initializer"></a>

```typescript
import { iotSecuritySolution } from '@cdktn/provider-azurerm'

new iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.get"></a>

```typescript
public get(index: number): IotSecuritySolutionAdditionalWorkspaceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspace">IotSecuritySolutionAdditionalWorkspace</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotSecuritySolutionAdditionalWorkspace[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspace">IotSecuritySolutionAdditionalWorkspace</a>[]

---


### IotSecuritySolutionAdditionalWorkspaceOutputReference <a name="IotSecuritySolutionAdditionalWorkspaceOutputReference" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.Initializer"></a>

```typescript
import { iotSecuritySolution } from '@cdktn/provider-azurerm'

new iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.property.dataTypesInput">dataTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.property.dataTypes">dataTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspace">IotSecuritySolutionAdditionalWorkspace</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataTypesInput`<sup>Optional</sup> <a name="dataTypesInput" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.property.dataTypesInput"></a>

```typescript
public readonly dataTypesInput: string[];
```

- *Type:* string[]

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `dataTypes`<sup>Required</sup> <a name="dataTypes" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.property.dataTypes"></a>

```typescript
public readonly dataTypes: string[];
```

- *Type:* string[]

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotSecuritySolutionAdditionalWorkspace;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspace">IotSecuritySolutionAdditionalWorkspace</a>

---


### IotSecuritySolutionRecommendationsOutputReference <a name="IotSecuritySolutionRecommendationsOutputReference" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.Initializer"></a>

```typescript
import { iotSecuritySolution } from '@cdktn/provider-azurerm'

new iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.resetAcrAuthentication">resetAcrAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.resetAgentSendUnutilizedMsg">resetAgentSendUnutilizedMsg</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.resetBaseline">resetBaseline</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.resetEdgeHubMemOptimize">resetEdgeHubMemOptimize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.resetEdgeLoggingOption">resetEdgeLoggingOption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.resetInconsistentModuleSettings">resetInconsistentModuleSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.resetInstallAgent">resetInstallAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.resetIpFilterDenyAll">resetIpFilterDenyAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.resetIpFilterPermissiveRule">resetIpFilterPermissiveRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.resetOpenPorts">resetOpenPorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.resetPermissiveFirewallPolicy">resetPermissiveFirewallPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.resetPermissiveInputFirewallRules">resetPermissiveInputFirewallRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.resetPermissiveOutputFirewallRules">resetPermissiveOutputFirewallRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.resetPrivilegedDockerOptions">resetPrivilegedDockerOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.resetSharedCredentials">resetSharedCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.resetVulnerableTlsCipherSuite">resetVulnerableTlsCipherSuite</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAcrAuthentication` <a name="resetAcrAuthentication" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.resetAcrAuthentication"></a>

```typescript
public resetAcrAuthentication(): void
```

##### `resetAgentSendUnutilizedMsg` <a name="resetAgentSendUnutilizedMsg" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.resetAgentSendUnutilizedMsg"></a>

```typescript
public resetAgentSendUnutilizedMsg(): void
```

##### `resetBaseline` <a name="resetBaseline" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.resetBaseline"></a>

```typescript
public resetBaseline(): void
```

##### `resetEdgeHubMemOptimize` <a name="resetEdgeHubMemOptimize" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.resetEdgeHubMemOptimize"></a>

```typescript
public resetEdgeHubMemOptimize(): void
```

##### `resetEdgeLoggingOption` <a name="resetEdgeLoggingOption" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.resetEdgeLoggingOption"></a>

```typescript
public resetEdgeLoggingOption(): void
```

##### `resetInconsistentModuleSettings` <a name="resetInconsistentModuleSettings" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.resetInconsistentModuleSettings"></a>

```typescript
public resetInconsistentModuleSettings(): void
```

##### `resetInstallAgent` <a name="resetInstallAgent" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.resetInstallAgent"></a>

```typescript
public resetInstallAgent(): void
```

##### `resetIpFilterDenyAll` <a name="resetIpFilterDenyAll" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.resetIpFilterDenyAll"></a>

```typescript
public resetIpFilterDenyAll(): void
```

##### `resetIpFilterPermissiveRule` <a name="resetIpFilterPermissiveRule" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.resetIpFilterPermissiveRule"></a>

```typescript
public resetIpFilterPermissiveRule(): void
```

##### `resetOpenPorts` <a name="resetOpenPorts" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.resetOpenPorts"></a>

```typescript
public resetOpenPorts(): void
```

##### `resetPermissiveFirewallPolicy` <a name="resetPermissiveFirewallPolicy" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.resetPermissiveFirewallPolicy"></a>

```typescript
public resetPermissiveFirewallPolicy(): void
```

##### `resetPermissiveInputFirewallRules` <a name="resetPermissiveInputFirewallRules" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.resetPermissiveInputFirewallRules"></a>

```typescript
public resetPermissiveInputFirewallRules(): void
```

##### `resetPermissiveOutputFirewallRules` <a name="resetPermissiveOutputFirewallRules" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.resetPermissiveOutputFirewallRules"></a>

```typescript
public resetPermissiveOutputFirewallRules(): void
```

##### `resetPrivilegedDockerOptions` <a name="resetPrivilegedDockerOptions" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.resetPrivilegedDockerOptions"></a>

```typescript
public resetPrivilegedDockerOptions(): void
```

##### `resetSharedCredentials` <a name="resetSharedCredentials" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.resetSharedCredentials"></a>

```typescript
public resetSharedCredentials(): void
```

##### `resetVulnerableTlsCipherSuite` <a name="resetVulnerableTlsCipherSuite" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.resetVulnerableTlsCipherSuite"></a>

```typescript
public resetVulnerableTlsCipherSuite(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.acrAuthenticationInput">acrAuthenticationInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.agentSendUnutilizedMsgInput">agentSendUnutilizedMsgInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.baselineInput">baselineInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.edgeHubMemOptimizeInput">edgeHubMemOptimizeInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.edgeLoggingOptionInput">edgeLoggingOptionInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.inconsistentModuleSettingsInput">inconsistentModuleSettingsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.installAgentInput">installAgentInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.ipFilterDenyAllInput">ipFilterDenyAllInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.ipFilterPermissiveRuleInput">ipFilterPermissiveRuleInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.openPortsInput">openPortsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.permissiveFirewallPolicyInput">permissiveFirewallPolicyInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.permissiveInputFirewallRulesInput">permissiveInputFirewallRulesInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.permissiveOutputFirewallRulesInput">permissiveOutputFirewallRulesInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.privilegedDockerOptionsInput">privilegedDockerOptionsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.sharedCredentialsInput">sharedCredentialsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.vulnerableTlsCipherSuiteInput">vulnerableTlsCipherSuiteInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.acrAuthentication">acrAuthentication</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.agentSendUnutilizedMsg">agentSendUnutilizedMsg</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.baseline">baseline</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.edgeHubMemOptimize">edgeHubMemOptimize</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.edgeLoggingOption">edgeLoggingOption</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.inconsistentModuleSettings">inconsistentModuleSettings</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.installAgent">installAgent</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.ipFilterDenyAll">ipFilterDenyAll</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.ipFilterPermissiveRule">ipFilterPermissiveRule</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.openPorts">openPorts</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.permissiveFirewallPolicy">permissiveFirewallPolicy</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.permissiveInputFirewallRules">permissiveInputFirewallRules</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.permissiveOutputFirewallRules">permissiveOutputFirewallRules</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.privilegedDockerOptions">privilegedDockerOptions</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.sharedCredentials">sharedCredentials</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.vulnerableTlsCipherSuite">vulnerableTlsCipherSuite</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendations">IotSecuritySolutionRecommendations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `acrAuthenticationInput`<sup>Optional</sup> <a name="acrAuthenticationInput" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.acrAuthenticationInput"></a>

```typescript
public readonly acrAuthenticationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `agentSendUnutilizedMsgInput`<sup>Optional</sup> <a name="agentSendUnutilizedMsgInput" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.agentSendUnutilizedMsgInput"></a>

```typescript
public readonly agentSendUnutilizedMsgInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `baselineInput`<sup>Optional</sup> <a name="baselineInput" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.baselineInput"></a>

```typescript
public readonly baselineInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `edgeHubMemOptimizeInput`<sup>Optional</sup> <a name="edgeHubMemOptimizeInput" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.edgeHubMemOptimizeInput"></a>

```typescript
public readonly edgeHubMemOptimizeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `edgeLoggingOptionInput`<sup>Optional</sup> <a name="edgeLoggingOptionInput" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.edgeLoggingOptionInput"></a>

```typescript
public readonly edgeLoggingOptionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `inconsistentModuleSettingsInput`<sup>Optional</sup> <a name="inconsistentModuleSettingsInput" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.inconsistentModuleSettingsInput"></a>

```typescript
public readonly inconsistentModuleSettingsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `installAgentInput`<sup>Optional</sup> <a name="installAgentInput" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.installAgentInput"></a>

```typescript
public readonly installAgentInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `ipFilterDenyAllInput`<sup>Optional</sup> <a name="ipFilterDenyAllInput" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.ipFilterDenyAllInput"></a>

```typescript
public readonly ipFilterDenyAllInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `ipFilterPermissiveRuleInput`<sup>Optional</sup> <a name="ipFilterPermissiveRuleInput" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.ipFilterPermissiveRuleInput"></a>

```typescript
public readonly ipFilterPermissiveRuleInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `openPortsInput`<sup>Optional</sup> <a name="openPortsInput" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.openPortsInput"></a>

```typescript
public readonly openPortsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `permissiveFirewallPolicyInput`<sup>Optional</sup> <a name="permissiveFirewallPolicyInput" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.permissiveFirewallPolicyInput"></a>

```typescript
public readonly permissiveFirewallPolicyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `permissiveInputFirewallRulesInput`<sup>Optional</sup> <a name="permissiveInputFirewallRulesInput" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.permissiveInputFirewallRulesInput"></a>

```typescript
public readonly permissiveInputFirewallRulesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `permissiveOutputFirewallRulesInput`<sup>Optional</sup> <a name="permissiveOutputFirewallRulesInput" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.permissiveOutputFirewallRulesInput"></a>

```typescript
public readonly permissiveOutputFirewallRulesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `privilegedDockerOptionsInput`<sup>Optional</sup> <a name="privilegedDockerOptionsInput" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.privilegedDockerOptionsInput"></a>

```typescript
public readonly privilegedDockerOptionsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `sharedCredentialsInput`<sup>Optional</sup> <a name="sharedCredentialsInput" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.sharedCredentialsInput"></a>

```typescript
public readonly sharedCredentialsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `vulnerableTlsCipherSuiteInput`<sup>Optional</sup> <a name="vulnerableTlsCipherSuiteInput" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.vulnerableTlsCipherSuiteInput"></a>

```typescript
public readonly vulnerableTlsCipherSuiteInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `acrAuthentication`<sup>Required</sup> <a name="acrAuthentication" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.acrAuthentication"></a>

```typescript
public readonly acrAuthentication: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `agentSendUnutilizedMsg`<sup>Required</sup> <a name="agentSendUnutilizedMsg" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.agentSendUnutilizedMsg"></a>

```typescript
public readonly agentSendUnutilizedMsg: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `baseline`<sup>Required</sup> <a name="baseline" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.baseline"></a>

```typescript
public readonly baseline: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `edgeHubMemOptimize`<sup>Required</sup> <a name="edgeHubMemOptimize" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.edgeHubMemOptimize"></a>

```typescript
public readonly edgeHubMemOptimize: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `edgeLoggingOption`<sup>Required</sup> <a name="edgeLoggingOption" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.edgeLoggingOption"></a>

```typescript
public readonly edgeLoggingOption: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `inconsistentModuleSettings`<sup>Required</sup> <a name="inconsistentModuleSettings" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.inconsistentModuleSettings"></a>

```typescript
public readonly inconsistentModuleSettings: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `installAgent`<sup>Required</sup> <a name="installAgent" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.installAgent"></a>

```typescript
public readonly installAgent: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `ipFilterDenyAll`<sup>Required</sup> <a name="ipFilterDenyAll" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.ipFilterDenyAll"></a>

```typescript
public readonly ipFilterDenyAll: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `ipFilterPermissiveRule`<sup>Required</sup> <a name="ipFilterPermissiveRule" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.ipFilterPermissiveRule"></a>

```typescript
public readonly ipFilterPermissiveRule: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `openPorts`<sup>Required</sup> <a name="openPorts" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.openPorts"></a>

```typescript
public readonly openPorts: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `permissiveFirewallPolicy`<sup>Required</sup> <a name="permissiveFirewallPolicy" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.permissiveFirewallPolicy"></a>

```typescript
public readonly permissiveFirewallPolicy: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `permissiveInputFirewallRules`<sup>Required</sup> <a name="permissiveInputFirewallRules" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.permissiveInputFirewallRules"></a>

```typescript
public readonly permissiveInputFirewallRules: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `permissiveOutputFirewallRules`<sup>Required</sup> <a name="permissiveOutputFirewallRules" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.permissiveOutputFirewallRules"></a>

```typescript
public readonly permissiveOutputFirewallRules: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `privilegedDockerOptions`<sup>Required</sup> <a name="privilegedDockerOptions" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.privilegedDockerOptions"></a>

```typescript
public readonly privilegedDockerOptions: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `sharedCredentials`<sup>Required</sup> <a name="sharedCredentials" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.sharedCredentials"></a>

```typescript
public readonly sharedCredentials: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `vulnerableTlsCipherSuite`<sup>Required</sup> <a name="vulnerableTlsCipherSuite" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.vulnerableTlsCipherSuite"></a>

```typescript
public readonly vulnerableTlsCipherSuite: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IotSecuritySolutionRecommendations;
```

- *Type:* <a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendations">IotSecuritySolutionRecommendations</a>

---


### IotSecuritySolutionTimeoutsOutputReference <a name="IotSecuritySolutionTimeoutsOutputReference" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.Initializer"></a>

```typescript
import { iotSecuritySolution } from '@cdktn/provider-azurerm'

new iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts">IotSecuritySolutionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotSecuritySolutionTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts">IotSecuritySolutionTimeouts</a>

---



