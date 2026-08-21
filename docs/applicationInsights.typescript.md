# `applicationInsights` Submodule <a name="`applicationInsights` Submodule" id="@cdktn/provider-azurerm.applicationInsights"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApplicationInsights <a name="ApplicationInsights" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights azurerm_application_insights}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.Initializer"></a>

```typescript
import { applicationInsights } from '@cdktn/provider-azurerm'

new applicationInsights.ApplicationInsights(scope: Construct, id: string, config: ApplicationInsightsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig">ApplicationInsightsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig">ApplicationInsightsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.resetDailyDataCapInGb">resetDailyDataCapInGb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.resetDailyDataCapNotificationsEnabled">resetDailyDataCapNotificationsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.resetForceCustomerStorageForProfiler">resetForceCustomerStorageForProfiler</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.resetInternetIngestionEnabled">resetInternetIngestionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.resetInternetQueryEnabled">resetInternetQueryEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.resetIpMaskingEnabled">resetIpMaskingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.resetLocalAuthenticationEnabled">resetLocalAuthenticationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.resetRetentionInDays">resetRetentionInDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.resetSamplingPercentage">resetSamplingPercentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.putTimeouts"></a>

```typescript
public putTimeouts(value: ApplicationInsightsTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeouts">ApplicationInsightsTimeouts</a>

---

##### `resetDailyDataCapInGb` <a name="resetDailyDataCapInGb" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.resetDailyDataCapInGb"></a>

```typescript
public resetDailyDataCapInGb(): void
```

##### `resetDailyDataCapNotificationsEnabled` <a name="resetDailyDataCapNotificationsEnabled" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.resetDailyDataCapNotificationsEnabled"></a>

```typescript
public resetDailyDataCapNotificationsEnabled(): void
```

##### `resetForceCustomerStorageForProfiler` <a name="resetForceCustomerStorageForProfiler" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.resetForceCustomerStorageForProfiler"></a>

```typescript
public resetForceCustomerStorageForProfiler(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInternetIngestionEnabled` <a name="resetInternetIngestionEnabled" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.resetInternetIngestionEnabled"></a>

```typescript
public resetInternetIngestionEnabled(): void
```

##### `resetInternetQueryEnabled` <a name="resetInternetQueryEnabled" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.resetInternetQueryEnabled"></a>

```typescript
public resetInternetQueryEnabled(): void
```

##### `resetIpMaskingEnabled` <a name="resetIpMaskingEnabled" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.resetIpMaskingEnabled"></a>

```typescript
public resetIpMaskingEnabled(): void
```

##### `resetLocalAuthenticationEnabled` <a name="resetLocalAuthenticationEnabled" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.resetLocalAuthenticationEnabled"></a>

```typescript
public resetLocalAuthenticationEnabled(): void
```

##### `resetRetentionInDays` <a name="resetRetentionInDays" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.resetRetentionInDays"></a>

```typescript
public resetRetentionInDays(): void
```

##### `resetSamplingPercentage` <a name="resetSamplingPercentage" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.resetSamplingPercentage"></a>

```typescript
public resetSamplingPercentage(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ApplicationInsights resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.isConstruct"></a>

```typescript
import { applicationInsights } from '@cdktn/provider-azurerm'

applicationInsights.ApplicationInsights.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.isTerraformElement"></a>

```typescript
import { applicationInsights } from '@cdktn/provider-azurerm'

applicationInsights.ApplicationInsights.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.isTerraformResource"></a>

```typescript
import { applicationInsights } from '@cdktn/provider-azurerm'

applicationInsights.ApplicationInsights.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.generateConfigForImport"></a>

```typescript
import { applicationInsights } from '@cdktn/provider-azurerm'

applicationInsights.ApplicationInsights.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ApplicationInsights resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApplicationInsights to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApplicationInsights that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ApplicationInsights to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.appId">appId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.connectionString">connectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.instrumentationKey">instrumentationKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference">ApplicationInsightsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.applicationTypeInput">applicationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.dailyDataCapInGbInput">dailyDataCapInGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.dailyDataCapNotificationsEnabledInput">dailyDataCapNotificationsEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.forceCustomerStorageForProfilerInput">forceCustomerStorageForProfilerInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.internetIngestionEnabledInput">internetIngestionEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.internetQueryEnabledInput">internetQueryEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.ipMaskingEnabledInput">ipMaskingEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.localAuthenticationEnabledInput">localAuthenticationEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.retentionInDaysInput">retentionInDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.samplingPercentageInput">samplingPercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeouts">ApplicationInsightsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.applicationType">applicationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.dailyDataCapInGb">dailyDataCapInGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.dailyDataCapNotificationsEnabled">dailyDataCapNotificationsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.forceCustomerStorageForProfiler">forceCustomerStorageForProfiler</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.internetIngestionEnabled">internetIngestionEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.internetQueryEnabled">internetQueryEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.ipMaskingEnabled">ipMaskingEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.localAuthenticationEnabled">localAuthenticationEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.retentionInDays">retentionInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.samplingPercentage">samplingPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

---

##### `connectionString`<sup>Required</sup> <a name="connectionString" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.connectionString"></a>

```typescript
public readonly connectionString: string;
```

- *Type:* string

---

##### `instrumentationKey`<sup>Required</sup> <a name="instrumentationKey" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.instrumentationKey"></a>

```typescript
public readonly instrumentationKey: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.timeouts"></a>

```typescript
public readonly timeouts: ApplicationInsightsTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference">ApplicationInsightsTimeoutsOutputReference</a>

---

##### `applicationTypeInput`<sup>Optional</sup> <a name="applicationTypeInput" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.applicationTypeInput"></a>

```typescript
public readonly applicationTypeInput: string;
```

- *Type:* string

---

##### `dailyDataCapInGbInput`<sup>Optional</sup> <a name="dailyDataCapInGbInput" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.dailyDataCapInGbInput"></a>

```typescript
public readonly dailyDataCapInGbInput: number;
```

- *Type:* number

---

##### `dailyDataCapNotificationsEnabledInput`<sup>Optional</sup> <a name="dailyDataCapNotificationsEnabledInput" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.dailyDataCapNotificationsEnabledInput"></a>

```typescript
public readonly dailyDataCapNotificationsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `forceCustomerStorageForProfilerInput`<sup>Optional</sup> <a name="forceCustomerStorageForProfilerInput" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.forceCustomerStorageForProfilerInput"></a>

```typescript
public readonly forceCustomerStorageForProfilerInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `internetIngestionEnabledInput`<sup>Optional</sup> <a name="internetIngestionEnabledInput" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.internetIngestionEnabledInput"></a>

```typescript
public readonly internetIngestionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internetQueryEnabledInput`<sup>Optional</sup> <a name="internetQueryEnabledInput" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.internetQueryEnabledInput"></a>

```typescript
public readonly internetQueryEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `ipMaskingEnabledInput`<sup>Optional</sup> <a name="ipMaskingEnabledInput" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.ipMaskingEnabledInput"></a>

```typescript
public readonly ipMaskingEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `localAuthenticationEnabledInput`<sup>Optional</sup> <a name="localAuthenticationEnabledInput" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.localAuthenticationEnabledInput"></a>

```typescript
public readonly localAuthenticationEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `retentionInDaysInput`<sup>Optional</sup> <a name="retentionInDaysInput" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.retentionInDaysInput"></a>

```typescript
public readonly retentionInDaysInput: number;
```

- *Type:* number

---

##### `samplingPercentageInput`<sup>Optional</sup> <a name="samplingPercentageInput" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.samplingPercentageInput"></a>

```typescript
public readonly samplingPercentageInput: number;
```

- *Type:* number

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ApplicationInsightsTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeouts">ApplicationInsightsTimeouts</a>

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `applicationType`<sup>Required</sup> <a name="applicationType" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.applicationType"></a>

```typescript
public readonly applicationType: string;
```

- *Type:* string

---

##### `dailyDataCapInGb`<sup>Required</sup> <a name="dailyDataCapInGb" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.dailyDataCapInGb"></a>

```typescript
public readonly dailyDataCapInGb: number;
```

- *Type:* number

---

##### `dailyDataCapNotificationsEnabled`<sup>Required</sup> <a name="dailyDataCapNotificationsEnabled" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.dailyDataCapNotificationsEnabled"></a>

```typescript
public readonly dailyDataCapNotificationsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `forceCustomerStorageForProfiler`<sup>Required</sup> <a name="forceCustomerStorageForProfiler" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.forceCustomerStorageForProfiler"></a>

```typescript
public readonly forceCustomerStorageForProfiler: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internetIngestionEnabled`<sup>Required</sup> <a name="internetIngestionEnabled" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.internetIngestionEnabled"></a>

```typescript
public readonly internetIngestionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internetQueryEnabled`<sup>Required</sup> <a name="internetQueryEnabled" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.internetQueryEnabled"></a>

```typescript
public readonly internetQueryEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `ipMaskingEnabled`<sup>Required</sup> <a name="ipMaskingEnabled" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.ipMaskingEnabled"></a>

```typescript
public readonly ipMaskingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `localAuthenticationEnabled`<sup>Required</sup> <a name="localAuthenticationEnabled" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.localAuthenticationEnabled"></a>

```typescript
public readonly localAuthenticationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `retentionInDays`<sup>Required</sup> <a name="retentionInDays" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.retentionInDays"></a>

```typescript
public readonly retentionInDays: number;
```

- *Type:* number

---

##### `samplingPercentage`<sup>Required</sup> <a name="samplingPercentage" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.samplingPercentage"></a>

```typescript
public readonly samplingPercentage: number;
```

- *Type:* number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationInsightsConfig <a name="ApplicationInsightsConfig" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.Initializer"></a>

```typescript
import { applicationInsights } from '@cdktn/provider-azurerm'

const applicationInsightsConfig: applicationInsights.ApplicationInsightsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.applicationType">applicationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#application_type ApplicationInsights#application_type}. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#location ApplicationInsights#location}. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#name ApplicationInsights#name}. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#resource_group_name ApplicationInsights#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.dailyDataCapInGb">dailyDataCapInGb</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#daily_data_cap_in_gb ApplicationInsights#daily_data_cap_in_gb}. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.dailyDataCapNotificationsEnabled">dailyDataCapNotificationsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#daily_data_cap_notifications_enabled ApplicationInsights#daily_data_cap_notifications_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.forceCustomerStorageForProfiler">forceCustomerStorageForProfiler</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#force_customer_storage_for_profiler ApplicationInsights#force_customer_storage_for_profiler}. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#id ApplicationInsights#id}. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.internetIngestionEnabled">internetIngestionEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#internet_ingestion_enabled ApplicationInsights#internet_ingestion_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.internetQueryEnabled">internetQueryEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#internet_query_enabled ApplicationInsights#internet_query_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.ipMaskingEnabled">ipMaskingEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#ip_masking_enabled ApplicationInsights#ip_masking_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.localAuthenticationEnabled">localAuthenticationEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#local_authentication_enabled ApplicationInsights#local_authentication_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.retentionInDays">retentionInDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#retention_in_days ApplicationInsights#retention_in_days}. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.samplingPercentage">samplingPercentage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#sampling_percentage ApplicationInsights#sampling_percentage}. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#tags ApplicationInsights#tags}. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeouts">ApplicationInsightsTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#workspace_id ApplicationInsights#workspace_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `applicationType`<sup>Required</sup> <a name="applicationType" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.applicationType"></a>

```typescript
public readonly applicationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#application_type ApplicationInsights#application_type}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#location ApplicationInsights#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#name ApplicationInsights#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#resource_group_name ApplicationInsights#resource_group_name}.

---

##### `dailyDataCapInGb`<sup>Optional</sup> <a name="dailyDataCapInGb" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.dailyDataCapInGb"></a>

```typescript
public readonly dailyDataCapInGb: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#daily_data_cap_in_gb ApplicationInsights#daily_data_cap_in_gb}.

---

##### `dailyDataCapNotificationsEnabled`<sup>Optional</sup> <a name="dailyDataCapNotificationsEnabled" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.dailyDataCapNotificationsEnabled"></a>

```typescript
public readonly dailyDataCapNotificationsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#daily_data_cap_notifications_enabled ApplicationInsights#daily_data_cap_notifications_enabled}.

---

##### `forceCustomerStorageForProfiler`<sup>Optional</sup> <a name="forceCustomerStorageForProfiler" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.forceCustomerStorageForProfiler"></a>

```typescript
public readonly forceCustomerStorageForProfiler: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#force_customer_storage_for_profiler ApplicationInsights#force_customer_storage_for_profiler}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#id ApplicationInsights#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `internetIngestionEnabled`<sup>Optional</sup> <a name="internetIngestionEnabled" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.internetIngestionEnabled"></a>

```typescript
public readonly internetIngestionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#internet_ingestion_enabled ApplicationInsights#internet_ingestion_enabled}.

---

##### `internetQueryEnabled`<sup>Optional</sup> <a name="internetQueryEnabled" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.internetQueryEnabled"></a>

```typescript
public readonly internetQueryEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#internet_query_enabled ApplicationInsights#internet_query_enabled}.

---

##### `ipMaskingEnabled`<sup>Optional</sup> <a name="ipMaskingEnabled" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.ipMaskingEnabled"></a>

```typescript
public readonly ipMaskingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#ip_masking_enabled ApplicationInsights#ip_masking_enabled}.

---

##### `localAuthenticationEnabled`<sup>Optional</sup> <a name="localAuthenticationEnabled" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.localAuthenticationEnabled"></a>

```typescript
public readonly localAuthenticationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#local_authentication_enabled ApplicationInsights#local_authentication_enabled}.

---

##### `retentionInDays`<sup>Optional</sup> <a name="retentionInDays" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.retentionInDays"></a>

```typescript
public readonly retentionInDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#retention_in_days ApplicationInsights#retention_in_days}.

---

##### `samplingPercentage`<sup>Optional</sup> <a name="samplingPercentage" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.samplingPercentage"></a>

```typescript
public readonly samplingPercentage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#sampling_percentage ApplicationInsights#sampling_percentage}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#tags ApplicationInsights#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ApplicationInsightsTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeouts">ApplicationInsightsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#timeouts ApplicationInsights#timeouts}

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#workspace_id ApplicationInsights#workspace_id}.

---

### ApplicationInsightsTimeouts <a name="ApplicationInsightsTimeouts" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeouts.Initializer"></a>

```typescript
import { applicationInsights } from '@cdktn/provider-azurerm'

const applicationInsightsTimeouts: applicationInsights.ApplicationInsightsTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#create ApplicationInsights#create}. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#delete ApplicationInsights#delete}. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#read ApplicationInsights#read}. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#update ApplicationInsights#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#create ApplicationInsights#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#delete ApplicationInsights#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#read ApplicationInsights#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#update ApplicationInsights#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApplicationInsightsTimeoutsOutputReference <a name="ApplicationInsightsTimeoutsOutputReference" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.Initializer"></a>

```typescript
import { applicationInsights } from '@cdktn/provider-azurerm'

new applicationInsights.ApplicationInsightsTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeouts">ApplicationInsightsTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApplicationInsightsTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeouts">ApplicationInsightsTimeouts</a>

---



