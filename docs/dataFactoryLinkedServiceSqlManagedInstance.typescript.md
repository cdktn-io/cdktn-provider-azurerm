# `dataFactoryLinkedServiceSqlManagedInstance` Submodule <a name="`dataFactoryLinkedServiceSqlManagedInstance` Submodule" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataFactoryLinkedServiceSqlManagedInstance <a name="DataFactoryLinkedServiceSqlManagedInstance" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_factory_linked_service_sql_managed_instance azurerm_data_factory_linked_service_sql_managed_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.Initializer"></a>

```typescript
import { dataFactoryLinkedServiceSqlManagedInstance } from '@cdktn/provider-azurerm'

new dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance(scope: Construct, id: string, config: DataFactoryLinkedServiceSqlManagedInstanceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceConfig">DataFactoryLinkedServiceSqlManagedInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceConfig">DataFactoryLinkedServiceSqlManagedInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.putKeyVaultConnectionString">putKeyVaultConnectionString</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.putKeyVaultPassword">putKeyVaultPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.resetConnectionString">resetConnectionString</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.resetIntegrationRuntimeName">resetIntegrationRuntimeName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.resetKeyVaultConnectionString">resetKeyVaultConnectionString</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.resetKeyVaultPassword">resetKeyVaultPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.resetServicePrincipalId">resetServicePrincipalId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.resetServicePrincipalKey">resetServicePrincipalKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.resetTenant">resetTenant</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putKeyVaultConnectionString` <a name="putKeyVaultConnectionString" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.putKeyVaultConnectionString"></a>

```typescript
public putKeyVaultConnectionString(value: DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionString): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.putKeyVaultConnectionString.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionString">DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionString</a>

---

##### `putKeyVaultPassword` <a name="putKeyVaultPassword" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.putKeyVaultPassword"></a>

```typescript
public putKeyVaultPassword(value: DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPassword): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.putKeyVaultPassword.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPassword">DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPassword</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.putTimeouts"></a>

```typescript
public putTimeouts(value: DataFactoryLinkedServiceSqlManagedInstanceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeouts">DataFactoryLinkedServiceSqlManagedInstanceTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetConnectionString` <a name="resetConnectionString" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.resetConnectionString"></a>

```typescript
public resetConnectionString(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIntegrationRuntimeName` <a name="resetIntegrationRuntimeName" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.resetIntegrationRuntimeName"></a>

```typescript
public resetIntegrationRuntimeName(): void
```

##### `resetKeyVaultConnectionString` <a name="resetKeyVaultConnectionString" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.resetKeyVaultConnectionString"></a>

```typescript
public resetKeyVaultConnectionString(): void
```

##### `resetKeyVaultPassword` <a name="resetKeyVaultPassword" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.resetKeyVaultPassword"></a>

```typescript
public resetKeyVaultPassword(): void
```

##### `resetParameters` <a name="resetParameters" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.resetParameters"></a>

```typescript
public resetParameters(): void
```

##### `resetServicePrincipalId` <a name="resetServicePrincipalId" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.resetServicePrincipalId"></a>

```typescript
public resetServicePrincipalId(): void
```

##### `resetServicePrincipalKey` <a name="resetServicePrincipalKey" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.resetServicePrincipalKey"></a>

```typescript
public resetServicePrincipalKey(): void
```

##### `resetTenant` <a name="resetTenant" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.resetTenant"></a>

```typescript
public resetTenant(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataFactoryLinkedServiceSqlManagedInstance resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.isConstruct"></a>

```typescript
import { dataFactoryLinkedServiceSqlManagedInstance } from '@cdktn/provider-azurerm'

dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.isTerraformElement"></a>

```typescript
import { dataFactoryLinkedServiceSqlManagedInstance } from '@cdktn/provider-azurerm'

dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.isTerraformResource"></a>

```typescript
import { dataFactoryLinkedServiceSqlManagedInstance } from '@cdktn/provider-azurerm'

dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.generateConfigForImport"></a>

