# `publicIpPrefix` Submodule <a name="`publicIpPrefix` Submodule" id="@cdktn/provider-azurerm.publicIpPrefix"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PublicIpPrefix <a name="PublicIpPrefix" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/public_ip_prefix azurerm_public_ip_prefix}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.Initializer"></a>

```typescript
import { publicIpPrefix } from '@cdktn/provider-azurerm'

new publicIpPrefix.PublicIpPrefix(scope: Construct, id: string, config: PublicIpPrefixConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig">PublicIpPrefixConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig">PublicIpPrefixConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.resetCustomIpPrefixId">resetCustomIpPrefixId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.resetIpVersion">resetIpVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.resetPrefixLength">resetPrefixLength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.resetSku">resetSku</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.resetSkuTier">resetSkuTier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.resetZones">resetZones</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.putTimeouts"></a>

```typescript
public putTimeouts(value: PublicIpPrefixTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeouts">PublicIpPrefixTimeouts</a>

---

##### `resetCustomIpPrefixId` <a name="resetCustomIpPrefixId" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.resetCustomIpPrefixId"></a>

```typescript
public resetCustomIpPrefixId(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIpVersion` <a name="resetIpVersion" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.resetIpVersion"></a>

```typescript
public resetIpVersion(): void
```

##### `resetPrefixLength` <a name="resetPrefixLength" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.resetPrefixLength"></a>

```typescript
public resetPrefixLength(): void
```

##### `resetSku` <a name="resetSku" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.resetSku"></a>

```typescript
public resetSku(): void
```

##### `resetSkuTier` <a name="resetSkuTier" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.resetSkuTier"></a>

```typescript
public resetSkuTier(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetZones` <a name="resetZones" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.resetZones"></a>

```typescript
public resetZones(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a PublicIpPrefix resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.isConstruct"></a>

```typescript
import { publicIpPrefix } from '@cdktn/provider-azurerm'

publicIpPrefix.PublicIpPrefix.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.isTerraformElement"></a>

```typescript
import { publicIpPrefix } from '@cdktn/provider-azurerm'

publicIpPrefix.PublicIpPrefix.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.isTerraformResource"></a>

```typescript
import { publicIpPrefix } from '@cdktn/provider-azurerm'

publicIpPrefix.PublicIpPrefix.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.generateConfigForImport"></a>

```typescript
import { publicIpPrefix } from '@cdktn/provider-azurerm'

publicIpPrefix.PublicIpPrefix.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a PublicIpPrefix resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PublicIpPrefix to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PublicIpPrefix that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/public_ip_prefix#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the PublicIpPrefix to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.ipPrefix">ipPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference">PublicIpPrefixTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.customIpPrefixIdInput">customIpPrefixIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.ipVersionInput">ipVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.prefixLengthInput">prefixLengthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.skuInput">skuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.skuTierInput">skuTierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeouts">PublicIpPrefixTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.zonesInput">zonesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.customIpPrefixId">customIpPrefixId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.ipVersion">ipVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.prefixLength">prefixLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.sku">sku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.skuTier">skuTier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.zones">zones</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `ipPrefix`<sup>Required</sup> <a name="ipPrefix" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.ipPrefix"></a>

```typescript
public readonly ipPrefix: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.timeouts"></a>

```typescript
public readonly timeouts: PublicIpPrefixTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference">PublicIpPrefixTimeoutsOutputReference</a>

---

##### `customIpPrefixIdInput`<sup>Optional</sup> <a name="customIpPrefixIdInput" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.customIpPrefixIdInput"></a>

```typescript
public readonly customIpPrefixIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ipVersionInput`<sup>Optional</sup> <a name="ipVersionInput" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.ipVersionInput"></a>

```typescript
public readonly ipVersionInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `prefixLengthInput`<sup>Optional</sup> <a name="prefixLengthInput" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.prefixLengthInput"></a>

```typescript
public readonly prefixLengthInput: number;
```

- *Type:* number

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `skuInput`<sup>Optional</sup> <a name="skuInput" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.skuInput"></a>

```typescript
public readonly skuInput: string;
```

- *Type:* string

---

##### `skuTierInput`<sup>Optional</sup> <a name="skuTierInput" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.skuTierInput"></a>

```typescript
public readonly skuTierInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | PublicIpPrefixTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeouts">PublicIpPrefixTimeouts</a>

---

##### `zonesInput`<sup>Optional</sup> <a name="zonesInput" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.zonesInput"></a>

```typescript
public readonly zonesInput: string[];
```

- *Type:* string[]

---

##### `customIpPrefixId`<sup>Required</sup> <a name="customIpPrefixId" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.customIpPrefixId"></a>

```typescript
public readonly customIpPrefixId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipVersion`<sup>Required</sup> <a name="ipVersion" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.ipVersion"></a>

```typescript
public readonly ipVersion: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `prefixLength`<sup>Required</sup> <a name="prefixLength" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.prefixLength"></a>

```typescript
public readonly prefixLength: number;
```

- *Type:* number

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.sku"></a>

```typescript
public readonly sku: string;
```

- *Type:* string

---

##### `skuTier`<sup>Required</sup> <a name="skuTier" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.skuTier"></a>

```typescript
public readonly skuTier: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `zones`<sup>Required</sup> <a name="zones" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.zones"></a>

```typescript
public readonly zones: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PublicIpPrefixConfig <a name="PublicIpPrefixConfig" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.Initializer"></a>

```typescript
import { publicIpPrefix } from '@cdktn/provider-azurerm'

const publicIpPrefixConfig: publicIpPrefix.PublicIpPrefixConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/public_ip_prefix#location PublicIpPrefix#location}. |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/public_ip_prefix#name PublicIpPrefix#name}. |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/public_ip_prefix#resource_group_name PublicIpPrefix#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.customIpPrefixId">customIpPrefixId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/public_ip_prefix#custom_ip_prefix_id PublicIpPrefix#custom_ip_prefix_id}. |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/public_ip_prefix#id PublicIpPrefix#id}. |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.ipVersion">ipVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/public_ip_prefix#ip_version PublicIpPrefix#ip_version}. |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.prefixLength">prefixLength</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/public_ip_prefix#prefix_length PublicIpPrefix#prefix_length}. |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.sku">sku</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/public_ip_prefix#sku PublicIpPrefix#sku}. |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.skuTier">skuTier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/public_ip_prefix#sku_tier PublicIpPrefix#sku_tier}. |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/public_ip_prefix#tags PublicIpPrefix#tags}. |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeouts">PublicIpPrefixTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.zones">zones</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/public_ip_prefix#zones PublicIpPrefix#zones}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/public_ip_prefix#location PublicIpPrefix#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/public_ip_prefix#name PublicIpPrefix#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/public_ip_prefix#resource_group_name PublicIpPrefix#resource_group_name}.

---

##### `customIpPrefixId`<sup>Optional</sup> <a name="customIpPrefixId" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.customIpPrefixId"></a>

```typescript
public readonly customIpPrefixId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/public_ip_prefix#custom_ip_prefix_id PublicIpPrefix#custom_ip_prefix_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/public_ip_prefix#id PublicIpPrefix#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipVersion`<sup>Optional</sup> <a name="ipVersion" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.ipVersion"></a>

```typescript
public readonly ipVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/public_ip_prefix#ip_version PublicIpPrefix#ip_version}.

---

##### `prefixLength`<sup>Optional</sup> <a name="prefixLength" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.prefixLength"></a>

```typescript
public readonly prefixLength: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/public_ip_prefix#prefix_length PublicIpPrefix#prefix_length}.

---

##### `sku`<sup>Optional</sup> <a name="sku" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.sku"></a>

```typescript
public readonly sku: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/public_ip_prefix#sku PublicIpPrefix#sku}.

---

##### `skuTier`<sup>Optional</sup> <a name="skuTier" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.skuTier"></a>

```typescript
public readonly skuTier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/public_ip_prefix#sku_tier PublicIpPrefix#sku_tier}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/public_ip_prefix#tags PublicIpPrefix#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.timeouts"></a>

```typescript
public readonly timeouts: PublicIpPrefixTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeouts">PublicIpPrefixTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/public_ip_prefix#timeouts PublicIpPrefix#timeouts}

---

##### `zones`<sup>Optional</sup> <a name="zones" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.zones"></a>

```typescript
public readonly zones: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/public_ip_prefix#zones PublicIpPrefix#zones}.

---

### PublicIpPrefixTimeouts <a name="PublicIpPrefixTimeouts" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeouts.Initializer"></a>

```typescript
import { publicIpPrefix } from '@cdktn/provider-azurerm'

const publicIpPrefixTimeouts: publicIpPrefix.PublicIpPrefixTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/public_ip_prefix#create PublicIpPrefix#create}. |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/public_ip_prefix#delete PublicIpPrefix#delete}. |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/public_ip_prefix#read PublicIpPrefix#read}. |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/public_ip_prefix#update PublicIpPrefix#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/public_ip_prefix#create PublicIpPrefix#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/public_ip_prefix#delete PublicIpPrefix#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/public_ip_prefix#read PublicIpPrefix#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/public_ip_prefix#update PublicIpPrefix#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PublicIpPrefixTimeoutsOutputReference <a name="PublicIpPrefixTimeoutsOutputReference" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.Initializer"></a>

```typescript
import { publicIpPrefix } from '@cdktn/provider-azurerm'

new publicIpPrefix.PublicIpPrefixTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeouts">PublicIpPrefixTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PublicIpPrefixTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeouts">PublicIpPrefixTimeouts</a>

---



