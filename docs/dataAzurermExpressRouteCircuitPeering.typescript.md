# `dataAzurermExpressRouteCircuitPeering` Submodule <a name="`dataAzurermExpressRouteCircuitPeering` Submodule" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermExpressRouteCircuitPeering <a name="DataAzurermExpressRouteCircuitPeering" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/data-sources/express_route_circuit_peering azurerm_express_route_circuit_peering}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.Initializer"></a>

```typescript
import { dataAzurermExpressRouteCircuitPeering } from '@cdktn/provider-azurerm'

new dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering(scope: Construct, id: string, config: DataAzurermExpressRouteCircuitPeeringConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringConfig">DataAzurermExpressRouteCircuitPeeringConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringConfig">DataAzurermExpressRouteCircuitPeeringConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermExpressRouteCircuitPeeringTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeouts">DataAzurermExpressRouteCircuitPeeringTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAzurermExpressRouteCircuitPeering resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.isConstruct"></a>

```typescript
import { dataAzurermExpressRouteCircuitPeering } from '@cdktn/provider-azurerm'

dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.isTerraformElement"></a>

```typescript
import { dataAzurermExpressRouteCircuitPeering } from '@cdktn/provider-azurerm'

dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.isTerraformDataSource"></a>

```typescript
import { dataAzurermExpressRouteCircuitPeering } from '@cdktn/provider-azurerm'

dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.generateConfigForImport"></a>

```typescript
import { dataAzurermExpressRouteCircuitPeering } from '@cdktn/provider-azurerm'

dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAzurermExpressRouteCircuitPeering resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermExpressRouteCircuitPeering to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermExpressRouteCircuitPeering that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/data-sources/express_route_circuit_peering#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAzurermExpressRouteCircuitPeering to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.azureAsn">azureAsn</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.gatewayManagerEtag">gatewayManagerEtag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.ipv4Enabled">ipv4Enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.ipv6">ipv6</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6List">DataAzurermExpressRouteCircuitPeeringIpv6List</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.microsoftPeeringConfig">microsoftPeeringConfig</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigList">DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.peerAsn">peerAsn</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.primaryAzurePort">primaryAzurePort</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.primaryPeerAddressPrefix">primaryPeerAddressPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.routeFilterId">routeFilterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.secondaryAzurePort">secondaryAzurePort</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.secondaryPeerAddressPrefix">secondaryPeerAddressPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.sharedKey">sharedKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference">DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.vlanId">vlanId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.expressRouteCircuitNameInput">expressRouteCircuitNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.peeringTypeInput">peeringTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeouts">DataAzurermExpressRouteCircuitPeeringTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.expressRouteCircuitName">expressRouteCircuitName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.peeringType">peeringType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `azureAsn`<sup>Required</sup> <a name="azureAsn" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.azureAsn"></a>

```typescript
public readonly azureAsn: number;
```

- *Type:* number

---

##### `gatewayManagerEtag`<sup>Required</sup> <a name="gatewayManagerEtag" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.gatewayManagerEtag"></a>

```typescript
public readonly gatewayManagerEtag: string;
```

- *Type:* string

---

##### `ipv4Enabled`<sup>Required</sup> <a name="ipv4Enabled" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.ipv4Enabled"></a>

```typescript
public readonly ipv4Enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `ipv6`<sup>Required</sup> <a name="ipv6" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.ipv6"></a>

```typescript
public readonly ipv6: DataAzurermExpressRouteCircuitPeeringIpv6List;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6List">DataAzurermExpressRouteCircuitPeeringIpv6List</a>

---

##### `microsoftPeeringConfig`<sup>Required</sup> <a name="microsoftPeeringConfig" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.microsoftPeeringConfig"></a>

```typescript
public readonly microsoftPeeringConfig: DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigList;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigList">DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigList</a>

---

##### `peerAsn`<sup>Required</sup> <a name="peerAsn" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.peerAsn"></a>

```typescript
public readonly peerAsn: number;
```

- *Type:* number

---

##### `primaryAzurePort`<sup>Required</sup> <a name="primaryAzurePort" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.primaryAzurePort"></a>

```typescript
public readonly primaryAzurePort: string;
```

- *Type:* string

---

##### `primaryPeerAddressPrefix`<sup>Required</sup> <a name="primaryPeerAddressPrefix" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.primaryPeerAddressPrefix"></a>

```typescript
public readonly primaryPeerAddressPrefix: string;
```

- *Type:* string

---

##### `routeFilterId`<sup>Required</sup> <a name="routeFilterId" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.routeFilterId"></a>

```typescript
public readonly routeFilterId: string;
```

- *Type:* string

---

##### `secondaryAzurePort`<sup>Required</sup> <a name="secondaryAzurePort" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.secondaryAzurePort"></a>

```typescript
public readonly secondaryAzurePort: string;
```

- *Type:* string

---

##### `secondaryPeerAddressPrefix`<sup>Required</sup> <a name="secondaryPeerAddressPrefix" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.secondaryPeerAddressPrefix"></a>

```typescript
public readonly secondaryPeerAddressPrefix: string;
```

