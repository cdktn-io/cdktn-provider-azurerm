# `streamAnalyticsFunctionJavascriptUdf` Submodule <a name="`streamAnalyticsFunctionJavascriptUdf` Submodule" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StreamAnalyticsFunctionJavascriptUdf <a name="StreamAnalyticsFunctionJavascriptUdf" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/stream_analytics_function_javascript_udf azurerm_stream_analytics_function_javascript_udf}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.Initializer"></a>

```typescript
import { streamAnalyticsFunctionJavascriptUdf } from '@cdktn/provider-azurerm'

new streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf(scope: Construct, id: string, config: StreamAnalyticsFunctionJavascriptUdfConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfConfig">StreamAnalyticsFunctionJavascriptUdfConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfConfig">StreamAnalyticsFunctionJavascriptUdfConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.putInput">putInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.putOutput">putOutput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putInput` <a name="putInput" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.putInput"></a>

```typescript
public putInput(value: IResolvable | StreamAnalyticsFunctionJavascriptUdfInput[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.putInput.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInput">StreamAnalyticsFunctionJavascriptUdfInput</a>[]

---

##### `putOutput` <a name="putOutput" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.putOutput"></a>

```typescript
public putOutput(value: StreamAnalyticsFunctionJavascriptUdfOutput): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.putOutput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutput">StreamAnalyticsFunctionJavascriptUdfOutput</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.putTimeouts"></a>

```typescript
public putTimeouts(value: StreamAnalyticsFunctionJavascriptUdfTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeouts">StreamAnalyticsFunctionJavascriptUdfTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a StreamAnalyticsFunctionJavascriptUdf resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.isConstruct"></a>

```typescript
import { streamAnalyticsFunctionJavascriptUdf } from '@cdktn/provider-azurerm'

streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.isTerraformElement"></a>

```typescript
import { streamAnalyticsFunctionJavascriptUdf } from '@cdktn/provider-azurerm'

streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.isTerraformResource"></a>

```typescript
import { streamAnalyticsFunctionJavascriptUdf } from '@cdktn/provider-azurerm'

streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.generateConfigForImport"></a>

```typescript
import { streamAnalyticsFunctionJavascriptUdf } from '@cdktn/provider-azurerm'

streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a StreamAnalyticsFunctionJavascriptUdf resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StreamAnalyticsFunctionJavascriptUdf to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StreamAnalyticsFunctionJavascriptUdf that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/stream_analytics_function_javascript_udf#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the StreamAnalyticsFunctionJavascriptUdf to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.input">input</a></code> | <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputList">StreamAnalyticsFunctionJavascriptUdfInputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.output">output</a></code> | <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference">StreamAnalyticsFunctionJavascriptUdfOutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference">StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.inputInput">inputInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInput">StreamAnalyticsFunctionJavascriptUdfInput</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.outputInput">outputInput</a></code> | <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutput">StreamAnalyticsFunctionJavascriptUdfOutput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.scriptInput">scriptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.streamAnalyticsJobNameInput">streamAnalyticsJobNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeouts">StreamAnalyticsFunctionJavascriptUdfTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.script">script</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.streamAnalyticsJobName">streamAnalyticsJobName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.input"></a>

```typescript
public readonly input: StreamAnalyticsFunctionJavascriptUdfInputList;
```

- *Type:* <a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputList">StreamAnalyticsFunctionJavascriptUdfInputList</a>

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.output"></a>

```typescript
public readonly output: StreamAnalyticsFunctionJavascriptUdfOutputOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference">StreamAnalyticsFunctionJavascriptUdfOutputOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.timeouts"></a>

