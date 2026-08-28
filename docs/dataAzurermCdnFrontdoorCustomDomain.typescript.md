# `dataAzurermCdnFrontdoorCustomDomain` Submodule <a name="`dataAzurermCdnFrontdoorCustomDomain` Submodule" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermCdnFrontdoorCustomDomain <a name="DataAzurermCdnFrontdoorCustomDomain" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/cdn_frontdoor_custom_domain azurerm_cdn_frontdoor_custom_domain}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.Initializer"></a>

```typescript
import { dataAzurermCdnFrontdoorCustomDomain } from '@cdktn/provider-azurerm'

new dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain(scope: Construct, id: string, config: DataAzurermCdnFrontdoorCustomDomainConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainConfig">DataAzurermCdnFrontdoorCustomDomainConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainConfig">DataAzurermCdnFrontdoorCustomDomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermCdnFrontdoorCustomDomainTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeouts">DataAzurermCdnFrontdoorCustomDomainTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAzurermCdnFrontdoorCustomDomain resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.isConstruct"></a>

```typescript
import { dataAzurermCdnFrontdoorCustomDomain } from '@cdktn/provider-azurerm'

dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.isTerraformElement"></a>

```typescript
import { dataAzurermCdnFrontdoorCustomDomain } from '@cdktn/provider-azurerm'

dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.isTerraformDataSource"></a>

```typescript
import { dataAzurermCdnFrontdoorCustomDomain } from '@cdktn/provider-azurerm'

dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.generateConfigForImport"></a>

```typescript
import { dataAzurermCdnFrontdoorCustomDomain } from '@cdktn/provider-azurerm'

dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAzurermCdnFrontdoorCustomDomain resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermCdnFrontdoorCustomDomain to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermCdnFrontdoorCustomDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/cdn_frontdoor_custom_domain#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAzurermCdnFrontdoorCustomDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.cdnFrontdoorProfileId">cdnFrontdoorProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.dnsZoneId">dnsZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.expirationDate">expirationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.hostName">hostName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference">DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.tls">tls</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsList">DataAzurermCdnFrontdoorCustomDomainTlsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.validationToken">validationToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.profileNameInput">profileNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeouts">DataAzurermCdnFrontdoorCustomDomainTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.profileName">profileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `cdnFrontdoorProfileId`<sup>Required</sup> <a name="cdnFrontdoorProfileId" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.cdnFrontdoorProfileId"></a>

```typescript
public readonly cdnFrontdoorProfileId: string;
```

- *Type:* string

---

##### `dnsZoneId`<sup>Required</sup> <a name="dnsZoneId" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.dnsZoneId"></a>

```typescript
public readonly dnsZoneId: string;
```

- *Type:* string

---

##### `expirationDate`<sup>Required</sup> <a name="expirationDate" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.expirationDate"></a>

```typescript
public readonly expirationDate: string;
```

- *Type:* string

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.hostName"></a>

```typescript
public readonly hostName: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference">DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference</a>

---

##### `tls`<sup>Required</sup> <a name="tls" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.tls"></a>

```typescript
public readonly tls: DataAzurermCdnFrontdoorCustomDomainTlsList;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsList">DataAzurermCdnFrontdoorCustomDomainTlsList</a>

---

##### `validationToken`<sup>Required</sup> <a name="validationToken" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.validationToken"></a>

```typescript
public readonly validationToken: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `profileNameInput`<sup>Optional</sup> <a name="profileNameInput" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.profileNameInput"></a>

```typescript
public readonly profileNameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzurermCdnFrontdoorCustomDomainTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeouts">DataAzurermCdnFrontdoorCustomDomainTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `profileName`<sup>Required</sup> <a name="profileName" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.profileName"></a>

```typescript
public readonly profileName: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomain.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermCdnFrontdoorCustomDomainConfig <a name="DataAzurermCdnFrontdoorCustomDomainConfig" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainConfig.Initializer"></a>

```typescript
import { dataAzurermCdnFrontdoorCustomDomain } from '@cdktn/provider-azurerm'

const dataAzurermCdnFrontdoorCustomDomainConfig: dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/cdn_frontdoor_custom_domain#name DataAzurermCdnFrontdoorCustomDomain#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainConfig.property.profileName">profileName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/cdn_frontdoor_custom_domain#profile_name DataAzurermCdnFrontdoorCustomDomain#profile_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/cdn_frontdoor_custom_domain#resource_group_name DataAzurermCdnFrontdoorCustomDomain#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/cdn_frontdoor_custom_domain#id DataAzurermCdnFrontdoorCustomDomain#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeouts">DataAzurermCdnFrontdoorCustomDomainTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/cdn_frontdoor_custom_domain#name DataAzurermCdnFrontdoorCustomDomain#name}.

---

##### `profileName`<sup>Required</sup> <a name="profileName" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainConfig.property.profileName"></a>

```typescript
public readonly profileName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/cdn_frontdoor_custom_domain#profile_name DataAzurermCdnFrontdoorCustomDomain#profile_name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/cdn_frontdoor_custom_domain#resource_group_name DataAzurermCdnFrontdoorCustomDomain#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/cdn_frontdoor_custom_domain#id DataAzurermCdnFrontdoorCustomDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermCdnFrontdoorCustomDomainTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeouts">DataAzurermCdnFrontdoorCustomDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/cdn_frontdoor_custom_domain#timeouts DataAzurermCdnFrontdoorCustomDomain#timeouts}

---

### DataAzurermCdnFrontdoorCustomDomainTimeouts <a name="DataAzurermCdnFrontdoorCustomDomainTimeouts" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeouts.Initializer"></a>