- *Type:* string

---

##### `sharedKey`<sup>Required</sup> <a name="sharedKey" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.sharedKey"></a>

```typescript
public readonly sharedKey: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference">DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference</a>

---

##### `vlanId`<sup>Required</sup> <a name="vlanId" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.vlanId"></a>

```typescript
public readonly vlanId: number;
```

- *Type:* number

---

##### `expressRouteCircuitNameInput`<sup>Optional</sup> <a name="expressRouteCircuitNameInput" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.expressRouteCircuitNameInput"></a>

```typescript
public readonly expressRouteCircuitNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `peeringTypeInput`<sup>Optional</sup> <a name="peeringTypeInput" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.peeringTypeInput"></a>

```typescript
public readonly peeringTypeInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzurermExpressRouteCircuitPeeringTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeouts">DataAzurermExpressRouteCircuitPeeringTimeouts</a>

---

##### `expressRouteCircuitName`<sup>Required</sup> <a name="expressRouteCircuitName" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.expressRouteCircuitName"></a>

```typescript
public readonly expressRouteCircuitName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `peeringType`<sup>Required</sup> <a name="peeringType" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.peeringType"></a>

```typescript
public readonly peeringType: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermExpressRouteCircuitPeeringConfig <a name="DataAzurermExpressRouteCircuitPeeringConfig" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringConfig.Initializer"></a>

```typescript
import { dataAzurermExpressRouteCircuitPeering } from '@cdktn/provider-azurerm'

const dataAzurermExpressRouteCircuitPeeringConfig: dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringConfig.property.expressRouteCircuitName">expressRouteCircuitName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/data-sources/express_route_circuit_peering#express_route_circuit_name DataAzurermExpressRouteCircuitPeering#express_route_circuit_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringConfig.property.peeringType">peeringType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/data-sources/express_route_circuit_peering#peering_type DataAzurermExpressRouteCircuitPeering#peering_type}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/data-sources/express_route_circuit_peering#resource_group_name DataAzurermExpressRouteCircuitPeering#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/data-sources/express_route_circuit_peering#id DataAzurermExpressRouteCircuitPeering#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeouts">DataAzurermExpressRouteCircuitPeeringTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `expressRouteCircuitName`<sup>Required</sup> <a name="expressRouteCircuitName" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringConfig.property.expressRouteCircuitName"></a>

```typescript
public readonly expressRouteCircuitName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/data-sources/express_route_circuit_peering#express_route_circuit_name DataAzurermExpressRouteCircuitPeering#express_route_circuit_name}.

---

##### `peeringType`<sup>Required</sup> <a name="peeringType" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringConfig.property.peeringType"></a>

```typescript
public readonly peeringType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/data-sources/express_route_circuit_peering#peering_type DataAzurermExpressRouteCircuitPeering#peering_type}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/data-sources/express_route_circuit_peering#resource_group_name DataAzurermExpressRouteCircuitPeering#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/data-sources/express_route_circuit_peering#id DataAzurermExpressRouteCircuitPeering#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermExpressRouteCircuitPeeringTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeouts">DataAzurermExpressRouteCircuitPeeringTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/data-sources/express_route_circuit_peering#timeouts DataAzurermExpressRouteCircuitPeering#timeouts}

---

### DataAzurermExpressRouteCircuitPeeringIpv6 <a name="DataAzurermExpressRouteCircuitPeeringIpv6" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6.Initializer"></a>

```typescript
import { dataAzurermExpressRouteCircuitPeering } from '@cdktn/provider-azurerm'

const dataAzurermExpressRouteCircuitPeeringIpv6: dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6 = { ... }
```


### DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeering <a name="DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeering" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeering"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeering.Initializer"></a>

```typescript
import { dataAzurermExpressRouteCircuitPeering } from '@cdktn/provider-azurerm'

const dataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeering: dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeering = { ... }
```


### DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfig <a name="DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfig" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfig.Initializer"></a>

```typescript
import { dataAzurermExpressRouteCircuitPeering } from '@cdktn/provider-azurerm'

const dataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfig: dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfig = { ... }
```


### DataAzurermExpressRouteCircuitPeeringTimeouts <a name="DataAzurermExpressRouteCircuitPeeringTimeouts" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeouts.Initializer"></a>

```typescript
import { dataAzurermExpressRouteCircuitPeering } from '@cdktn/provider-azurerm'

const dataAzurermExpressRouteCircuitPeeringTimeouts: dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/data-sources/express_route_circuit_peering#read DataAzurermExpressRouteCircuitPeering#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/data-sources/express_route_circuit_peering#read DataAzurermExpressRouteCircuitPeering#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermExpressRouteCircuitPeeringIpv6List <a name="DataAzurermExpressRouteCircuitPeeringIpv6List" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6List"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6List.Initializer"></a>

```typescript
import { dataAzurermExpressRouteCircuitPeering } from '@cdktn/provider-azurerm'

new dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6List(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6List.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6List.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6List.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6List.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6List.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6List.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6List.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6List.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6List.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6List.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6List.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6List.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6List.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6List.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6List.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6List.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6List.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6List.get"></a>

```typescript
public get(index: number): DataAzurermExpressRouteCircuitPeeringIpv6OutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6List.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6List.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6List.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6List.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6List.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringList <a name="DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringList" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringList.Initializer"></a>

```typescript
import { dataAzurermExpressRouteCircuitPeering } from '@cdktn/provider-azurerm'

new dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringList.get"></a>

```typescript
public get(index: number): DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference <a name="DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.Initializer"></a>

```typescript
import { dataAzurermExpressRouteCircuitPeering } from '@cdktn/provider-azurerm'

new dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.advertisedCommunities">advertisedCommunities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.advertisedPublicPrefixes">advertisedPublicPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.customerAsn">customerAsn</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.routingRegistryName">routingRegistryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeering">DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeering</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `advertisedCommunities`<sup>Required</sup> <a name="advertisedCommunities" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.advertisedCommunities"></a>

```typescript
public readonly advertisedCommunities: string[];
```

- *Type:* string[]

---

##### `advertisedPublicPrefixes`<sup>Required</sup> <a name="advertisedPublicPrefixes" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.advertisedPublicPrefixes"></a>

```typescript
public readonly advertisedPublicPrefixes: string[];
```

- *Type:* string[]

---

##### `customerAsn`<sup>Required</sup> <a name="customerAsn" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.customerAsn"></a>

```typescript
public readonly customerAsn: number;
```

- *Type:* number

---

##### `routingRegistryName`<sup>Required</sup> <a name="routingRegistryName" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.routingRegistryName"></a>

```typescript
public readonly routingRegistryName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeering;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeering">DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeering</a>

---


### DataAzurermExpressRouteCircuitPeeringIpv6OutputReference <a name="DataAzurermExpressRouteCircuitPeeringIpv6OutputReference" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.Initializer"></a>

```typescript
import { dataAzurermExpressRouteCircuitPeering } from '@cdktn/provider-azurerm'

new dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.property.microsoftPeering">microsoftPeering</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringList">DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.property.primaryPeerAddressPrefix">primaryPeerAddressPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.property.routeFilterId">routeFilterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.property.secondaryPeerAddressPrefix">secondaryPeerAddressPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6">DataAzurermExpressRouteCircuitPeeringIpv6</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `microsoftPeering`<sup>Required</sup> <a name="microsoftPeering" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.property.microsoftPeering"></a>

```typescript
public readonly microsoftPeering: DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringList;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringList">DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringList</a>

---

##### `primaryPeerAddressPrefix`<sup>Required</sup> <a name="primaryPeerAddressPrefix" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.property.primaryPeerAddressPrefix"></a>

```typescript
public readonly primaryPeerAddressPrefix: string;
```

- *Type:* string

---

##### `routeFilterId`<sup>Required</sup> <a name="routeFilterId" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.property.routeFilterId"></a>

```typescript
public readonly routeFilterId: string;
```

- *Type:* string

---

##### `secondaryPeerAddressPrefix`<sup>Required</sup> <a name="secondaryPeerAddressPrefix" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.property.secondaryPeerAddressPrefix"></a>

```typescript
public readonly secondaryPeerAddressPrefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermExpressRouteCircuitPeeringIpv6;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6">DataAzurermExpressRouteCircuitPeeringIpv6</a>

---


### DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigList <a name="DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigList" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigList.Initializer"></a>

```typescript
import { dataAzurermExpressRouteCircuitPeering } from '@cdktn/provider-azurerm'

new dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigList.get"></a>

```typescript
public get(index: number): DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference <a name="DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.Initializer"></a>

```typescript
import { dataAzurermExpressRouteCircuitPeering } from '@cdktn/provider-azurerm'

new dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.advertisedCommunities">advertisedCommunities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.advertisedPublicPrefixes">advertisedPublicPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.customerAsn">customerAsn</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.routingRegistryName">routingRegistryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfig">DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `advertisedCommunities`<sup>Required</sup> <a name="advertisedCommunities" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.advertisedCommunities"></a>

```typescript
public readonly advertisedCommunities: string[];
```

- *Type:* string[]

---

##### `advertisedPublicPrefixes`<sup>Required</sup> <a name="advertisedPublicPrefixes" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.advertisedPublicPrefixes"></a>

```typescript
public readonly advertisedPublicPrefixes: string[];
```

- *Type:* string[]

---

##### `customerAsn`<sup>Required</sup> <a name="customerAsn" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.customerAsn"></a>

```typescript
public readonly customerAsn: number;
```

- *Type:* number

---

##### `routingRegistryName`<sup>Required</sup> <a name="routingRegistryName" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.routingRegistryName"></a>

```typescript
public readonly routingRegistryName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfig;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfig">DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfig</a>

---


### DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference <a name="DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermExpressRouteCircuitPeering } from '@cdktn/provider-azurerm'

new dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeouts">DataAzurermExpressRouteCircuitPeeringTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzurermExpressRouteCircuitPeeringTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeouts">DataAzurermExpressRouteCircuitPeeringTimeouts</a>

---