```typescript
import { dataFactoryLinkedServiceSqlManagedInstance } from '@cdktn/provider-azurerm'

dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataFactoryLinkedServiceSqlManagedInstance resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataFactoryLinkedServiceSqlManagedInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataFactoryLinkedServiceSqlManagedInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_factory_linked_service_sql_managed_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataFactoryLinkedServiceSqlManagedInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.keyVaultConnectionString">keyVaultConnectionString</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference">DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.keyVaultPassword">keyVaultPassword</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference">DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference">DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.annotationsInput">annotationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.connectionStringInput">connectionStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.dataFactoryIdInput">dataFactoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.integrationRuntimeNameInput">integrationRuntimeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.keyVaultConnectionStringInput">keyVaultConnectionStringInput</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionString">DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionString</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.keyVaultPasswordInput">keyVaultPasswordInput</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPassword">DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.parametersInput">parametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.servicePrincipalIdInput">servicePrincipalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.servicePrincipalKeyInput">servicePrincipalKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.tenantInput">tenantInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeouts">DataFactoryLinkedServiceSqlManagedInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.annotations">annotations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.connectionString">connectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.dataFactoryId">dataFactoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.integrationRuntimeName">integrationRuntimeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.servicePrincipalId">servicePrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.servicePrincipalKey">servicePrincipalKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.tenant">tenant</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `keyVaultConnectionString`<sup>Required</sup> <a name="keyVaultConnectionString" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.keyVaultConnectionString"></a>

```typescript
public readonly keyVaultConnectionString: DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference">DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference</a>

---

##### `keyVaultPassword`<sup>Required</sup> <a name="keyVaultPassword" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.keyVaultPassword"></a>

```typescript
public readonly keyVaultPassword: DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference">DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.timeouts"></a>

```typescript
public readonly timeouts: DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference">DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference</a>

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: string[];
```

- *Type:* string[]

---

##### `connectionStringInput`<sup>Optional</sup> <a name="connectionStringInput" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.connectionStringInput"></a>

```typescript
public readonly connectionStringInput: string;
```

- *Type:* string

---

##### `dataFactoryIdInput`<sup>Optional</sup> <a name="dataFactoryIdInput" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.dataFactoryIdInput"></a>

```typescript
public readonly dataFactoryIdInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `integrationRuntimeNameInput`<sup>Optional</sup> <a name="integrationRuntimeNameInput" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.integrationRuntimeNameInput"></a>

```typescript
public readonly integrationRuntimeNameInput: string;
```

- *Type:* string

---

##### `keyVaultConnectionStringInput`<sup>Optional</sup> <a name="keyVaultConnectionStringInput" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.keyVaultConnectionStringInput"></a>

```typescript
public readonly keyVaultConnectionStringInput: DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionString;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionString">DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionString</a>

---

##### `keyVaultPasswordInput`<sup>Optional</sup> <a name="keyVaultPasswordInput" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.keyVaultPasswordInput"></a>

```typescript
public readonly keyVaultPasswordInput: DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPassword;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPassword">DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPassword</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.parametersInput"></a>

```typescript
public readonly parametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `servicePrincipalIdInput`<sup>Optional</sup> <a name="servicePrincipalIdInput" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.servicePrincipalIdInput"></a>

```typescript
public readonly servicePrincipalIdInput: string;
```

- *Type:* string

---

##### `servicePrincipalKeyInput`<sup>Optional</sup> <a name="servicePrincipalKeyInput" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.servicePrincipalKeyInput"></a>

```typescript
public readonly servicePrincipalKeyInput: string;
```

- *Type:* string

---

##### `tenantInput`<sup>Optional</sup> <a name="tenantInput" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.tenantInput"></a>

```typescript
public readonly tenantInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataFactoryLinkedServiceSqlManagedInstanceTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeouts">DataFactoryLinkedServiceSqlManagedInstanceTimeouts</a>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.annotations"></a>

```typescript
public readonly annotations: string[];
```

- *Type:* string[]

---

##### `connectionString`<sup>Required</sup> <a name="connectionString" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.connectionString"></a>

```typescript
public readonly connectionString: string;
```

- *Type:* string

---

##### `dataFactoryId`<sup>Required</sup> <a name="dataFactoryId" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.dataFactoryId"></a>

```typescript
public readonly dataFactoryId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `integrationRuntimeName`<sup>Required</sup> <a name="integrationRuntimeName" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.integrationRuntimeName"></a>

```typescript
public readonly integrationRuntimeName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `servicePrincipalId`<sup>Required</sup> <a name="servicePrincipalId" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.servicePrincipalId"></a>

