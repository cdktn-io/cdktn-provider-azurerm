# `vpnGateway` Submodule <a name="`vpnGateway` Submodule" id="@cdktn/provider-azurerm.vpnGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpnGateway <a name="VpnGateway" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/vpn_gateway azurerm_vpn_gateway}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.Initializer"></a>

```typescript
import { vpnGateway } from '@cdktn/provider-azurerm'

new vpnGateway.VpnGateway(scope: Construct, id: string, config: VpnGatewayConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGateway.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGateway.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGateway.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayConfig">VpnGatewayConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayConfig">VpnGatewayConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGateway.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGateway.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGateway.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGateway.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGateway.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGateway.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGateway.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGateway.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGateway.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGateway.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGateway.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGateway.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGateway.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGateway.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGateway.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGateway.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGateway.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGateway.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGateway.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGateway.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGateway.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGateway.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGateway.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGateway.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGateway.putBgpSettings">putBgpSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGateway.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGateway.resetBgpRouteTranslationForNatEnabled">resetBgpRouteTranslationForNatEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGateway.resetBgpSettings">resetBgpSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGateway.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGateway.resetRoutingPreference">resetRoutingPreference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGateway.resetScaleUnit">resetScaleUnit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGateway.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGateway.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBgpSettings` <a name="putBgpSettings" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.putBgpSettings"></a>

