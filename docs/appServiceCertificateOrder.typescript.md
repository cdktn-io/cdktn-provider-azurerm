# `appServiceCertificateOrder` Submodule <a name="`appServiceCertificateOrder` Submodule" id="@cdktn/provider-azurerm.appServiceCertificateOrder"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppServiceCertificateOrder <a name="AppServiceCertificateOrder" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/app_service_certificate_order azurerm_app_service_certificate_order}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.Initializer"></a>

```typescript
import { appServiceCertificateOrder } from '@cdktn/provider-azurerm'

new appServiceCertificateOrder.AppServiceCertificateOrder(scope: Construct, id: string, config: AppServiceCertificateOrderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig">AppServiceCertificateOrderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig">AppServiceCertificateOrderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.resetAutoRenew">resetAutoRenew</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.resetCsr">resetCsr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.resetDistinguishedName">resetDistinguishedName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.resetKeySize">resetKeySize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.resetProductType">resetProductType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.resetValidityInYears">resetValidityInYears</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.putTimeouts"></a>

```typescript
public putTimeouts(value: AppServiceCertificateOrderTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeouts">AppServiceCertificateOrderTimeouts</a>

---

##### `resetAutoRenew` <a name="resetAutoRenew" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.resetAutoRenew"></a>

```typescript
public resetAutoRenew(): void
```

##### `resetCsr` <a name="resetCsr" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.resetCsr"></a>

```typescript
public resetCsr(): void
```

##### `resetDistinguishedName` <a name="resetDistinguishedName" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.resetDistinguishedName"></a>

```typescript
public resetDistinguishedName(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKeySize` <a name="resetKeySize" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.resetKeySize"></a>

```typescript
public resetKeySize(): void
```

##### `resetProductType` <a name="resetProductType" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.resetProductType"></a>

```typescript
public resetProductType(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetValidityInYears` <a name="resetValidityInYears" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.resetValidityInYears"></a>

```typescript
public resetValidityInYears(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AppServiceCertificateOrder resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.isConstruct"></a>

```typescript
import { appServiceCertificateOrder } from '@cdktn/provider-azurerm'

appServiceCertificateOrder.AppServiceCertificateOrder.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.isTerraformElement"></a>

```typescript
import { appServiceCertificateOrder } from '@cdktn/provider-azurerm'

appServiceCertificateOrder.AppServiceCertificateOrder.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.isTerraformResource"></a>

```typescript
import { appServiceCertificateOrder } from '@cdktn/provider-azurerm'

appServiceCertificateOrder.AppServiceCertificateOrder.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.generateConfigForImport"></a>

```typescript
import { appServiceCertificateOrder } from '@cdktn/provider-azurerm'

appServiceCertificateOrder.AppServiceCertificateOrder.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a AppServiceCertificateOrder resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AppServiceCertificateOrder to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AppServiceCertificateOrder that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/app_service_certificate_order#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AppServiceCertificateOrder to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.appServiceCertificateNotRenewableReasons">appServiceCertificateNotRenewableReasons</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.certificates">certificates</a></code> | <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList">AppServiceCertificateOrderCertificatesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.domainVerificationToken">domainVerificationToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.expirationTime">expirationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.intermediateThumbprint">intermediateThumbprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.isPrivateKeyExternal">isPrivateKeyExternal</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.rootThumbprint">rootThumbprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.signedCertificateThumbprint">signedCertificateThumbprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference">AppServiceCertificateOrderTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.autoRenewInput">autoRenewInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.csrInput">csrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.distinguishedNameInput">distinguishedNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.keySizeInput">keySizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.productTypeInput">productTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeouts">AppServiceCertificateOrderTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.validityInYearsInput">validityInYearsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.autoRenew">autoRenew</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.csr">csr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.distinguishedName">distinguishedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.keySize">keySize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.productType">productType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.validityInYears">validityInYears</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `appServiceCertificateNotRenewableReasons`<sup>Required</sup> <a name="appServiceCertificateNotRenewableReasons" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.appServiceCertificateNotRenewableReasons"></a>

```typescript
public readonly appServiceCertificateNotRenewableReasons: string[];
```

- *Type:* string[]

---

##### `certificates`<sup>Required</sup> <a name="certificates" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.certificates"></a>

```typescript
public readonly certificates: AppServiceCertificateOrderCertificatesList;
```

- *Type:* <a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList">AppServiceCertificateOrderCertificatesList</a>

---

##### `domainVerificationToken`<sup>Required</sup> <a name="domainVerificationToken" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.domainVerificationToken"></a>

```typescript
public readonly domainVerificationToken: string;
```

- *Type:* string

---

##### `expirationTime`<sup>Required</sup> <a name="expirationTime" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.expirationTime"></a>

```typescript
public readonly expirationTime: string;
```

- *Type:* string

---

##### `intermediateThumbprint`<sup>Required</sup> <a name="intermediateThumbprint" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.intermediateThumbprint"></a>

```typescript
public readonly intermediateThumbprint: string;
```

- *Type:* string

---

##### `isPrivateKeyExternal`<sup>Required</sup> <a name="isPrivateKeyExternal" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.isPrivateKeyExternal"></a>

```typescript
public readonly isPrivateKeyExternal: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `rootThumbprint`<sup>Required</sup> <a name="rootThumbprint" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.rootThumbprint"></a>

```typescript
public readonly rootThumbprint: string;
```

- *Type:* string

---

##### `signedCertificateThumbprint`<sup>Required</sup> <a name="signedCertificateThumbprint" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.signedCertificateThumbprint"></a>

```typescript
public readonly signedCertificateThumbprint: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.timeouts"></a>

```typescript
public readonly timeouts: AppServiceCertificateOrderTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference">AppServiceCertificateOrderTimeoutsOutputReference</a>

---

##### `autoRenewInput`<sup>Optional</sup> <a name="autoRenewInput" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.autoRenewInput"></a>

```typescript
public readonly autoRenewInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `csrInput`<sup>Optional</sup> <a name="csrInput" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.csrInput"></a>

```typescript
public readonly csrInput: string;
```

- *Type:* string

---

##### `distinguishedNameInput`<sup>Optional</sup> <a name="distinguishedNameInput" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.distinguishedNameInput"></a>

```typescript
public readonly distinguishedNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `keySizeInput`<sup>Optional</sup> <a name="keySizeInput" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.keySizeInput"></a>

```typescript
public readonly keySizeInput: number;
```

- *Type:* number

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `productTypeInput`<sup>Optional</sup> <a name="productTypeInput" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.productTypeInput"></a>

```typescript
public readonly productTypeInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | AppServiceCertificateOrderTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeouts">AppServiceCertificateOrderTimeouts</a>

---

##### `validityInYearsInput`<sup>Optional</sup> <a name="validityInYearsInput" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.validityInYearsInput"></a>

```typescript
public readonly validityInYearsInput: number;
```

- *Type:* number

---

##### `autoRenew`<sup>Required</sup> <a name="autoRenew" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.autoRenew"></a>

```typescript
public readonly autoRenew: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `csr`<sup>Required</sup> <a name="csr" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.csr"></a>

```typescript
public readonly csr: string;
```

- *Type:* string

---

##### `distinguishedName`<sup>Required</sup> <a name="distinguishedName" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.distinguishedName"></a>

```typescript
public readonly distinguishedName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `keySize`<sup>Required</sup> <a name="keySize" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.keySize"></a>

```typescript
public readonly keySize: number;
```

- *Type:* number

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `productType`<sup>Required</sup> <a name="productType" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.productType"></a>

```typescript
public readonly productType: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `validityInYears`<sup>Required</sup> <a name="validityInYears" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.validityInYears"></a>

```typescript
public readonly validityInYears: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppServiceCertificateOrderCertificates <a name="AppServiceCertificateOrderCertificates" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificates"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificates.Initializer"></a>

```typescript
import { appServiceCertificateOrder } from '@cdktn/provider-azurerm'

const appServiceCertificateOrderCertificates: appServiceCertificateOrder.AppServiceCertificateOrderCertificates = { ... }
```


### AppServiceCertificateOrderConfig <a name="AppServiceCertificateOrderConfig" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.Initializer"></a>

```typescript
import { appServiceCertificateOrder } from '@cdktn/provider-azurerm'

const appServiceCertificateOrderConfig: appServiceCertificateOrder.AppServiceCertificateOrderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/app_service_certificate_order#location AppServiceCertificateOrder#location}. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/app_service_certificate_order#name AppServiceCertificateOrder#name}. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/app_service_certificate_order#resource_group_name AppServiceCertificateOrder#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.autoRenew">autoRenew</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/app_service_certificate_order#auto_renew AppServiceCertificateOrder#auto_renew}. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.csr">csr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/app_service_certificate_order#csr AppServiceCertificateOrder#csr}. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.distinguishedName">distinguishedName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/app_service_certificate_order#distinguished_name AppServiceCertificateOrder#distinguished_name}. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/app_service_certificate_order#id AppServiceCertificateOrder#id}. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.keySize">keySize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/app_service_certificate_order#key_size AppServiceCertificateOrder#key_size}. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.productType">productType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/app_service_certificate_order#product_type AppServiceCertificateOrder#product_type}. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/app_service_certificate_order#tags AppServiceCertificateOrder#tags}. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeouts">AppServiceCertificateOrderTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.validityInYears">validityInYears</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/app_service_certificate_order#validity_in_years AppServiceCertificateOrder#validity_in_years}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/app_service_certificate_order#location AppServiceCertificateOrder#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/app_service_certificate_order#name AppServiceCertificateOrder#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/app_service_certificate_order#resource_group_name AppServiceCertificateOrder#resource_group_name}.

---

##### `autoRenew`<sup>Optional</sup> <a name="autoRenew" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.autoRenew"></a>

```typescript
public readonly autoRenew: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/app_service_certificate_order#auto_renew AppServiceCertificateOrder#auto_renew}.

---

##### `csr`<sup>Optional</sup> <a name="csr" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.csr"></a>

```typescript
public readonly csr: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/app_service_certificate_order#csr AppServiceCertificateOrder#csr}.

---

##### `distinguishedName`<sup>Optional</sup> <a name="distinguishedName" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.distinguishedName"></a>

```typescript
public readonly distinguishedName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/app_service_certificate_order#distinguished_name AppServiceCertificateOrder#distinguished_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/app_service_certificate_order#id AppServiceCertificateOrder#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keySize`<sup>Optional</sup> <a name="keySize" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.keySize"></a>

```typescript
public readonly keySize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/app_service_certificate_order#key_size AppServiceCertificateOrder#key_size}.

---

##### `productType`<sup>Optional</sup> <a name="productType" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.productType"></a>

```typescript
public readonly productType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/app_service_certificate_order#product_type AppServiceCertificateOrder#product_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/app_service_certificate_order#tags AppServiceCertificateOrder#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.timeouts"></a>

```typescript
public readonly timeouts: AppServiceCertificateOrderTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeouts">AppServiceCertificateOrderTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/app_service_certificate_order#timeouts AppServiceCertificateOrder#timeouts}

---

##### `validityInYears`<sup>Optional</sup> <a name="validityInYears" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.validityInYears"></a>

```typescript
public readonly validityInYears: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/app_service_certificate_order#validity_in_years AppServiceCertificateOrder#validity_in_years}.

---

### AppServiceCertificateOrderTimeouts <a name="AppServiceCertificateOrderTimeouts" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeouts.Initializer"></a>

```typescript
import { appServiceCertificateOrder } from '@cdktn/provider-azurerm'

const appServiceCertificateOrderTimeouts: appServiceCertificateOrder.AppServiceCertificateOrderTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/app_service_certificate_order#create AppServiceCertificateOrder#create}. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/app_service_certificate_order#delete AppServiceCertificateOrder#delete}. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/app_service_certificate_order#read AppServiceCertificateOrder#read}. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/app_service_certificate_order#update AppServiceCertificateOrder#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/app_service_certificate_order#create AppServiceCertificateOrder#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/app_service_certificate_order#delete AppServiceCertificateOrder#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/app_service_certificate_order#read AppServiceCertificateOrder#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/app_service_certificate_order#update AppServiceCertificateOrder#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppServiceCertificateOrderCertificatesList <a name="AppServiceCertificateOrderCertificatesList" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList.Initializer"></a>

```typescript
import { appServiceCertificateOrder } from '@cdktn/provider-azurerm'

new appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList.get"></a>

```typescript
public get(index: number): AppServiceCertificateOrderCertificatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### AppServiceCertificateOrderCertificatesOutputReference <a name="AppServiceCertificateOrderCertificatesOutputReference" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.Initializer"></a>

```typescript
import { appServiceCertificateOrder } from '@cdktn/provider-azurerm'

new appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.property.certificateName">certificateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.property.keyVaultId">keyVaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.property.keyVaultSecretName">keyVaultSecretName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.property.provisioningState">provisioningState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificates">AppServiceCertificateOrderCertificates</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateName`<sup>Required</sup> <a name="certificateName" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.property.certificateName"></a>

```typescript
public readonly certificateName: string;
```

- *Type:* string

---

##### `keyVaultId`<sup>Required</sup> <a name="keyVaultId" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.property.keyVaultId"></a>

```typescript
public readonly keyVaultId: string;
```

- *Type:* string

---

##### `keyVaultSecretName`<sup>Required</sup> <a name="keyVaultSecretName" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.property.keyVaultSecretName"></a>

```typescript
public readonly keyVaultSecretName: string;
```

- *Type:* string

---

##### `provisioningState`<sup>Required</sup> <a name="provisioningState" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.property.provisioningState"></a>

```typescript
public readonly provisioningState: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppServiceCertificateOrderCertificates;
```

- *Type:* <a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificates">AppServiceCertificateOrderCertificates</a>

---


### AppServiceCertificateOrderTimeoutsOutputReference <a name="AppServiceCertificateOrderTimeoutsOutputReference" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.Initializer"></a>

```typescript
import { appServiceCertificateOrder } from '@cdktn/provider-azurerm'

new appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeouts">AppServiceCertificateOrderTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppServiceCertificateOrderTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeouts">AppServiceCertificateOrderTimeouts</a>

---