```typescript
public readonly servicePrincipalId: string;
```

- *Type:* string

---

##### `servicePrincipalKey`<sup>Required</sup> <a name="servicePrincipalKey" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.servicePrincipalKey"></a>

```typescript
public readonly servicePrincipalKey: string;
```

- *Type:* string

---

##### `tenant`<sup>Required</sup> <a name="tenant" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.tenant"></a>

```typescript
public readonly tenant: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataFactoryLinkedServiceSqlManagedInstanceConfig <a name="DataFactoryLinkedServiceSqlManagedInstanceConfig" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceConfig.Initializer"></a>

```typescript
import { dataFactoryLinkedServiceSqlManagedInstance } from '@cdktn/provider-azurerm'

const dataFactoryLinkedServiceSqlManagedInstanceConfig: dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceConfig.property.dataFactoryId">dataFactoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_factory_linked_service_sql_managed_instance#data_factory_id DataFactoryLinkedServiceSqlManagedInstance#data_factory_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_factory_linked_service_sql_managed_instance#name DataFactoryLinkedServiceSqlManagedInstance#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceConfig.property.annotations">annotations</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_factory_linked_service_sql_managed_instance#annotations DataFactoryLinkedServiceSqlManagedInstance#annotations}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceConfig.property.connectionString">connectionString</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_factory_linked_service_sql_managed_instance#connection_string DataFactoryLinkedServiceSqlManagedInstance#connection_string}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_factory_linked_service_sql_managed_instance#description DataFactoryLinkedServiceSqlManagedInstance#description}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_factory_linked_service_sql_managed_instance#id DataFactoryLinkedServiceSqlManagedInstance#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceConfig.property.integrationRuntimeName">integrationRuntimeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_factory_linked_service_sql_managed_instance#integration_runtime_name DataFactoryLinkedServiceSqlManagedInstance#integration_runtime_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceConfig.property.keyVaultConnectionString">keyVaultConnectionString</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionString">DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionString</a></code> | key_vault_connection_string block. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceConfig.property.keyVaultPassword">keyVaultPassword</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPassword">DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPassword</a></code> | key_vault_password block. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceConfig.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_factory_linked_service_sql_managed_instance#parameters DataFactoryLinkedServiceSqlManagedInstance#parameters}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceConfig.property.servicePrincipalId">servicePrincipalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_factory_linked_service_sql_managed_instance#service_principal_id DataFactoryLinkedServiceSqlManagedInstance#service_principal_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceConfig.property.servicePrincipalKey">servicePrincipalKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_factory_linked_service_sql_managed_instance#service_principal_key DataFactoryLinkedServiceSqlManagedInstance#service_principal_key}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceConfig.property.tenant">tenant</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_factory_linked_service_sql_managed_instance#tenant DataFactoryLinkedServiceSqlManagedInstance#tenant}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeouts">DataFactoryLinkedServiceSqlManagedInstanceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `dataFactoryId`<sup>Required</sup> <a name="dataFactoryId" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceConfig.property.dataFactoryId"></a>

```typescript
public readonly dataFactoryId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_factory_linked_service_sql_managed_instance#data_factory_id DataFactoryLinkedServiceSqlManagedInstance#data_factory_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_factory_linked_service_sql_managed_instance#name DataFactoryLinkedServiceSqlManagedInstance#name}.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceConfig.property.annotations"></a>

```typescript
public readonly annotations: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_factory_linked_service_sql_managed_instance#annotations DataFactoryLinkedServiceSqlManagedInstance#annotations}.

---

##### `connectionString`<sup>Optional</sup> <a name="connectionString" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceConfig.property.connectionString"></a>

```typescript
public readonly connectionString: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_factory_linked_service_sql_managed_instance#connection_string DataFactoryLinkedServiceSqlManagedInstance#connection_string}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_factory_linked_service_sql_managed_instance#description DataFactoryLinkedServiceSqlManagedInstance#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_factory_linked_service_sql_managed_instance#id DataFactoryLinkedServiceSqlManagedInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `integrationRuntimeName`<sup>Optional</sup> <a name="integrationRuntimeName" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceConfig.property.integrationRuntimeName"></a>

```typescript
public readonly integrationRuntimeName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_factory_linked_service_sql_managed_instance#integration_runtime_name DataFactoryLinkedServiceSqlManagedInstance#integration_runtime_name}.

