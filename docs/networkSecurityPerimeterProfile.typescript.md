# `networkSecurityPerimeterProfile` Submodule <a name="`networkSecurityPerimeterProfile` Submodule" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkSecurityPerimeterProfile <a name="NetworkSecurityPerimeterProfile" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/network_security_perimeter_profile azurerm_network_security_perimeter_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.Initializer"></a>

```typescript
import { networkSecurityPerimeterProfile } from '@cdktn/provider-azurerm'

new networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile(scope: Construct, id: string, config: NetworkSecurityPerimeterProfileConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileConfig">NetworkSecurityPerimeterProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileConfig">NetworkSecurityPerimeterProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.putTimeouts"></a>

```typescript
public putTimeouts(value: NetworkSecurityPerimeterProfileTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileTimeouts">NetworkSecurityPerimeterProfileTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkSecurityPerimeterProfile resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.isConstruct"></a>

```typescript
import { networkSecurityPerimeterProfile } from '@cdktn/provider-azurerm'

networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.isTerraformElement"></a>

```typescript
import { networkSecurityPerimeterProfile } from '@cdktn/provider-azurerm'

networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.isTerraformResource"></a>

```typescript
import { networkSecurityPerimeterProfile } from '@cdktn/provider-azurerm'

networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.generateConfigForImport"></a>

```typescript
import { networkSecurityPerimeterProfile } from '@cdktn/provider-azurerm'

networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a NetworkSecurityPerimeterProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkSecurityPerimeterProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkSecurityPerimeterProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/network_security_perimeter_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the NetworkSecurityPerimeterProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileTimeoutsOutputReference">NetworkSecurityPerimeterProfileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.property.networkSecurityPerimeterIdInput">networkSecurityPerimeterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileTimeouts">NetworkSecurityPerimeterProfileTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.property.networkSecurityPerimeterId">networkSecurityPerimeterId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkSecurityPerimeterProfileTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileTimeoutsOutputReference">NetworkSecurityPerimeterProfileTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkSecurityPerimeterIdInput`<sup>Optional</sup> <a name="networkSecurityPerimeterIdInput" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.property.networkSecurityPerimeterIdInput"></a>

```typescript
public readonly networkSecurityPerimeterIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | NetworkSecurityPerimeterProfileTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileTimeouts">NetworkSecurityPerimeterProfileTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `networkSecurityPerimeterId`<sup>Required</sup> <a name="networkSecurityPerimeterId" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.property.networkSecurityPerimeterId"></a>

```typescript
public readonly networkSecurityPerimeterId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfile.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkSecurityPerimeterProfileConfig <a name="NetworkSecurityPerimeterProfileConfig" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileConfig.Initializer"></a>

```typescript
import { networkSecurityPerimeterProfile } from '@cdktn/provider-azurerm'

const networkSecurityPerimeterProfileConfig: networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/network_security_perimeter_profile#name NetworkSecurityPerimeterProfile#name}. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileConfig.property.networkSecurityPerimeterId">networkSecurityPerimeterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/network_security_perimeter_profile#network_security_perimeter_id NetworkSecurityPerimeterProfile#network_security_perimeter_id}. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/network_security_perimeter_profile#id NetworkSecurityPerimeterProfile#id}. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileTimeouts">NetworkSecurityPerimeterProfileTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/network_security_perimeter_profile#name NetworkSecurityPerimeterProfile#name}.

---

##### `networkSecurityPerimeterId`<sup>Required</sup> <a name="networkSecurityPerimeterId" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileConfig.property.networkSecurityPerimeterId"></a>

```typescript
public readonly networkSecurityPerimeterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/network_security_perimeter_profile#network_security_perimeter_id NetworkSecurityPerimeterProfile#network_security_perimeter_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/network_security_perimeter_profile#id NetworkSecurityPerimeterProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileConfig.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkSecurityPerimeterProfileTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileTimeouts">NetworkSecurityPerimeterProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/network_security_perimeter_profile#timeouts NetworkSecurityPerimeterProfile#timeouts}

---

### NetworkSecurityPerimeterProfileTimeouts <a name="NetworkSecurityPerimeterProfileTimeouts" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileTimeouts.Initializer"></a>

```typescript
import { networkSecurityPerimeterProfile } from '@cdktn/provider-azurerm'

const networkSecurityPerimeterProfileTimeouts: networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/network_security_perimeter_profile#create NetworkSecurityPerimeterProfile#create}. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/network_security_perimeter_profile#delete NetworkSecurityPerimeterProfile#delete}. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/network_security_perimeter_profile#read NetworkSecurityPerimeterProfile#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/network_security_perimeter_profile#create NetworkSecurityPerimeterProfile#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/network_security_perimeter_profile#delete NetworkSecurityPerimeterProfile#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/network_security_perimeter_profile#read NetworkSecurityPerimeterProfile#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkSecurityPerimeterProfileTimeoutsOutputReference <a name="NetworkSecurityPerimeterProfileTimeoutsOutputReference" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileTimeoutsOutputReference.Initializer"></a>

```typescript
import { networkSecurityPerimeterProfile } from '@cdktn/provider-azurerm'

new networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileTimeouts">NetworkSecurityPerimeterProfileTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkSecurityPerimeterProfileTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.networkSecurityPerimeterProfile.NetworkSecurityPerimeterProfileTimeouts">NetworkSecurityPerimeterProfileTimeouts</a>

---



