# `applicationInsightsWorkbookTemplate` Submodule <a name="`applicationInsightsWorkbookTemplate` Submodule" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApplicationInsightsWorkbookTemplate <a name="ApplicationInsightsWorkbookTemplate" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/application_insights_workbook_template azurerm_application_insights_workbook_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.Initializer"></a>

```typescript
import { applicationInsightsWorkbookTemplate } from '@cdktn/provider-azurerm'

new applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate(scope: Construct, id: string, config: ApplicationInsightsWorkbookTemplateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig">ApplicationInsightsWorkbookTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig">ApplicationInsightsWorkbookTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.putGalleries">putGalleries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.resetAuthor">resetAuthor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.resetLocalized">resetLocalized</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putGalleries` <a name="putGalleries" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.putGalleries"></a>

```typescript
public putGalleries(value: IResolvable | ApplicationInsightsWorkbookTemplateGalleries[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.putGalleries.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleries">ApplicationInsightsWorkbookTemplateGalleries</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.putTimeouts"></a>

```typescript
public putTimeouts(value: ApplicationInsightsWorkbookTemplateTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeouts">ApplicationInsightsWorkbookTemplateTimeouts</a>

---

##### `resetAuthor` <a name="resetAuthor" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.resetAuthor"></a>

```typescript
public resetAuthor(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocalized` <a name="resetLocalized" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.resetLocalized"></a>

```typescript
public resetLocalized(): void
```

##### `resetPriority` <a name="resetPriority" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.resetPriority"></a>

```typescript
public resetPriority(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ApplicationInsightsWorkbookTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.isConstruct"></a>

```typescript
import { applicationInsightsWorkbookTemplate } from '@cdktn/provider-azurerm'

applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.isTerraformElement"></a>

```typescript
import { applicationInsightsWorkbookTemplate } from '@cdktn/provider-azurerm'

applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.isTerraformResource"></a>

```typescript
import { applicationInsightsWorkbookTemplate } from '@cdktn/provider-azurerm'

applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.generateConfigForImport"></a>

```typescript
import { applicationInsightsWorkbookTemplate } from '@cdktn/provider-azurerm'

applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ApplicationInsightsWorkbookTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApplicationInsightsWorkbookTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApplicationInsightsWorkbookTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/application_insights_workbook_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ApplicationInsightsWorkbookTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.galleries">galleries</a></code> | <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesList">ApplicationInsightsWorkbookTemplateGalleriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference">ApplicationInsightsWorkbookTemplateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.authorInput">authorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.galleriesInput">galleriesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleries">ApplicationInsightsWorkbookTemplateGalleries</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.localizedInput">localizedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.templateDataInput">templateDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeouts">ApplicationInsightsWorkbookTemplateTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.author">author</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.localized">localized</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.templateData">templateData</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `galleries`<sup>Required</sup> <a name="galleries" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.galleries"></a>

```typescript
public readonly galleries: ApplicationInsightsWorkbookTemplateGalleriesList;
```

- *Type:* <a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesList">ApplicationInsightsWorkbookTemplateGalleriesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.timeouts"></a>

```typescript
public readonly timeouts: ApplicationInsightsWorkbookTemplateTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference">ApplicationInsightsWorkbookTemplateTimeoutsOutputReference</a>

---

##### `authorInput`<sup>Optional</sup> <a name="authorInput" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.authorInput"></a>

```typescript
public readonly authorInput: string;
```

- *Type:* string

---

##### `galleriesInput`<sup>Optional</sup> <a name="galleriesInput" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.galleriesInput"></a>

```typescript
public readonly galleriesInput: IResolvable | ApplicationInsightsWorkbookTemplateGalleries[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleries">ApplicationInsightsWorkbookTemplateGalleries</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `localizedInput`<sup>Optional</sup> <a name="localizedInput" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.localizedInput"></a>

```typescript
public readonly localizedInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `templateDataInput`<sup>Optional</sup> <a name="templateDataInput" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.templateDataInput"></a>

```typescript
public readonly templateDataInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ApplicationInsightsWorkbookTemplateTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeouts">ApplicationInsightsWorkbookTemplateTimeouts</a>

---

##### `author`<sup>Required</sup> <a name="author" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.author"></a>

```typescript
public readonly author: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `localized`<sup>Required</sup> <a name="localized" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.localized"></a>

```typescript
public readonly localized: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `templateData`<sup>Required</sup> <a name="templateData" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.templateData"></a>

```typescript
public readonly templateData: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationInsightsWorkbookTemplateConfig <a name="ApplicationInsightsWorkbookTemplateConfig" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.Initializer"></a>

```typescript
import { applicationInsightsWorkbookTemplate } from '@cdktn/provider-azurerm'

const applicationInsightsWorkbookTemplateConfig: applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.galleries">galleries</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleries">ApplicationInsightsWorkbookTemplateGalleries</a>[]</code> | galleries block. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/application_insights_workbook_template#location ApplicationInsightsWorkbookTemplate#location}. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/application_insights_workbook_template#name ApplicationInsightsWorkbookTemplate#name}. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/application_insights_workbook_template#resource_group_name ApplicationInsightsWorkbookTemplate#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.templateData">templateData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/application_insights_workbook_template#template_data ApplicationInsightsWorkbookTemplate#template_data}. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.author">author</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/application_insights_workbook_template#author ApplicationInsightsWorkbookTemplate#author}. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/application_insights_workbook_template#id ApplicationInsightsWorkbookTemplate#id}. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.localized">localized</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/application_insights_workbook_template#localized ApplicationInsightsWorkbookTemplate#localized}. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.priority">priority</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/application_insights_workbook_template#priority ApplicationInsightsWorkbookTemplate#priority}. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/application_insights_workbook_template#tags ApplicationInsightsWorkbookTemplate#tags}. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeouts">ApplicationInsightsWorkbookTemplateTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `galleries`<sup>Required</sup> <a name="galleries" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.galleries"></a>

```typescript
public readonly galleries: IResolvable | ApplicationInsightsWorkbookTemplateGalleries[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleries">ApplicationInsightsWorkbookTemplateGalleries</a>[]

galleries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/application_insights_workbook_template#galleries ApplicationInsightsWorkbookTemplate#galleries}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/application_insights_workbook_template#location ApplicationInsightsWorkbookTemplate#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/application_insights_workbook_template#name ApplicationInsightsWorkbookTemplate#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/application_insights_workbook_template#resource_group_name ApplicationInsightsWorkbookTemplate#resource_group_name}.

---

##### `templateData`<sup>Required</sup> <a name="templateData" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.templateData"></a>

```typescript
public readonly templateData: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/application_insights_workbook_template#template_data ApplicationInsightsWorkbookTemplate#template_data}.

---

##### `author`<sup>Optional</sup> <a name="author" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.author"></a>

```typescript
public readonly author: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/application_insights_workbook_template#author ApplicationInsightsWorkbookTemplate#author}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/application_insights_workbook_template#id ApplicationInsightsWorkbookTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `localized`<sup>Optional</sup> <a name="localized" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.localized"></a>

```typescript
public readonly localized: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/application_insights_workbook_template#localized ApplicationInsightsWorkbookTemplate#localized}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/application_insights_workbook_template#priority ApplicationInsightsWorkbookTemplate#priority}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/application_insights_workbook_template#tags ApplicationInsightsWorkbookTemplate#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ApplicationInsightsWorkbookTemplateTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeouts">ApplicationInsightsWorkbookTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/application_insights_workbook_template#timeouts ApplicationInsightsWorkbookTemplate#timeouts}

---

### ApplicationInsightsWorkbookTemplateGalleries <a name="ApplicationInsightsWorkbookTemplateGalleries" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleries.Initializer"></a>

```typescript
import { applicationInsightsWorkbookTemplate } from '@cdktn/provider-azurerm'

const applicationInsightsWorkbookTemplateGalleries: applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleries = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleries.property.category">category</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/application_insights_workbook_template#category ApplicationInsightsWorkbookTemplate#category}. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleries.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/application_insights_workbook_template#name ApplicationInsightsWorkbookTemplate#name}. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleries.property.order">order</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/application_insights_workbook_template#order ApplicationInsightsWorkbookTemplate#order}. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleries.property.resourceType">resourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/application_insights_workbook_template#resource_type ApplicationInsightsWorkbookTemplate#resource_type}. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleries.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/application_insights_workbook_template#type ApplicationInsightsWorkbookTemplate#type}. |

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleries.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/application_insights_workbook_template#category ApplicationInsightsWorkbookTemplate#category}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleries.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/application_insights_workbook_template#name ApplicationInsightsWorkbookTemplate#name}.

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleries.property.order"></a>

```typescript
public readonly order: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/application_insights_workbook_template#order ApplicationInsightsWorkbookTemplate#order}.

---

##### `resourceType`<sup>Optional</sup> <a name="resourceType" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleries.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/application_insights_workbook_template#resource_type ApplicationInsightsWorkbookTemplate#resource_type}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleries.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/application_insights_workbook_template#type ApplicationInsightsWorkbookTemplate#type}.

---

### ApplicationInsightsWorkbookTemplateTimeouts <a name="ApplicationInsightsWorkbookTemplateTimeouts" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeouts.Initializer"></a>

```typescript
import { applicationInsightsWorkbookTemplate } from '@cdktn/provider-azurerm'

const applicationInsightsWorkbookTemplateTimeouts: applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/application_insights_workbook_template#create ApplicationInsightsWorkbookTemplate#create}. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/application_insights_workbook_template#delete ApplicationInsightsWorkbookTemplate#delete}. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/application_insights_workbook_template#read ApplicationInsightsWorkbookTemplate#read}. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/application_insights_workbook_template#update ApplicationInsightsWorkbookTemplate#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/application_insights_workbook_template#create ApplicationInsightsWorkbookTemplate#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/application_insights_workbook_template#delete ApplicationInsightsWorkbookTemplate#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/application_insights_workbook_template#read ApplicationInsightsWorkbookTemplate#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/application_insights_workbook_template#update ApplicationInsightsWorkbookTemplate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApplicationInsightsWorkbookTemplateGalleriesList <a name="ApplicationInsightsWorkbookTemplateGalleriesList" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesList.Initializer"></a>

```typescript
import { applicationInsightsWorkbookTemplate } from '@cdktn/provider-azurerm'

new applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesList.get"></a>

```typescript
public get(index: number): ApplicationInsightsWorkbookTemplateGalleriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleries">ApplicationInsightsWorkbookTemplateGalleries</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApplicationInsightsWorkbookTemplateGalleries[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleries">ApplicationInsightsWorkbookTemplateGalleries</a>[]

---


### ApplicationInsightsWorkbookTemplateGalleriesOutputReference <a name="ApplicationInsightsWorkbookTemplateGalleriesOutputReference" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.Initializer"></a>

```typescript
import { applicationInsightsWorkbookTemplate } from '@cdktn/provider-azurerm'

new applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.resetOrder">resetOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.resetResourceType">resetResourceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOrder` <a name="resetOrder" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.resetOrder"></a>

```typescript
public resetOrder(): void
```

##### `resetResourceType` <a name="resetResourceType" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.resetResourceType"></a>

```typescript
public resetResourceType(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.property.categoryInput">categoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.property.orderInput">orderInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.property.resourceTypeInput">resourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.property.category">category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.property.order">order</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleries">ApplicationInsightsWorkbookTemplateGalleries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `categoryInput`<sup>Optional</sup> <a name="categoryInput" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.property.categoryInput"></a>

```typescript
public readonly categoryInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.property.orderInput"></a>

```typescript
public readonly orderInput: number;
```

- *Type:* number

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.property.resourceTypeInput"></a>

```typescript
public readonly resourceTypeInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.property.order"></a>

```typescript
public readonly order: number;
```

- *Type:* number

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleriesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApplicationInsightsWorkbookTemplateGalleries;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateGalleries">ApplicationInsightsWorkbookTemplateGalleries</a>

---


### ApplicationInsightsWorkbookTemplateTimeoutsOutputReference <a name="ApplicationInsightsWorkbookTemplateTimeoutsOutputReference" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.Initializer"></a>

```typescript
import { applicationInsightsWorkbookTemplate } from '@cdktn/provider-azurerm'

new applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeouts">ApplicationInsightsWorkbookTemplateTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApplicationInsightsWorkbookTemplateTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.applicationInsightsWorkbookTemplate.ApplicationInsightsWorkbookTemplateTimeouts">ApplicationInsightsWorkbookTemplateTimeouts</a>

---