---

##### `keyVaultConnectionString`<sup>Optional</sup> <a name="keyVaultConnectionString" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceConfig.property.keyVaultConnectionString"></a>

```typescript
public readonly keyVaultConnectionString: DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionString;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionString">DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionString</a>

key_vault_connection_string block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_factory_linked_service_sql_managed_instance#key_vault_connection_string DataFactoryLinkedServiceSqlManagedInstance#key_vault_connection_string}

---

##### `keyVaultPassword`<sup>Optional</sup> <a name="keyVaultPassword" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceConfig.property.keyVaultPassword"></a>

```typescript
public readonly keyVaultPassword: DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPassword;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPassword">DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPassword</a>

key_vault_password block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_factory_linked_service_sql_managed_instance#key_vault_password DataFactoryLinkedServiceSqlManagedInstance#key_vault_password}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceConfig.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_factory_linked_service_sql_managed_instance#parameters DataFactoryLinkedServiceSqlManagedInstance#parameters}.

---

##### `servicePrincipalId`<sup>Optional</sup> <a name="servicePrincipalId" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceConfig.property.servicePrincipalId"></a>

```typescript
public readonly servicePrincipalId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_factory_linked_service_sql_managed_instance#service_principal_id DataFactoryLinkedServiceSqlManagedInstance#service_principal_id}.

---

##### `servicePrincipalKey`<sup>Optional</sup> <a name="servicePrincipalKey" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceConfig.property.servicePrincipalKey"></a>

```typescript
public readonly servicePrincipalKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_factory_linked_service_sql_managed_instance#service_principal_key DataFactoryLinkedServiceSqlManagedInstance#service_principal_key}.

---

##### `tenant`<sup>Optional</sup> <a name="tenant" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceConfig.property.tenant"></a>

```typescript
public readonly tenant: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_factory_linked_service_sql_managed_instance#tenant DataFactoryLinkedServiceSqlManagedInstance#tenant}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataFactoryLinkedServiceSqlManagedInstanceTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeouts">DataFactoryLinkedServiceSqlManagedInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_factory_linked_service_sql_managed_instance#timeouts DataFactoryLinkedServiceSqlManagedInstance#timeouts}

---

### DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionString <a name="DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionString" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionString"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionString.Initializer"></a>

```typescript
import { dataFactoryLinkedServiceSqlManagedInstance } from '@cdktn/provider-azurerm'

const dataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionString: dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionString = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionString.property.linkedServiceName">linkedServiceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_factory_linked_service_sql_managed_instance#linked_service_name DataFactoryLinkedServiceSqlManagedInstance#linked_service_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionString.property.secretName">secretName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_factory_linked_service_sql_managed_instance#secret_name DataFactoryLinkedServiceSqlManagedInstance#secret_name}. |

---

##### `linkedServiceName`<sup>Required</sup> <a name="linkedServiceName" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionString.property.linkedServiceName"></a>

```typescript
public readonly linkedServiceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_factory_linked_service_sql_managed_instance#linked_service_name DataFactoryLinkedServiceSqlManagedInstance#linked_service_name}.

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionString.property.secretName"></a>

```typescript
public readonly secretName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_factory_linked_service_sql_managed_instance#secret_name DataFactoryLinkedServiceSqlManagedInstance#secret_name}.

---

### DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPassword <a name="DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPassword" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPassword"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPassword.Initializer"></a>

```typescript
import { dataFactoryLinkedServiceSqlManagedInstance } from '@cdktn/provider-azurerm'

const dataFactoryLinkedServiceSqlManagedInstanceKeyVaultPassword: dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPassword = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPassword.property.linkedServiceName">linkedServiceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_factory_linked_service_sql_managed_instance#linked_service_name DataFactoryLinkedServiceSqlManagedInstance#linked_service_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPassword.property.secretName">secretName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_factory_linked_service_sql_managed_instance#secret_name DataFactoryLinkedServiceSqlManagedInstance#secret_name}. |

---

##### `linkedServiceName`<sup>Required</sup> <a name="linkedServiceName" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPassword.property.linkedServiceName"></a>

```typescript
public readonly linkedServiceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_factory_linked_service_sql_managed_instance#linked_service_name DataFactoryLinkedServiceSqlManagedInstance#linked_service_name}.

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPassword.property.secretName"></a>