```typescript
public putBgpSettings(value: VpnGatewayBgpSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.putBgpSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettings">VpnGatewayBgpSettings</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.putTimeouts"></a>

```typescript
public putTimeouts(value: VpnGatewayTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayTimeouts">VpnGatewayTimeouts</a>

---

##### `resetBgpRouteTranslationForNatEnabled` <a name="resetBgpRouteTranslationForNatEnabled" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.resetBgpRouteTranslationForNatEnabled"></a>

```typescript
public resetBgpRouteTranslationForNatEnabled(): void
```

##### `resetBgpSettings` <a name="resetBgpSettings" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.resetBgpSettings"></a>

```typescript
public resetBgpSettings(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRoutingPreference` <a name="resetRoutingPreference" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.resetRoutingPreference"></a>

```typescript
public resetRoutingPreference(): void
```

##### `resetScaleUnit` <a name="resetScaleUnit" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.resetScaleUnit"></a>

```typescript
public resetScaleUnit(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGateway.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGateway.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGateway.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGateway.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a VpnGateway resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.isConstruct"></a>

```typescript
import { vpnGateway } from '@cdktn/provider-azurerm'

vpnGateway.VpnGateway.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.isTerraformElement"></a>

```typescript
import { vpnGateway } from '@cdktn/provider-azurerm'

vpnGateway.VpnGateway.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.isTerraformResource"></a>

```typescript
import { vpnGateway } from '@cdktn/provider-azurerm'

vpnGateway.VpnGateway.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.generateConfigForImport"></a>

```typescript
import { vpnGateway } from '@cdktn/provider-azurerm'

vpnGateway.VpnGateway.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a VpnGateway resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VpnGateway to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VpnGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/vpn_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the VpnGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGateway.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGateway.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGateway.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGateway.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGateway.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGateway.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGateway.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGateway.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGateway.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGateway.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGateway.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGateway.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGateway.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGateway.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGateway.property.bgpSettings">bgpSettings</a></code> | <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference">VpnGatewayBgpSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGateway.property.ipConfiguration">ipConfiguration</a></code> | <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayIpConfigurationList">VpnGatewayIpConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGateway.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference">VpnGatewayTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGateway.property.bgpRouteTranslationForNatEnabledInput">bgpRouteTranslationForNatEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGateway.property.bgpSettingsInput">bgpSettingsInput</a></code> | <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettings">VpnGatewayBgpSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGateway.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGateway.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGateway.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGateway.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGateway.property.routingPreferenceInput">routingPreferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGateway.property.scaleUnitInput">scaleUnitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGateway.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGateway.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayTimeouts">VpnGatewayTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGateway.property.virtualHubIdInput">virtualHubIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGateway.property.bgpRouteTranslationForNatEnabled">bgpRouteTranslationForNatEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGateway.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGateway.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGateway.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGateway.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGateway.property.routingPreference">routingPreference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGateway.property.scaleUnit">scaleUnit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGateway.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGateway.property.virtualHubId">virtualHubId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `bgpSettings`<sup>Required</sup> <a name="bgpSettings" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.property.bgpSettings"></a>

```typescript
public readonly bgpSettings: VpnGatewayBgpSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference">VpnGatewayBgpSettingsOutputReference</a>

---

##### `ipConfiguration`<sup>Required</sup> <a name="ipConfiguration" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.property.ipConfiguration"></a>

```typescript
public readonly ipConfiguration: VpnGatewayIpConfigurationList;
```

- *Type:* <a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayIpConfigurationList">VpnGatewayIpConfigurationList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.property.timeouts"></a>

```typescript
public readonly timeouts: VpnGatewayTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference">VpnGatewayTimeoutsOutputReference</a>

---

##### `bgpRouteTranslationForNatEnabledInput`<sup>Optional</sup> <a name="bgpRouteTranslationForNatEnabledInput" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.property.bgpRouteTranslationForNatEnabledInput"></a>

```typescript
public readonly bgpRouteTranslationForNatEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `bgpSettingsInput`<sup>Optional</sup> <a name="bgpSettingsInput" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.property.bgpSettingsInput"></a>

```typescript
public readonly bgpSettingsInput: VpnGatewayBgpSettings;
```

- *Type:* <a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettings">VpnGatewayBgpSettings</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `routingPreferenceInput`<sup>Optional</sup> <a name="routingPreferenceInput" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.property.routingPreferenceInput"></a>

```typescript
public readonly routingPreferenceInput: string;
```

- *Type:* string

---

##### `scaleUnitInput`<sup>Optional</sup> <a name="scaleUnitInput" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.property.scaleUnitInput"></a>

```typescript
public readonly scaleUnitInput: number;
```

- *Type:* number

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | VpnGatewayTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayTimeouts">VpnGatewayTimeouts</a>

---

##### `virtualHubIdInput`<sup>Optional</sup> <a name="virtualHubIdInput" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.property.virtualHubIdInput"></a>

```typescript
public readonly virtualHubIdInput: string;
```

- *Type:* string

---

##### `bgpRouteTranslationForNatEnabled`<sup>Required</sup> <a name="bgpRouteTranslationForNatEnabled" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.property.bgpRouteTranslationForNatEnabled"></a>

```typescript
public readonly bgpRouteTranslationForNatEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `routingPreference`<sup>Required</sup> <a name="routingPreference" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.property.routingPreference"></a>

```typescript
public readonly routingPreference: string;
```

- *Type:* string

---

##### `scaleUnit`<sup>Required</sup> <a name="scaleUnit" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.property.scaleUnit"></a>

```typescript
public readonly scaleUnit: number;
```

- *Type:* number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `virtualHubId`<sup>Required</sup> <a name="virtualHubId" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.property.virtualHubId"></a>

```typescript
public readonly virtualHubId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGateway.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.vpnGateway.VpnGateway.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VpnGatewayBgpSettings <a name="VpnGatewayBgpSettings" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettings.Initializer"></a>

```typescript
import { vpnGateway } from '@cdktn/provider-azurerm'

const vpnGatewayBgpSettings: vpnGateway.VpnGatewayBgpSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettings.property.asn">asn</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/vpn_gateway#asn VpnGateway#asn}. |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettings.property.peerWeight">peerWeight</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/vpn_gateway#peer_weight VpnGateway#peer_weight}. |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettings.property.instance0BgpPeeringAddress">instance0BgpPeeringAddress</a></code> | <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddress">VpnGatewayBgpSettingsInstance0BgpPeeringAddress</a></code> | instance_0_bgp_peering_address block. |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettings.property.instance1BgpPeeringAddress">instance1BgpPeeringAddress</a></code> | <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddress">VpnGatewayBgpSettingsInstance1BgpPeeringAddress</a></code> | instance_1_bgp_peering_address block. |

---

##### `asn`<sup>Required</sup> <a name="asn" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettings.property.asn"></a>

```typescript
public readonly asn: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/vpn_gateway#asn VpnGateway#asn}.

---

##### `peerWeight`<sup>Required</sup> <a name="peerWeight" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettings.property.peerWeight"></a>

```typescript
public readonly peerWeight: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/vpn_gateway#peer_weight VpnGateway#peer_weight}.

---

##### `instance0BgpPeeringAddress`<sup>Optional</sup> <a name="instance0BgpPeeringAddress" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettings.property.instance0BgpPeeringAddress"></a>

```typescript
public readonly instance0BgpPeeringAddress: VpnGatewayBgpSettingsInstance0BgpPeeringAddress;
```

- *Type:* <a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddress">VpnGatewayBgpSettingsInstance0BgpPeeringAddress</a>

instance_0_bgp_peering_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/vpn_gateway#instance_0_bgp_peering_address VpnGateway#instance_0_bgp_peering_address}

---

##### `instance1BgpPeeringAddress`<sup>Optional</sup> <a name="instance1BgpPeeringAddress" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettings.property.instance1BgpPeeringAddress"></a>

```typescript
public readonly instance1BgpPeeringAddress: VpnGatewayBgpSettingsInstance1BgpPeeringAddress;
```

- *Type:* <a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddress">VpnGatewayBgpSettingsInstance1BgpPeeringAddress</a>

instance_1_bgp_peering_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/vpn_gateway#instance_1_bgp_peering_address VpnGateway#instance_1_bgp_peering_address}

---

### VpnGatewayBgpSettingsInstance0BgpPeeringAddress <a name="VpnGatewayBgpSettingsInstance0BgpPeeringAddress" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddress.Initializer"></a>

```typescript
import { vpnGateway } from '@cdktn/provider-azurerm'

const vpnGatewayBgpSettingsInstance0BgpPeeringAddress: vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddress = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddress.property.customIps">customIps</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/vpn_gateway#custom_ips VpnGateway#custom_ips}. |

---

##### `customIps`<sup>Required</sup> <a name="customIps" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddress.property.customIps"></a>

```typescript
public readonly customIps: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/vpn_gateway#custom_ips VpnGateway#custom_ips}.

---

### VpnGatewayBgpSettingsInstance1BgpPeeringAddress <a name="VpnGatewayBgpSettingsInstance1BgpPeeringAddress" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddress.Initializer"></a>

```typescript
import { vpnGateway } from '@cdktn/provider-azurerm'

const vpnGatewayBgpSettingsInstance1BgpPeeringAddress: vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddress = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddress.property.customIps">customIps</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/vpn_gateway#custom_ips VpnGateway#custom_ips}. |

---

##### `customIps`<sup>Required</sup> <a name="customIps" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddress.property.customIps"></a>

```typescript
public readonly customIps: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/vpn_gateway#custom_ips VpnGateway#custom_ips}.

---

### VpnGatewayConfig <a name="VpnGatewayConfig" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayConfig.Initializer"></a>

```typescript
import { vpnGateway } from '@cdktn/provider-azurerm'

const vpnGatewayConfig: vpnGateway.VpnGatewayConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/vpn_gateway#location VpnGateway#location}. |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/vpn_gateway#name VpnGateway#name}. |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/vpn_gateway#resource_group_name VpnGateway#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayConfig.property.virtualHubId">virtualHubId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/vpn_gateway#virtual_hub_id VpnGateway#virtual_hub_id}. |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayConfig.property.bgpRouteTranslationForNatEnabled">bgpRouteTranslationForNatEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/vpn_gateway#bgp_route_translation_for_nat_enabled VpnGateway#bgp_route_translation_for_nat_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayConfig.property.bgpSettings">bgpSettings</a></code> | <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettings">VpnGatewayBgpSettings</a></code> | bgp_settings block. |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/vpn_gateway#id VpnGateway#id}. |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayConfig.property.routingPreference">routingPreference</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/vpn_gateway#routing_preference VpnGateway#routing_preference}. |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayConfig.property.scaleUnit">scaleUnit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/vpn_gateway#scale_unit VpnGateway#scale_unit}. |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/vpn_gateway#tags VpnGateway#tags}. |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayTimeouts">VpnGatewayTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/vpn_gateway#location VpnGateway#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/vpn_gateway#name VpnGateway#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/vpn_gateway#resource_group_name VpnGateway#resource_group_name}.

---

##### `virtualHubId`<sup>Required</sup> <a name="virtualHubId" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayConfig.property.virtualHubId"></a>

```typescript
public readonly virtualHubId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/vpn_gateway#virtual_hub_id VpnGateway#virtual_hub_id}.

---

##### `bgpRouteTranslationForNatEnabled`<sup>Optional</sup> <a name="bgpRouteTranslationForNatEnabled" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayConfig.property.bgpRouteTranslationForNatEnabled"></a>

```typescript
public readonly bgpRouteTranslationForNatEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/vpn_gateway#bgp_route_translation_for_nat_enabled VpnGateway#bgp_route_translation_for_nat_enabled}.

---

##### `bgpSettings`<sup>Optional</sup> <a name="bgpSettings" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayConfig.property.bgpSettings"></a>

```typescript
public readonly bgpSettings: VpnGatewayBgpSettings;
```

- *Type:* <a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettings">VpnGatewayBgpSettings</a>

bgp_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/vpn_gateway#bgp_settings VpnGateway#bgp_settings}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/vpn_gateway#id VpnGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `routingPreference`<sup>Optional</sup> <a name="routingPreference" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayConfig.property.routingPreference"></a>

```typescript
public readonly routingPreference: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/vpn_gateway#routing_preference VpnGateway#routing_preference}.

---

##### `scaleUnit`<sup>Optional</sup> <a name="scaleUnit" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayConfig.property.scaleUnit"></a>

```typescript
public readonly scaleUnit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/vpn_gateway#scale_unit VpnGateway#scale_unit}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/vpn_gateway#tags VpnGateway#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayConfig.property.timeouts"></a>

```typescript
public readonly timeouts: VpnGatewayTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayTimeouts">VpnGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/vpn_gateway#timeouts VpnGateway#timeouts}

---

### VpnGatewayIpConfiguration <a name="VpnGatewayIpConfiguration" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayIpConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayIpConfiguration.Initializer"></a>

```typescript
import { vpnGateway } from '@cdktn/provider-azurerm'

const vpnGatewayIpConfiguration: vpnGateway.VpnGatewayIpConfiguration = { ... }
```


### VpnGatewayTimeouts <a name="VpnGatewayTimeouts" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayTimeouts.Initializer"></a>

```typescript
import { vpnGateway } from '@cdktn/provider-azurerm'

const vpnGatewayTimeouts: vpnGateway.VpnGatewayTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/vpn_gateway#create VpnGateway#create}. |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/vpn_gateway#delete VpnGateway#delete}. |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/vpn_gateway#read VpnGateway#read}. |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/vpn_gateway#update VpnGateway#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/vpn_gateway#create VpnGateway#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/vpn_gateway#delete VpnGateway#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/vpn_gateway#read VpnGateway#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/vpn_gateway#update VpnGateway#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference <a name="VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.Initializer"></a>

```typescript
import { vpnGateway } from '@cdktn/provider-azurerm'

new vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.property.defaultIps">defaultIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.property.ipConfigurationId">ipConfigurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.property.tunnelIps">tunnelIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.property.customIpsInput">customIpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.property.customIps">customIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddress">VpnGatewayBgpSettingsInstance0BgpPeeringAddress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultIps`<sup>Required</sup> <a name="defaultIps" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.property.defaultIps"></a>

```typescript
public readonly defaultIps: string[];
```

- *Type:* string[]

---

##### `ipConfigurationId`<sup>Required</sup> <a name="ipConfigurationId" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.property.ipConfigurationId"></a>

```typescript
public readonly ipConfigurationId: string;
```

- *Type:* string

---

##### `tunnelIps`<sup>Required</sup> <a name="tunnelIps" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.property.tunnelIps"></a>

```typescript
public readonly tunnelIps: string[];
```

- *Type:* string[]

---

##### `customIpsInput`<sup>Optional</sup> <a name="customIpsInput" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.property.customIpsInput"></a>

```typescript
public readonly customIpsInput: string[];
```

- *Type:* string[]

---

##### `customIps`<sup>Required</sup> <a name="customIps" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.property.customIps"></a>

```typescript
public readonly customIps: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VpnGatewayBgpSettingsInstance0BgpPeeringAddress;
```

- *Type:* <a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddress">VpnGatewayBgpSettingsInstance0BgpPeeringAddress</a>

---


### VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference <a name="VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.Initializer"></a>

```typescript
import { vpnGateway } from '@cdktn/provider-azurerm'

new vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.property.defaultIps">defaultIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.property.ipConfigurationId">ipConfigurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.property.tunnelIps">tunnelIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.property.customIpsInput">customIpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.property.customIps">customIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddress">VpnGatewayBgpSettingsInstance1BgpPeeringAddress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultIps`<sup>Required</sup> <a name="defaultIps" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.property.defaultIps"></a>

```typescript
public readonly defaultIps: string[];
```

- *Type:* string[]

---

##### `ipConfigurationId`<sup>Required</sup> <a name="ipConfigurationId" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.property.ipConfigurationId"></a>

```typescript
public readonly ipConfigurationId: string;
```

- *Type:* string

---

##### `tunnelIps`<sup>Required</sup> <a name="tunnelIps" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.property.tunnelIps"></a>

```typescript
public readonly tunnelIps: string[];
```

- *Type:* string[]

---

##### `customIpsInput`<sup>Optional</sup> <a name="customIpsInput" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.property.customIpsInput"></a>

```typescript
public readonly customIpsInput: string[];
```

- *Type:* string[]

---

##### `customIps`<sup>Required</sup> <a name="customIps" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.property.customIps"></a>

```typescript
public readonly customIps: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VpnGatewayBgpSettingsInstance1BgpPeeringAddress;
```

- *Type:* <a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddress">VpnGatewayBgpSettingsInstance1BgpPeeringAddress</a>

---


### VpnGatewayBgpSettingsOutputReference <a name="VpnGatewayBgpSettingsOutputReference" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.Initializer"></a>

```typescript
import { vpnGateway } from '@cdktn/provider-azurerm'

new vpnGateway.VpnGatewayBgpSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.putInstance0BgpPeeringAddress">putInstance0BgpPeeringAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.putInstance1BgpPeeringAddress">putInstance1BgpPeeringAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.resetInstance0BgpPeeringAddress">resetInstance0BgpPeeringAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.resetInstance1BgpPeeringAddress">resetInstance1BgpPeeringAddress</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInstance0BgpPeeringAddress` <a name="putInstance0BgpPeeringAddress" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.putInstance0BgpPeeringAddress"></a>

```typescript
public putInstance0BgpPeeringAddress(value: VpnGatewayBgpSettingsInstance0BgpPeeringAddress): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.putInstance0BgpPeeringAddress.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddress">VpnGatewayBgpSettingsInstance0BgpPeeringAddress</a>

---

##### `putInstance1BgpPeeringAddress` <a name="putInstance1BgpPeeringAddress" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.putInstance1BgpPeeringAddress"></a>

```typescript
public putInstance1BgpPeeringAddress(value: VpnGatewayBgpSettingsInstance1BgpPeeringAddress): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.putInstance1BgpPeeringAddress.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddress">VpnGatewayBgpSettingsInstance1BgpPeeringAddress</a>

---

##### `resetInstance0BgpPeeringAddress` <a name="resetInstance0BgpPeeringAddress" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.resetInstance0BgpPeeringAddress"></a>

```typescript
public resetInstance0BgpPeeringAddress(): void
```

##### `resetInstance1BgpPeeringAddress` <a name="resetInstance1BgpPeeringAddress" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.resetInstance1BgpPeeringAddress"></a>

```typescript
public resetInstance1BgpPeeringAddress(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.property.bgpPeeringAddress">bgpPeeringAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.property.instance0BgpPeeringAddress">instance0BgpPeeringAddress</a></code> | <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference">VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.property.instance1BgpPeeringAddress">instance1BgpPeeringAddress</a></code> | <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference">VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.property.asnInput">asnInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.property.instance0BgpPeeringAddressInput">instance0BgpPeeringAddressInput</a></code> | <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddress">VpnGatewayBgpSettingsInstance0BgpPeeringAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.property.instance1BgpPeeringAddressInput">instance1BgpPeeringAddressInput</a></code> | <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddress">VpnGatewayBgpSettingsInstance1BgpPeeringAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.property.peerWeightInput">peerWeightInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.property.asn">asn</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.property.peerWeight">peerWeight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettings">VpnGatewayBgpSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bgpPeeringAddress`<sup>Required</sup> <a name="bgpPeeringAddress" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.property.bgpPeeringAddress"></a>

```typescript
public readonly bgpPeeringAddress: string;
```

- *Type:* string

---

##### `instance0BgpPeeringAddress`<sup>Required</sup> <a name="instance0BgpPeeringAddress" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.property.instance0BgpPeeringAddress"></a>

```typescript
public readonly instance0BgpPeeringAddress: VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference">VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference</a>

---

##### `instance1BgpPeeringAddress`<sup>Required</sup> <a name="instance1BgpPeeringAddress" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.property.instance1BgpPeeringAddress"></a>

```typescript
public readonly instance1BgpPeeringAddress: VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference">VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference</a>

---

##### `asnInput`<sup>Optional</sup> <a name="asnInput" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.property.asnInput"></a>

```typescript
public readonly asnInput: number;
```

- *Type:* number

---

##### `instance0BgpPeeringAddressInput`<sup>Optional</sup> <a name="instance0BgpPeeringAddressInput" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.property.instance0BgpPeeringAddressInput"></a>

```typescript
public readonly instance0BgpPeeringAddressInput: VpnGatewayBgpSettingsInstance0BgpPeeringAddress;
```

- *Type:* <a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddress">VpnGatewayBgpSettingsInstance0BgpPeeringAddress</a>

---

##### `instance1BgpPeeringAddressInput`<sup>Optional</sup> <a name="instance1BgpPeeringAddressInput" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.property.instance1BgpPeeringAddressInput"></a>

```typescript
public readonly instance1BgpPeeringAddressInput: VpnGatewayBgpSettingsInstance1BgpPeeringAddress;
```

- *Type:* <a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddress">VpnGatewayBgpSettingsInstance1BgpPeeringAddress</a>

---

##### `peerWeightInput`<sup>Optional</sup> <a name="peerWeightInput" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.property.peerWeightInput"></a>

```typescript
public readonly peerWeightInput: number;
```

- *Type:* number

---

##### `asn`<sup>Required</sup> <a name="asn" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.property.asn"></a>

```typescript
public readonly asn: number;
```

- *Type:* number

---

##### `peerWeight`<sup>Required</sup> <a name="peerWeight" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.property.peerWeight"></a>

```typescript
public readonly peerWeight: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VpnGatewayBgpSettings;
```

- *Type:* <a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayBgpSettings">VpnGatewayBgpSettings</a>

---


### VpnGatewayIpConfigurationList <a name="VpnGatewayIpConfigurationList" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayIpConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayIpConfigurationList.Initializer"></a>

```typescript
import { vpnGateway } from '@cdktn/provider-azurerm'

new vpnGateway.VpnGatewayIpConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayIpConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayIpConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayIpConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayIpConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayIpConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayIpConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayIpConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayIpConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayIpConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayIpConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayIpConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayIpConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayIpConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayIpConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayIpConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayIpConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayIpConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayIpConfigurationList.get"></a>

```typescript
public get(index: number): VpnGatewayIpConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayIpConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayIpConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayIpConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayIpConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayIpConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### VpnGatewayIpConfigurationOutputReference <a name="VpnGatewayIpConfigurationOutputReference" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayIpConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayIpConfigurationOutputReference.Initializer"></a>

```typescript
import { vpnGateway } from '@cdktn/provider-azurerm'

new vpnGateway.VpnGatewayIpConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayIpConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayIpConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayIpConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayIpConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayIpConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayIpConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayIpConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayIpConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayIpConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayIpConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayIpConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayIpConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayIpConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayIpConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayIpConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayIpConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayIpConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayIpConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayIpConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayIpConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayIpConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayIpConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayIpConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayIpConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayIpConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayIpConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayIpConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayIpConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayIpConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayIpConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayIpConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayIpConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayIpConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayIpConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayIpConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayIpConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayIpConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayIpConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayIpConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayIpConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayIpConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayIpConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayIpConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayIpConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayIpConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayIpConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayIpConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayIpConfigurationOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayIpConfigurationOutputReference.property.privateIpAddress">privateIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayIpConfigurationOutputReference.property.publicIpAddress">publicIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayIpConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayIpConfiguration">VpnGatewayIpConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayIpConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayIpConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayIpConfigurationOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `privateIpAddress`<sup>Required</sup> <a name="privateIpAddress" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayIpConfigurationOutputReference.property.privateIpAddress"></a>

```typescript
public readonly privateIpAddress: string;
```

- *Type:* string

---

##### `publicIpAddress`<sup>Required</sup> <a name="publicIpAddress" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayIpConfigurationOutputReference.property.publicIpAddress"></a>

```typescript
public readonly publicIpAddress: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayIpConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VpnGatewayIpConfiguration;
```

- *Type:* <a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayIpConfiguration">VpnGatewayIpConfiguration</a>

---


### VpnGatewayTimeoutsOutputReference <a name="VpnGatewayTimeoutsOutputReference" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.Initializer"></a>

```typescript
import { vpnGateway } from '@cdktn/provider-azurerm'

new vpnGateway.VpnGatewayTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayTimeouts">VpnGatewayTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VpnGatewayTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.vpnGateway.VpnGatewayTimeouts">VpnGatewayTimeouts</a>

---