```typescript
public readonly timeouts: StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference">StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `inputInput`<sup>Optional</sup> <a name="inputInput" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.inputInput"></a>

```typescript
public readonly inputInput: IResolvable | StreamAnalyticsFunctionJavascriptUdfInput[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInput">StreamAnalyticsFunctionJavascriptUdfInput</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `outputInput`<sup>Optional</sup> <a name="outputInput" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.outputInput"></a>

```typescript
public readonly outputInput: StreamAnalyticsFunctionJavascriptUdfOutput;
```

- *Type:* <a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutput">StreamAnalyticsFunctionJavascriptUdfOutput</a>

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `scriptInput`<sup>Optional</sup> <a name="scriptInput" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.scriptInput"></a>

```typescript
public readonly scriptInput: string;
```

- *Type:* string

---

##### `streamAnalyticsJobNameInput`<sup>Optional</sup> <a name="streamAnalyticsJobNameInput" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.streamAnalyticsJobNameInput"></a>

```typescript
public readonly streamAnalyticsJobNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | StreamAnalyticsFunctionJavascriptUdfTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeouts">StreamAnalyticsFunctionJavascriptUdfTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `script`<sup>Required</sup> <a name="script" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.script"></a>

```typescript
public readonly script: string;
```

- *Type:* string

---

##### `streamAnalyticsJobName`<sup>Required</sup> <a name="streamAnalyticsJobName" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.streamAnalyticsJobName"></a>

```typescript
public readonly streamAnalyticsJobName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdf.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StreamAnalyticsFunctionJavascriptUdfConfig <a name="StreamAnalyticsFunctionJavascriptUdfConfig" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfConfig.Initializer"></a>

```typescript
import { streamAnalyticsFunctionJavascriptUdf } from '@cdktn/provider-azurerm'

const streamAnalyticsFunctionJavascriptUdfConfig: streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfConfig.property.input">input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInput">StreamAnalyticsFunctionJavascriptUdfInput</a>[]</code> | input block. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/stream_analytics_function_javascript_udf#name StreamAnalyticsFunctionJavascriptUdf#name}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfConfig.property.output">output</a></code> | <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutput">StreamAnalyticsFunctionJavascriptUdfOutput</a></code> | output block. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/stream_analytics_function_javascript_udf#resource_group_name StreamAnalyticsFunctionJavascriptUdf#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfConfig.property.script">script</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/stream_analytics_function_javascript_udf#script StreamAnalyticsFunctionJavascriptUdf#script}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfConfig.property.streamAnalyticsJobName">streamAnalyticsJobName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/stream_analytics_function_javascript_udf#stream_analytics_job_name StreamAnalyticsFunctionJavascriptUdf#stream_analytics_job_name}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/stream_analytics_function_javascript_udf#id StreamAnalyticsFunctionJavascriptUdf#id}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeouts">StreamAnalyticsFunctionJavascriptUdfTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfConfig.property.input"></a>

```typescript
public readonly input: IResolvable | StreamAnalyticsFunctionJavascriptUdfInput[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInput">StreamAnalyticsFunctionJavascriptUdfInput</a>[]

input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/stream_analytics_function_javascript_udf#input StreamAnalyticsFunctionJavascriptUdf#input}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/stream_analytics_function_javascript_udf#name StreamAnalyticsFunctionJavascriptUdf#name}.

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfConfig.property.output"></a>

```typescript
public readonly output: StreamAnalyticsFunctionJavascriptUdfOutput;
```

- *Type:* <a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutput">StreamAnalyticsFunctionJavascriptUdfOutput</a>

output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/stream_analytics_function_javascript_udf#output StreamAnalyticsFunctionJavascriptUdf#output}

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/stream_analytics_function_javascript_udf#resource_group_name StreamAnalyticsFunctionJavascriptUdf#resource_group_name}.

---

##### `script`<sup>Required</sup> <a name="script" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfConfig.property.script"></a>

```typescript
public readonly script: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/stream_analytics_function_javascript_udf#script StreamAnalyticsFunctionJavascriptUdf#script}.

---

##### `streamAnalyticsJobName`<sup>Required</sup> <a name="streamAnalyticsJobName" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfConfig.property.streamAnalyticsJobName"></a>

```typescript
public readonly streamAnalyticsJobName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/stream_analytics_function_javascript_udf#stream_analytics_job_name StreamAnalyticsFunctionJavascriptUdf#stream_analytics_job_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/stream_analytics_function_javascript_udf#id StreamAnalyticsFunctionJavascriptUdf#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfConfig.property.timeouts"></a>

```typescript
public readonly timeouts: StreamAnalyticsFunctionJavascriptUdfTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeouts">StreamAnalyticsFunctionJavascriptUdfTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/stream_analytics_function_javascript_udf#timeouts StreamAnalyticsFunctionJavascriptUdf#timeouts}

---

### StreamAnalyticsFunctionJavascriptUdfInput <a name="StreamAnalyticsFunctionJavascriptUdfInput" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInput.Initializer"></a>

```typescript
import { streamAnalyticsFunctionJavascriptUdf } from '@cdktn/provider-azurerm'

const streamAnalyticsFunctionJavascriptUdfInput: streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInput = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInput.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/stream_analytics_function_javascript_udf#type StreamAnalyticsFunctionJavascriptUdf#type}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInput.property.configurationParameter">configurationParameter</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/stream_analytics_function_javascript_udf#configuration_parameter StreamAnalyticsFunctionJavascriptUdf#configuration_parameter}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInput.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/stream_analytics_function_javascript_udf#type StreamAnalyticsFunctionJavascriptUdf#type}.

---

##### `configurationParameter`<sup>Optional</sup> <a name="configurationParameter" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInput.property.configurationParameter"></a>

```typescript
public readonly configurationParameter: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/stream_analytics_function_javascript_udf#configuration_parameter StreamAnalyticsFunctionJavascriptUdf#configuration_parameter}.

---

### StreamAnalyticsFunctionJavascriptUdfOutput <a name="StreamAnalyticsFunctionJavascriptUdfOutput" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutput.Initializer"></a>

```typescript
import { streamAnalyticsFunctionJavascriptUdf } from '@cdktn/provider-azurerm'

const streamAnalyticsFunctionJavascriptUdfOutput: streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutput = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutput.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/stream_analytics_function_javascript_udf#type StreamAnalyticsFunctionJavascriptUdf#type}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutput.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/stream_analytics_function_javascript_udf#type StreamAnalyticsFunctionJavascriptUdf#type}.

---

### StreamAnalyticsFunctionJavascriptUdfTimeouts <a name="StreamAnalyticsFunctionJavascriptUdfTimeouts" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeouts.Initializer"></a>

```typescript
import { streamAnalyticsFunctionJavascriptUdf } from '@cdktn/provider-azurerm'

const streamAnalyticsFunctionJavascriptUdfTimeouts: streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/stream_analytics_function_javascript_udf#create StreamAnalyticsFunctionJavascriptUdf#create}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/stream_analytics_function_javascript_udf#delete StreamAnalyticsFunctionJavascriptUdf#delete}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/stream_analytics_function_javascript_udf#read StreamAnalyticsFunctionJavascriptUdf#read}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/stream_analytics_function_javascript_udf#update StreamAnalyticsFunctionJavascriptUdf#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/stream_analytics_function_javascript_udf#create StreamAnalyticsFunctionJavascriptUdf#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/stream_analytics_function_javascript_udf#delete StreamAnalyticsFunctionJavascriptUdf#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/stream_analytics_function_javascript_udf#read StreamAnalyticsFunctionJavascriptUdf#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/stream_analytics_function_javascript_udf#update StreamAnalyticsFunctionJavascriptUdf#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StreamAnalyticsFunctionJavascriptUdfInputList <a name="StreamAnalyticsFunctionJavascriptUdfInputList" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputList.Initializer"></a>

```typescript
import { streamAnalyticsFunctionJavascriptUdf } from '@cdktn/provider-azurerm'

new streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputList.get"></a>

```typescript
public get(index: number): StreamAnalyticsFunctionJavascriptUdfInputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInput">StreamAnalyticsFunctionJavascriptUdfInput</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StreamAnalyticsFunctionJavascriptUdfInput[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInput">StreamAnalyticsFunctionJavascriptUdfInput</a>[]

---


### StreamAnalyticsFunctionJavascriptUdfInputOutputReference <a name="StreamAnalyticsFunctionJavascriptUdfInputOutputReference" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.Initializer"></a>

```typescript
import { streamAnalyticsFunctionJavascriptUdf } from '@cdktn/provider-azurerm'

new streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.resetConfigurationParameter">resetConfigurationParameter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConfigurationParameter` <a name="resetConfigurationParameter" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.resetConfigurationParameter"></a>

```typescript
public resetConfigurationParameter(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.property.configurationParameterInput">configurationParameterInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.property.configurationParameter">configurationParameter</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInput">StreamAnalyticsFunctionJavascriptUdfInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `configurationParameterInput`<sup>Optional</sup> <a name="configurationParameterInput" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.property.configurationParameterInput"></a>

```typescript
public readonly configurationParameterInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `configurationParameter`<sup>Required</sup> <a name="configurationParameter" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.property.configurationParameter"></a>

```typescript
public readonly configurationParameter: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StreamAnalyticsFunctionJavascriptUdfInput;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfInput">StreamAnalyticsFunctionJavascriptUdfInput</a>

---


### StreamAnalyticsFunctionJavascriptUdfOutputOutputReference <a name="StreamAnalyticsFunctionJavascriptUdfOutputOutputReference" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.Initializer"></a>

```typescript
import { streamAnalyticsFunctionJavascriptUdf } from '@cdktn/provider-azurerm'

new streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutput">StreamAnalyticsFunctionJavascriptUdfOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StreamAnalyticsFunctionJavascriptUdfOutput;
```

- *Type:* <a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfOutput">StreamAnalyticsFunctionJavascriptUdfOutput</a>

---


### StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference <a name="StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.Initializer"></a>

```typescript
import { streamAnalyticsFunctionJavascriptUdf } from '@cdktn/provider-azurerm'

new streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeouts">StreamAnalyticsFunctionJavascriptUdfTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StreamAnalyticsFunctionJavascriptUdfTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.streamAnalyticsFunctionJavascriptUdf.StreamAnalyticsFunctionJavascriptUdfTimeouts">StreamAnalyticsFunctionJavascriptUdfTimeouts</a>

---