```typescript
import { dataAzurermCdnFrontdoorCustomDomain } from '@cdktn/provider-azurerm'

const dataAzurermCdnFrontdoorCustomDomainTimeouts: dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/cdn_frontdoor_custom_domain#read DataAzurermCdnFrontdoorCustomDomain#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/cdn_frontdoor_custom_domain#read DataAzurermCdnFrontdoorCustomDomain#read}.

---

### DataAzurermCdnFrontdoorCustomDomainTls <a name="DataAzurermCdnFrontdoorCustomDomainTls" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTls"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTls.Initializer"></a>

```typescript
import { dataAzurermCdnFrontdoorCustomDomain } from '@cdktn/provider-azurerm'

const dataAzurermCdnFrontdoorCustomDomainTls: dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTls = { ... }
```


### DataAzurermCdnFrontdoorCustomDomainTlsCipherSuite <a name="DataAzurermCdnFrontdoorCustomDomainTlsCipherSuite" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuite"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuite.Initializer"></a>

```typescript
import { dataAzurermCdnFrontdoorCustomDomain } from '@cdktn/provider-azurerm'

const dataAzurermCdnFrontdoorCustomDomainTlsCipherSuite: dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuite = { ... }
```


### DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphers <a name="DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphers" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphers.Initializer"></a>

```typescript
import { dataAzurermCdnFrontdoorCustomDomain } from '@cdktn/provider-azurerm'

const dataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphers: dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphers = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference <a name="DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermCdnFrontdoorCustomDomain } from '@cdktn/provider-azurerm'

new dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeouts">DataAzurermCdnFrontdoorCustomDomainTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzurermCdnFrontdoorCustomDomainTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTimeouts">DataAzurermCdnFrontdoorCustomDomainTimeouts</a>

---


### DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersList <a name="DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersList" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersList.Initializer"></a>

```typescript
import { dataAzurermCdnFrontdoorCustomDomain } from '@cdktn/provider-azurerm'

new dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersList.get"></a>

```typescript
public get(index: number): DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference <a name="DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.Initializer"></a>

```typescript
import { dataAzurermCdnFrontdoorCustomDomain } from '@cdktn/provider-azurerm'

new dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.property.tls12">tls12</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.property.tls13">tls13</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphers">DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tls12`<sup>Required</sup> <a name="tls12" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.property.tls12"></a>

```typescript
public readonly tls12: string[];
```

- *Type:* string[]

---

##### `tls13`<sup>Required</sup> <a name="tls13" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.property.tls13"></a>

```typescript
public readonly tls13: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphers;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphers">DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphers</a>

---


### DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteList <a name="DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteList" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteList.Initializer"></a>

```typescript
import { dataAzurermCdnFrontdoorCustomDomain } from '@cdktn/provider-azurerm'

new dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteList.get"></a>

```typescript
public get(index: number): DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteOutputReference <a name="DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteOutputReference" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.Initializer"></a>

```typescript
import { dataAzurermCdnFrontdoorCustomDomain } from '@cdktn/provider-azurerm'

new dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.property.customCiphers">customCiphers</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersList">DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuite">DataAzurermCdnFrontdoorCustomDomainTlsCipherSuite</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customCiphers`<sup>Required</sup> <a name="customCiphers" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.property.customCiphers"></a>

```typescript
public readonly customCiphers: DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersList;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersList">DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermCdnFrontdoorCustomDomainTlsCipherSuite;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuite">DataAzurermCdnFrontdoorCustomDomainTlsCipherSuite</a>

---


### DataAzurermCdnFrontdoorCustomDomainTlsList <a name="DataAzurermCdnFrontdoorCustomDomainTlsList" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsList.Initializer"></a>

```typescript
import { dataAzurermCdnFrontdoorCustomDomain } from '@cdktn/provider-azurerm'

new dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsList.get"></a>

```typescript
public get(index: number): DataAzurermCdnFrontdoorCustomDomainTlsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermCdnFrontdoorCustomDomainTlsOutputReference <a name="DataAzurermCdnFrontdoorCustomDomainTlsOutputReference" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.Initializer"></a>

```typescript
import { dataAzurermCdnFrontdoorCustomDomain } from '@cdktn/provider-azurerm'

new dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.property.cdnFrontdoorSecretId">cdnFrontdoorSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.property.certificateType">certificateType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.property.cipherSuite">cipherSuite</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteList">DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.property.minimumVersion">minimumVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTls">DataAzurermCdnFrontdoorCustomDomainTls</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cdnFrontdoorSecretId`<sup>Required</sup> <a name="cdnFrontdoorSecretId" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.property.cdnFrontdoorSecretId"></a>

```typescript
public readonly cdnFrontdoorSecretId: string;
```

- *Type:* string

---

##### `certificateType`<sup>Required</sup> <a name="certificateType" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.property.certificateType"></a>

```typescript
public readonly certificateType: string;
```

- *Type:* string

---

##### `cipherSuite`<sup>Required</sup> <a name="cipherSuite" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.property.cipherSuite"></a>

```typescript
public readonly cipherSuite: DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteList;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteList">DataAzurermCdnFrontdoorCustomDomainTlsCipherSuiteList</a>

---

##### `minimumVersion`<sup>Required</sup> <a name="minimumVersion" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.property.minimumVersion"></a>

```typescript
public readonly minimumVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTlsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermCdnFrontdoorCustomDomainTls;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorCustomDomain.DataAzurermCdnFrontdoorCustomDomainTls">DataAzurermCdnFrontdoorCustomDomainTls</a>

---



