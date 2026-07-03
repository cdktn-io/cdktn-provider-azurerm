# `networkFunctionAzureTrafficCollector` Submodule <a name="`networkFunctionAzureTrafficCollector` Submodule" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkFunctionAzureTrafficCollector <a name="NetworkFunctionAzureTrafficCollector" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/network_function_azure_traffic_collector azurerm_network_function_azure_traffic_collector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.Initializer"></a>

```typescript
import { networkFunctionAzureTrafficCollector } from '@cdktn/provider-azurerm'

new networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector(scope: Construct, id: string, config: NetworkFunctionAzureTrafficCollectorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorConfig">NetworkFunctionAzureTrafficCollectorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorConfig">NetworkFunctionAzureTrafficCollectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.putTimeouts"></a>

```typescript
public putTimeouts(value: NetworkFunctionAzureTrafficCollectorTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeouts">NetworkFunctionAzureTrafficCollectorTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkFunctionAzureTrafficCollector resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.isConstruct"></a>

```typescript
import { networkFunctionAzureTrafficCollector } from '@cdktn/provider-azurerm'

networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.isTerraformElement"></a>

```typescript
import { networkFunctionAzureTrafficCollector } from '@cdktn/provider-azurerm'

networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.isTerraformResource"></a>

```typescript
import { networkFunctionAzureTrafficCollector } from '@cdktn/provider-azurerm'

networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.generateConfigForImport"></a>

```typescript
import { networkFunctionAzureTrafficCollector } from '@cdktn/provider-azurerm'

networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a NetworkFunctionAzureTrafficCollector resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkFunctionAzureTrafficCollector to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkFunctionAzureTrafficCollector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/network_function_azure_traffic_collector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the NetworkFunctionAzureTrafficCollector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.collectorPolicyIds">collectorPolicyIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference">NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.virtualHubId">virtualHubId</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeouts">NetworkFunctionAzureTrafficCollectorTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `collectorPolicyIds`<sup>Required</sup> <a name="collectorPolicyIds" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.collectorPolicyIds"></a>

```typescript
public readonly collectorPolicyIds: string[];
```

- *Type:* string[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference">NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference</a>

---

##### `virtualHubId`<sup>Required</sup> <a name="virtualHubId" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.virtualHubId"></a>

```typescript
public readonly virtualHubId: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | NetworkFunctionAzureTrafficCollectorTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeouts">NetworkFunctionAzureTrafficCollectorTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkFunctionAzureTrafficCollectorConfig <a name="NetworkFunctionAzureTrafficCollectorConfig" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorConfig.Initializer"></a>

```typescript
import { networkFunctionAzureTrafficCollector } from '@cdktn/provider-azurerm'

const networkFunctionAzureTrafficCollectorConfig: networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/network_function_azure_traffic_collector#location NetworkFunctionAzureTrafficCollector#location}. |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/network_function_azure_traffic_collector#name NetworkFunctionAzureTrafficCollector#name}. |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/network_function_azure_traffic_collector#resource_group_name NetworkFunctionAzureTrafficCollector#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/network_function_azure_traffic_collector#id NetworkFunctionAzureTrafficCollector#id}. |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/network_function_azure_traffic_collector#tags NetworkFunctionAzureTrafficCollector#tags}. |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeouts">NetworkFunctionAzureTrafficCollectorTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/network_function_azure_traffic_collector#location NetworkFunctionAzureTrafficCollector#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/network_function_azure_traffic_collector#name NetworkFunctionAzureTrafficCollector#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/network_function_azure_traffic_collector#resource_group_name NetworkFunctionAzureTrafficCollector#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/network_function_azure_traffic_collector#id NetworkFunctionAzureTrafficCollector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/network_function_azure_traffic_collector#tags NetworkFunctionAzureTrafficCollector#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorConfig.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkFunctionAzureTrafficCollectorTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeouts">NetworkFunctionAzureTrafficCollectorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/network_function_azure_traffic_collector#timeouts NetworkFunctionAzureTrafficCollector#timeouts}

---

### NetworkFunctionAzureTrafficCollectorTimeouts <a name="NetworkFunctionAzureTrafficCollectorTimeouts" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeouts.Initializer"></a>

```typescript
import { networkFunctionAzureTrafficCollector } from '@cdktn/provider-azurerm'

const networkFunctionAzureTrafficCollectorTimeouts: networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/network_function_azure_traffic_collector#create NetworkFunctionAzureTrafficCollector#create}. |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/network_function_azure_traffic_collector#delete NetworkFunctionAzureTrafficCollector#delete}. |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/network_function_azure_traffic_collector#read NetworkFunctionAzureTrafficCollector#read}. |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/network_function_azure_traffic_collector#update NetworkFunctionAzureTrafficCollector#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/network_function_azure_traffic_collector#create NetworkFunctionAzureTrafficCollector#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/network_function_azure_traffic_collector#delete NetworkFunctionAzureTrafficCollector#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/network_function_azure_traffic_collector#read NetworkFunctionAzureTrafficCollector#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/network_function_azure_traffic_collector#update NetworkFunctionAzureTrafficCollector#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference <a name="NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.Initializer"></a>

```typescript
import { networkFunctionAzureTrafficCollector } from '@cdktn/provider-azurerm'

new networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeouts">NetworkFunctionAzureTrafficCollectorTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkFunctionAzureTrafficCollectorTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeouts">NetworkFunctionAzureTrafficCollectorTimeouts</a>

---



