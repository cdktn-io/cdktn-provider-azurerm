# `dataAzurermEventgridPartnerRegistration` Submodule <a name="`dataAzurermEventgridPartnerRegistration` Submodule" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermEventgridPartnerRegistration <a name="DataAzurermEventgridPartnerRegistration" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/eventgrid_partner_registration azurerm_eventgrid_partner_registration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.Initializer"></a>

```typescript
import { dataAzurermEventgridPartnerRegistration } from '@cdktn/provider-azurerm'

new dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration(scope: Construct, id: string, config: DataAzurermEventgridPartnerRegistrationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationConfig">DataAzurermEventgridPartnerRegistrationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationConfig">DataAzurermEventgridPartnerRegistrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermEventgridPartnerRegistrationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationTimeouts">DataAzurermEventgridPartnerRegistrationTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAzurermEventgridPartnerRegistration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.isConstruct"></a>

```typescript
import { dataAzurermEventgridPartnerRegistration } from '@cdktn/provider-azurerm'

dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.isTerraformElement"></a>

```typescript
import { dataAzurermEventgridPartnerRegistration } from '@cdktn/provider-azurerm'

dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.isTerraformDataSource"></a>

```typescript
import { dataAzurermEventgridPartnerRegistration } from '@cdktn/provider-azurerm'

dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.generateConfigForImport"></a>

```typescript
import { dataAzurermEventgridPartnerRegistration } from '@cdktn/provider-azurerm'

dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAzurermEventgridPartnerRegistration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermEventgridPartnerRegistration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermEventgridPartnerRegistration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/eventgrid_partner_registration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAzurermEventgridPartnerRegistration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.property.partnerRegistrationId">partnerRegistrationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.property.tags">tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationTimeoutsOutputReference">DataAzurermEventgridPartnerRegistrationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationTimeouts">DataAzurermEventgridPartnerRegistrationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `partnerRegistrationId`<sup>Required</sup> <a name="partnerRegistrationId" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.property.partnerRegistrationId"></a>

```typescript
public readonly partnerRegistrationId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermEventgridPartnerRegistrationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationTimeoutsOutputReference">DataAzurermEventgridPartnerRegistrationTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzurermEventgridPartnerRegistrationTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationTimeouts">DataAzurermEventgridPartnerRegistrationTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermEventgridPartnerRegistrationConfig <a name="DataAzurermEventgridPartnerRegistrationConfig" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationConfig.Initializer"></a>

```typescript
import { dataAzurermEventgridPartnerRegistration } from '@cdktn/provider-azurerm'

const dataAzurermEventgridPartnerRegistrationConfig: dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/eventgrid_partner_registration#name DataAzurermEventgridPartnerRegistration#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/eventgrid_partner_registration#resource_group_name DataAzurermEventgridPartnerRegistration#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/eventgrid_partner_registration#id DataAzurermEventgridPartnerRegistration#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationTimeouts">DataAzurermEventgridPartnerRegistrationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/eventgrid_partner_registration#name DataAzurermEventgridPartnerRegistration#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/eventgrid_partner_registration#resource_group_name DataAzurermEventgridPartnerRegistration#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/eventgrid_partner_registration#id DataAzurermEventgridPartnerRegistration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermEventgridPartnerRegistrationTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationTimeouts">DataAzurermEventgridPartnerRegistrationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/eventgrid_partner_registration#timeouts DataAzurermEventgridPartnerRegistration#timeouts}

---

### DataAzurermEventgridPartnerRegistrationTimeouts <a name="DataAzurermEventgridPartnerRegistrationTimeouts" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationTimeouts.Initializer"></a>

```typescript
import { dataAzurermEventgridPartnerRegistration } from '@cdktn/provider-azurerm'

const dataAzurermEventgridPartnerRegistrationTimeouts: dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/eventgrid_partner_registration#read DataAzurermEventgridPartnerRegistration#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/eventgrid_partner_registration#read DataAzurermEventgridPartnerRegistration#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermEventgridPartnerRegistrationTimeoutsOutputReference <a name="DataAzurermEventgridPartnerRegistrationTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermEventgridPartnerRegistration } from '@cdktn/provider-azurerm'

new dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationTimeouts">DataAzurermEventgridPartnerRegistrationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzurermEventgridPartnerRegistrationTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataAzurermEventgridPartnerRegistration.DataAzurermEventgridPartnerRegistrationTimeouts">DataAzurermEventgridPartnerRegistrationTimeouts</a>

---



