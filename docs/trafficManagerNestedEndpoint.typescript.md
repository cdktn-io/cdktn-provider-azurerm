# `trafficManagerNestedEndpoint` Submodule <a name="`trafficManagerNestedEndpoint` Submodule" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TrafficManagerNestedEndpoint <a name="TrafficManagerNestedEndpoint" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/traffic_manager_nested_endpoint azurerm_traffic_manager_nested_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer"></a>

```typescript
import { trafficManagerNestedEndpoint } from '@cdktn/provider-azurerm'

new trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint(scope: Construct, id: string, config: TrafficManagerNestedEndpointConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig">TrafficManagerNestedEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig">TrafficManagerNestedEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.putCustomHeader">putCustomHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.putSubnet">putSubnet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetCustomHeader">resetCustomHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetEndpointLocation">resetEndpointLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetGeoMappings">resetGeoMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetMinimumRequiredChildEndpointsIpv4">resetMinimumRequiredChildEndpointsIpv4</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetMinimumRequiredChildEndpointsIpv6">resetMinimumRequiredChildEndpointsIpv6</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetSubnet">resetSubnet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetWeight">resetWeight</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCustomHeader` <a name="putCustomHeader" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.putCustomHeader"></a>

```typescript
public putCustomHeader(value: IResolvable | TrafficManagerNestedEndpointCustomHeader[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.putCustomHeader.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeader">TrafficManagerNestedEndpointCustomHeader</a>[]

---

##### `putSubnet` <a name="putSubnet" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.putSubnet"></a>

```typescript
public putSubnet(value: IResolvable | TrafficManagerNestedEndpointSubnet[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.putSubnet.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnet">TrafficManagerNestedEndpointSubnet</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.putTimeouts"></a>

```typescript
public putTimeouts(value: TrafficManagerNestedEndpointTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeouts">TrafficManagerNestedEndpointTimeouts</a>

---

##### `resetCustomHeader` <a name="resetCustomHeader" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetCustomHeader"></a>

```typescript
public resetCustomHeader(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetEndpointLocation` <a name="resetEndpointLocation" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetEndpointLocation"></a>

```typescript
public resetEndpointLocation(): void
```

##### `resetGeoMappings` <a name="resetGeoMappings" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetGeoMappings"></a>

```typescript
public resetGeoMappings(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMinimumRequiredChildEndpointsIpv4` <a name="resetMinimumRequiredChildEndpointsIpv4" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetMinimumRequiredChildEndpointsIpv4"></a>

```typescript
public resetMinimumRequiredChildEndpointsIpv4(): void
```

##### `resetMinimumRequiredChildEndpointsIpv6` <a name="resetMinimumRequiredChildEndpointsIpv6" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetMinimumRequiredChildEndpointsIpv6"></a>

```typescript
public resetMinimumRequiredChildEndpointsIpv6(): void
```

##### `resetPriority` <a name="resetPriority" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetPriority"></a>

```typescript
public resetPriority(): void
```

##### `resetSubnet` <a name="resetSubnet" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetSubnet"></a>

```typescript
public resetSubnet(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetWeight` <a name="resetWeight" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetWeight"></a>

```typescript
public resetWeight(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a TrafficManagerNestedEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.isConstruct"></a>

```typescript
import { trafficManagerNestedEndpoint } from '@cdktn/provider-azurerm'

trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.isTerraformElement"></a>

```typescript
import { trafficManagerNestedEndpoint } from '@cdktn/provider-azurerm'

trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.isTerraformResource"></a>

```typescript
import { trafficManagerNestedEndpoint } from '@cdktn/provider-azurerm'

trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.generateConfigForImport"></a>

```typescript
import { trafficManagerNestedEndpoint } from '@cdktn/provider-azurerm'

trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a TrafficManagerNestedEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TrafficManagerNestedEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TrafficManagerNestedEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/traffic_manager_nested_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the TrafficManagerNestedEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.customHeader">customHeader</a></code> | <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList">TrafficManagerNestedEndpointCustomHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.subnet">subnet</a></code> | <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList">TrafficManagerNestedEndpointSubnetList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference">TrafficManagerNestedEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.customHeaderInput">customHeaderInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeader">TrafficManagerNestedEndpointCustomHeader</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.endpointLocationInput">endpointLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.geoMappingsInput">geoMappingsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.minimumChildEndpointsInput">minimumChildEndpointsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.minimumRequiredChildEndpointsIpv4Input">minimumRequiredChildEndpointsIpv4Input</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.minimumRequiredChildEndpointsIpv6Input">minimumRequiredChildEndpointsIpv6Input</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.profileIdInput">profileIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.subnetInput">subnetInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnet">TrafficManagerNestedEndpointSubnet</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.targetResourceIdInput">targetResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeouts">TrafficManagerNestedEndpointTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.weightInput">weightInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.endpointLocation">endpointLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.geoMappings">geoMappings</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.minimumChildEndpoints">minimumChildEndpoints</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.minimumRequiredChildEndpointsIpv4">minimumRequiredChildEndpointsIpv4</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.minimumRequiredChildEndpointsIpv6">minimumRequiredChildEndpointsIpv6</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.profileId">profileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.targetResourceId">targetResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.weight">weight</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `customHeader`<sup>Required</sup> <a name="customHeader" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.customHeader"></a>

```typescript
public readonly customHeader: TrafficManagerNestedEndpointCustomHeaderList;
```

- *Type:* <a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList">TrafficManagerNestedEndpointCustomHeaderList</a>

---

##### `subnet`<sup>Required</sup> <a name="subnet" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.subnet"></a>

```typescript
public readonly subnet: TrafficManagerNestedEndpointSubnetList;
```

- *Type:* <a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList">TrafficManagerNestedEndpointSubnetList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.timeouts"></a>

```typescript
public readonly timeouts: TrafficManagerNestedEndpointTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference">TrafficManagerNestedEndpointTimeoutsOutputReference</a>

---

##### `customHeaderInput`<sup>Optional</sup> <a name="customHeaderInput" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.customHeaderInput"></a>

```typescript
public readonly customHeaderInput: IResolvable | TrafficManagerNestedEndpointCustomHeader[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeader">TrafficManagerNestedEndpointCustomHeader</a>[]

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `endpointLocationInput`<sup>Optional</sup> <a name="endpointLocationInput" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.endpointLocationInput"></a>

```typescript
public readonly endpointLocationInput: string;
```

- *Type:* string

---

##### `geoMappingsInput`<sup>Optional</sup> <a name="geoMappingsInput" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.geoMappingsInput"></a>

```typescript
public readonly geoMappingsInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `minimumChildEndpointsInput`<sup>Optional</sup> <a name="minimumChildEndpointsInput" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.minimumChildEndpointsInput"></a>

```typescript
public readonly minimumChildEndpointsInput: number;
```

- *Type:* number

---

##### `minimumRequiredChildEndpointsIpv4Input`<sup>Optional</sup> <a name="minimumRequiredChildEndpointsIpv4Input" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.minimumRequiredChildEndpointsIpv4Input"></a>

```typescript
public readonly minimumRequiredChildEndpointsIpv4Input: number;
```

- *Type:* number

---

##### `minimumRequiredChildEndpointsIpv6Input`<sup>Optional</sup> <a name="minimumRequiredChildEndpointsIpv6Input" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.minimumRequiredChildEndpointsIpv6Input"></a>

```typescript
public readonly minimumRequiredChildEndpointsIpv6Input: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `profileIdInput`<sup>Optional</sup> <a name="profileIdInput" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.profileIdInput"></a>

```typescript
public readonly profileIdInput: string;
```

- *Type:* string

---

##### `subnetInput`<sup>Optional</sup> <a name="subnetInput" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.subnetInput"></a>

```typescript
public readonly subnetInput: IResolvable | TrafficManagerNestedEndpointSubnet[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnet">TrafficManagerNestedEndpointSubnet</a>[]

---

##### `targetResourceIdInput`<sup>Optional</sup> <a name="targetResourceIdInput" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.targetResourceIdInput"></a>

```typescript
public readonly targetResourceIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | TrafficManagerNestedEndpointTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeouts">TrafficManagerNestedEndpointTimeouts</a>

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.weightInput"></a>

```typescript
public readonly weightInput: number;
```

- *Type:* number

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `endpointLocation`<sup>Required</sup> <a name="endpointLocation" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.endpointLocation"></a>

```typescript
public readonly endpointLocation: string;
```

- *Type:* string

---

##### `geoMappings`<sup>Required</sup> <a name="geoMappings" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.geoMappings"></a>

```typescript
public readonly geoMappings: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `minimumChildEndpoints`<sup>Required</sup> <a name="minimumChildEndpoints" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.minimumChildEndpoints"></a>

```typescript
public readonly minimumChildEndpoints: number;
```

- *Type:* number

---

##### `minimumRequiredChildEndpointsIpv4`<sup>Required</sup> <a name="minimumRequiredChildEndpointsIpv4" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.minimumRequiredChildEndpointsIpv4"></a>

```typescript
public readonly minimumRequiredChildEndpointsIpv4: number;
```

- *Type:* number

---

##### `minimumRequiredChildEndpointsIpv6`<sup>Required</sup> <a name="minimumRequiredChildEndpointsIpv6" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.minimumRequiredChildEndpointsIpv6"></a>

```typescript
public readonly minimumRequiredChildEndpointsIpv6: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `profileId`<sup>Required</sup> <a name="profileId" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.profileId"></a>

```typescript
public readonly profileId: string;
```

- *Type:* string

---

##### `targetResourceId`<sup>Required</sup> <a name="targetResourceId" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.targetResourceId"></a>

```typescript
public readonly targetResourceId: string;
```

- *Type:* string

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TrafficManagerNestedEndpointConfig <a name="TrafficManagerNestedEndpointConfig" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.Initializer"></a>

```typescript
import { trafficManagerNestedEndpoint } from '@cdktn/provider-azurerm'

const trafficManagerNestedEndpointConfig: trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.minimumChildEndpoints">minimumChildEndpoints</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/traffic_manager_nested_endpoint#minimum_child_endpoints TrafficManagerNestedEndpoint#minimum_child_endpoints}. |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/traffic_manager_nested_endpoint#name TrafficManagerNestedEndpoint#name}. |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.profileId">profileId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/traffic_manager_nested_endpoint#profile_id TrafficManagerNestedEndpoint#profile_id}. |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.targetResourceId">targetResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/traffic_manager_nested_endpoint#target_resource_id TrafficManagerNestedEndpoint#target_resource_id}. |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.customHeader">customHeader</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeader">TrafficManagerNestedEndpointCustomHeader</a>[]</code> | custom_header block. |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/traffic_manager_nested_endpoint#enabled TrafficManagerNestedEndpoint#enabled}. |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.endpointLocation">endpointLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/traffic_manager_nested_endpoint#endpoint_location TrafficManagerNestedEndpoint#endpoint_location}. |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.geoMappings">geoMappings</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/traffic_manager_nested_endpoint#geo_mappings TrafficManagerNestedEndpoint#geo_mappings}. |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/traffic_manager_nested_endpoint#id TrafficManagerNestedEndpoint#id}. |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.minimumRequiredChildEndpointsIpv4">minimumRequiredChildEndpointsIpv4</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/traffic_manager_nested_endpoint#minimum_required_child_endpoints_ipv4 TrafficManagerNestedEndpoint#minimum_required_child_endpoints_ipv4}. |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.minimumRequiredChildEndpointsIpv6">minimumRequiredChildEndpointsIpv6</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/traffic_manager_nested_endpoint#minimum_required_child_endpoints_ipv6 TrafficManagerNestedEndpoint#minimum_required_child_endpoints_ipv6}. |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.priority">priority</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/traffic_manager_nested_endpoint#priority TrafficManagerNestedEndpoint#priority}. |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.subnet">subnet</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnet">TrafficManagerNestedEndpointSubnet</a>[]</code> | subnet block. |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeouts">TrafficManagerNestedEndpointTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.weight">weight</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/traffic_manager_nested_endpoint#weight TrafficManagerNestedEndpoint#weight}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `minimumChildEndpoints`<sup>Required</sup> <a name="minimumChildEndpoints" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.minimumChildEndpoints"></a>

```typescript
public readonly minimumChildEndpoints: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/traffic_manager_nested_endpoint#minimum_child_endpoints TrafficManagerNestedEndpoint#minimum_child_endpoints}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/traffic_manager_nested_endpoint#name TrafficManagerNestedEndpoint#name}.

---

##### `profileId`<sup>Required</sup> <a name="profileId" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.profileId"></a>

```typescript
public readonly profileId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/traffic_manager_nested_endpoint#profile_id TrafficManagerNestedEndpoint#profile_id}.

---

##### `targetResourceId`<sup>Required</sup> <a name="targetResourceId" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.targetResourceId"></a>

```typescript
public readonly targetResourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/traffic_manager_nested_endpoint#target_resource_id TrafficManagerNestedEndpoint#target_resource_id}.

---

##### `customHeader`<sup>Optional</sup> <a name="customHeader" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.customHeader"></a>

```typescript
public readonly customHeader: IResolvable | TrafficManagerNestedEndpointCustomHeader[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeader">TrafficManagerNestedEndpointCustomHeader</a>[]

custom_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/traffic_manager_nested_endpoint#custom_header TrafficManagerNestedEndpoint#custom_header}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/traffic_manager_nested_endpoint#enabled TrafficManagerNestedEndpoint#enabled}.

---

##### `endpointLocation`<sup>Optional</sup> <a name="endpointLocation" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.endpointLocation"></a>

```typescript
public readonly endpointLocation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/traffic_manager_nested_endpoint#endpoint_location TrafficManagerNestedEndpoint#endpoint_location}.

---

##### `geoMappings`<sup>Optional</sup> <a name="geoMappings" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.geoMappings"></a>

```typescript
public readonly geoMappings: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/traffic_manager_nested_endpoint#geo_mappings TrafficManagerNestedEndpoint#geo_mappings}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/traffic_manager_nested_endpoint#id TrafficManagerNestedEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `minimumRequiredChildEndpointsIpv4`<sup>Optional</sup> <a name="minimumRequiredChildEndpointsIpv4" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.minimumRequiredChildEndpointsIpv4"></a>

```typescript
public readonly minimumRequiredChildEndpointsIpv4: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/traffic_manager_nested_endpoint#minimum_required_child_endpoints_ipv4 TrafficManagerNestedEndpoint#minimum_required_child_endpoints_ipv4}.

---

##### `minimumRequiredChildEndpointsIpv6`<sup>Optional</sup> <a name="minimumRequiredChildEndpointsIpv6" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.minimumRequiredChildEndpointsIpv6"></a>

```typescript
public readonly minimumRequiredChildEndpointsIpv6: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/traffic_manager_nested_endpoint#minimum_required_child_endpoints_ipv6 TrafficManagerNestedEndpoint#minimum_required_child_endpoints_ipv6}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/traffic_manager_nested_endpoint#priority TrafficManagerNestedEndpoint#priority}.

---

##### `subnet`<sup>Optional</sup> <a name="subnet" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.subnet"></a>

```typescript
public readonly subnet: IResolvable | TrafficManagerNestedEndpointSubnet[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnet">TrafficManagerNestedEndpointSubnet</a>[]

subnet block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/traffic_manager_nested_endpoint#subnet TrafficManagerNestedEndpoint#subnet}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.timeouts"></a>

```typescript
public readonly timeouts: TrafficManagerNestedEndpointTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeouts">TrafficManagerNestedEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/traffic_manager_nested_endpoint#timeouts TrafficManagerNestedEndpoint#timeouts}

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/traffic_manager_nested_endpoint#weight TrafficManagerNestedEndpoint#weight}.

---

### TrafficManagerNestedEndpointCustomHeader <a name="TrafficManagerNestedEndpointCustomHeader" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeader"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeader.Initializer"></a>

```typescript
import { trafficManagerNestedEndpoint } from '@cdktn/provider-azurerm'

const trafficManagerNestedEndpointCustomHeader: trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeader = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeader.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/traffic_manager_nested_endpoint#name TrafficManagerNestedEndpoint#name}. |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeader.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/traffic_manager_nested_endpoint#value TrafficManagerNestedEndpoint#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeader.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/traffic_manager_nested_endpoint#name TrafficManagerNestedEndpoint#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeader.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/traffic_manager_nested_endpoint#value TrafficManagerNestedEndpoint#value}.

---

### TrafficManagerNestedEndpointSubnet <a name="TrafficManagerNestedEndpointSubnet" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnet"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnet.Initializer"></a>

```typescript
import { trafficManagerNestedEndpoint } from '@cdktn/provider-azurerm'

const trafficManagerNestedEndpointSubnet: trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnet = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnet.property.first">first</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/traffic_manager_nested_endpoint#first TrafficManagerNestedEndpoint#first}. |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnet.property.last">last</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/traffic_manager_nested_endpoint#last TrafficManagerNestedEndpoint#last}. |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnet.property.scope">scope</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/traffic_manager_nested_endpoint#scope TrafficManagerNestedEndpoint#scope}. |

---

##### `first`<sup>Required</sup> <a name="first" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnet.property.first"></a>

```typescript
public readonly first: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/traffic_manager_nested_endpoint#first TrafficManagerNestedEndpoint#first}.

---

##### `last`<sup>Optional</sup> <a name="last" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnet.property.last"></a>

```typescript
public readonly last: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/traffic_manager_nested_endpoint#last TrafficManagerNestedEndpoint#last}.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnet.property.scope"></a>

```typescript
public readonly scope: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/traffic_manager_nested_endpoint#scope TrafficManagerNestedEndpoint#scope}.

---

### TrafficManagerNestedEndpointTimeouts <a name="TrafficManagerNestedEndpointTimeouts" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeouts.Initializer"></a>

```typescript
import { trafficManagerNestedEndpoint } from '@cdktn/provider-azurerm'

const trafficManagerNestedEndpointTimeouts: trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/traffic_manager_nested_endpoint#create TrafficManagerNestedEndpoint#create}. |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/traffic_manager_nested_endpoint#delete TrafficManagerNestedEndpoint#delete}. |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/traffic_manager_nested_endpoint#read TrafficManagerNestedEndpoint#read}. |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/traffic_manager_nested_endpoint#update TrafficManagerNestedEndpoint#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/traffic_manager_nested_endpoint#create TrafficManagerNestedEndpoint#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/traffic_manager_nested_endpoint#delete TrafficManagerNestedEndpoint#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/traffic_manager_nested_endpoint#read TrafficManagerNestedEndpoint#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/traffic_manager_nested_endpoint#update TrafficManagerNestedEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### TrafficManagerNestedEndpointCustomHeaderList <a name="TrafficManagerNestedEndpointCustomHeaderList" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.Initializer"></a>

```typescript
import { trafficManagerNestedEndpoint } from '@cdktn/provider-azurerm'

new trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.get"></a>

```typescript
public get(index: number): TrafficManagerNestedEndpointCustomHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeader">TrafficManagerNestedEndpointCustomHeader</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TrafficManagerNestedEndpointCustomHeader[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeader">TrafficManagerNestedEndpointCustomHeader</a>[]

---


### TrafficManagerNestedEndpointCustomHeaderOutputReference <a name="TrafficManagerNestedEndpointCustomHeaderOutputReference" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.Initializer"></a>

```typescript
import { trafficManagerNestedEndpoint } from '@cdktn/provider-azurerm'

new trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeader">TrafficManagerNestedEndpointCustomHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TrafficManagerNestedEndpointCustomHeader;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeader">TrafficManagerNestedEndpointCustomHeader</a>

---


### TrafficManagerNestedEndpointSubnetList <a name="TrafficManagerNestedEndpointSubnetList" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.Initializer"></a>

```typescript
import { trafficManagerNestedEndpoint } from '@cdktn/provider-azurerm'

new trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.get"></a>

```typescript
public get(index: number): TrafficManagerNestedEndpointSubnetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnet">TrafficManagerNestedEndpointSubnet</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TrafficManagerNestedEndpointSubnet[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnet">TrafficManagerNestedEndpointSubnet</a>[]

---


### TrafficManagerNestedEndpointSubnetOutputReference <a name="TrafficManagerNestedEndpointSubnetOutputReference" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.Initializer"></a>

```typescript
import { trafficManagerNestedEndpoint } from '@cdktn/provider-azurerm'

new trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.resetLast">resetLast</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.resetScope">resetScope</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLast` <a name="resetLast" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.resetLast"></a>

```typescript
public resetLast(): void
```

##### `resetScope` <a name="resetScope" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.resetScope"></a>

```typescript
public resetScope(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.property.firstInput">firstInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.property.lastInput">lastInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.property.scopeInput">scopeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.property.first">first</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.property.last">last</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.property.scope">scope</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnet">TrafficManagerNestedEndpointSubnet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `firstInput`<sup>Optional</sup> <a name="firstInput" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.property.firstInput"></a>

```typescript
public readonly firstInput: string;
```

- *Type:* string

---

##### `lastInput`<sup>Optional</sup> <a name="lastInput" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.property.lastInput"></a>

```typescript
public readonly lastInput: string;
```

- *Type:* string

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.property.scopeInput"></a>

```typescript
public readonly scopeInput: number;
```

- *Type:* number

---

##### `first`<sup>Required</sup> <a name="first" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.property.first"></a>

```typescript
public readonly first: string;
```

- *Type:* string

---

##### `last`<sup>Required</sup> <a name="last" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.property.last"></a>

```typescript
public readonly last: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.property.scope"></a>

```typescript
public readonly scope: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TrafficManagerNestedEndpointSubnet;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnet">TrafficManagerNestedEndpointSubnet</a>

---


### TrafficManagerNestedEndpointTimeoutsOutputReference <a name="TrafficManagerNestedEndpointTimeoutsOutputReference" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.Initializer"></a>

```typescript
import { trafficManagerNestedEndpoint } from '@cdktn/provider-azurerm'

new trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeouts">TrafficManagerNestedEndpointTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TrafficManagerNestedEndpointTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeouts">TrafficManagerNestedEndpointTimeouts</a>

---