```typescript
public readonly secretName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_factory_linked_service_sql_managed_instance#secret_name DataFactoryLinkedServiceSqlManagedInstance#secret_name}.

---

### DataFactoryLinkedServiceSqlManagedInstanceTimeouts <a name="DataFactoryLinkedServiceSqlManagedInstanceTimeouts" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeouts.Initializer"></a>

```typescript
import { dataFactoryLinkedServiceSqlManagedInstance } from '@cdktn/provider-azurerm'

const dataFactoryLinkedServiceSqlManagedInstanceTimeouts: dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_factory_linked_service_sql_managed_instance#create DataFactoryLinkedServiceSqlManagedInstance#create}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_factory_linked_service_sql_managed_instance#delete DataFactoryLinkedServiceSqlManagedInstance#delete}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_factory_linked_service_sql_managed_instance#read DataFactoryLinkedServiceSqlManagedInstance#read}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_factory_linked_service_sql_managed_instance#update DataFactoryLinkedServiceSqlManagedInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_factory_linked_service_sql_managed_instance#create DataFactoryLinkedServiceSqlManagedInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_factory_linked_service_sql_managed_instance#delete DataFactoryLinkedServiceSqlManagedInstance#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_factory_linked_service_sql_managed_instance#read DataFactoryLinkedServiceSqlManagedInstance#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_factory_linked_service_sql_managed_instance#update DataFactoryLinkedServiceSqlManagedInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference <a name="DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.Initializer"></a>

```typescript
import { dataFactoryLinkedServiceSqlManagedInstance } from '@cdktn/provider-azurerm'

new dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.property.linkedServiceNameInput">linkedServiceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.property.secretNameInput">secretNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.property.linkedServiceName">linkedServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.property.secretName">secretName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionString">DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionString</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `linkedServiceNameInput`<sup>Optional</sup> <a name="linkedServiceNameInput" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.property.linkedServiceNameInput"></a>

```typescript
public readonly linkedServiceNameInput: string;
```

- *Type:* string

---

##### `secretNameInput`<sup>Optional</sup> <a name="secretNameInput" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.property.secretNameInput"></a>

```typescript
public readonly secretNameInput: string;
```

- *Type:* string

---

##### `linkedServiceName`<sup>Required</sup> <a name="linkedServiceName" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.property.linkedServiceName"></a>

```typescript
public readonly linkedServiceName: string;
```

- *Type:* string

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.property.secretName"></a>

```typescript
public readonly secretName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionString;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionString">DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionString</a>

---


### DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference <a name="DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.Initializer"></a>

```typescript
import { dataFactoryLinkedServiceSqlManagedInstance } from '@cdktn/provider-azurerm'

new dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.property.linkedServiceNameInput">linkedServiceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.property.secretNameInput">secretNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.property.linkedServiceName">linkedServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.property.secretName">secretName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPassword">DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPassword</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `linkedServiceNameInput`<sup>Optional</sup> <a name="linkedServiceNameInput" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.property.linkedServiceNameInput"></a>

```typescript
public readonly linkedServiceNameInput: string;
```

- *Type:* string

---

##### `secretNameInput`<sup>Optional</sup> <a name="secretNameInput" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.property.secretNameInput"></a>

```typescript
public readonly secretNameInput: string;
```

- *Type:* string

---

##### `linkedServiceName`<sup>Required</sup> <a name="linkedServiceName" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.property.linkedServiceName"></a>

```typescript
public readonly linkedServiceName: string;
```

- *Type:* string

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.property.secretName"></a>

```typescript
public readonly secretName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPassword;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPassword">DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPassword</a>

---


### DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference <a name="DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataFactoryLinkedServiceSqlManagedInstance } from '@cdktn/provider-azurerm'

new dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeouts">DataFactoryLinkedServiceSqlManagedInstanceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataFactoryLinkedServiceSqlManagedInstanceTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeouts">DataFactoryLinkedServiceSqlManagedInstanceTimeouts</a>

---



