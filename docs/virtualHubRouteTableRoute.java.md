# `virtualHubRouteTableRoute` Submodule <a name="`virtualHubRouteTableRoute` Submodule" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VirtualHubRouteTableRouteA <a name="VirtualHubRouteTableRouteA" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/virtual_hub_route_table_route azurerm_virtual_hub_route_table_route}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.Initializer"></a>

```java
import io.cdktn.providers.azurerm.virtual_hub_route_table_route.VirtualHubRouteTableRouteA;

VirtualHubRouteTableRouteA.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .destinations(java.util.List<java.lang.String>)
    .destinationsType(java.lang.String)
    .name(java.lang.String)
    .nextHop(java.lang.String)
    .routeTableId(java.lang.String)
//  .id(java.lang.String)
//  .nextHopType(java.lang.String)
//  .timeouts(VirtualHubRouteTableRouteTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.Initializer.parameter.destinations">destinations</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/virtual_hub_route_table_route#destinations VirtualHubRouteTableRouteA#destinations}. |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.Initializer.parameter.destinationsType">destinationsType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/virtual_hub_route_table_route#destinations_type VirtualHubRouteTableRouteA#destinations_type}. |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/virtual_hub_route_table_route#name VirtualHubRouteTableRouteA#name}. |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.Initializer.parameter.nextHop">nextHop</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/virtual_hub_route_table_route#next_hop VirtualHubRouteTableRouteA#next_hop}. |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.Initializer.parameter.routeTableId">routeTableId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/virtual_hub_route_table_route#route_table_id VirtualHubRouteTableRouteA#route_table_id}. |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/virtual_hub_route_table_route#id VirtualHubRouteTableRouteA#id}. |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.Initializer.parameter.nextHopType">nextHopType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/virtual_hub_route_table_route#next_hop_type VirtualHubRouteTableRouteA#next_hop_type}. |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeouts">VirtualHubRouteTableRouteTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.Initializer.parameter.destinations"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/virtual_hub_route_table_route#destinations VirtualHubRouteTableRouteA#destinations}.

---

##### `destinationsType`<sup>Required</sup> <a name="destinationsType" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.Initializer.parameter.destinationsType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/virtual_hub_route_table_route#destinations_type VirtualHubRouteTableRouteA#destinations_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/virtual_hub_route_table_route#name VirtualHubRouteTableRouteA#name}.

---

##### `nextHop`<sup>Required</sup> <a name="nextHop" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.Initializer.parameter.nextHop"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/virtual_hub_route_table_route#next_hop VirtualHubRouteTableRouteA#next_hop}.

---

##### `routeTableId`<sup>Required</sup> <a name="routeTableId" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.Initializer.parameter.routeTableId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/virtual_hub_route_table_route#route_table_id VirtualHubRouteTableRouteA#route_table_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/virtual_hub_route_table_route#id VirtualHubRouteTableRouteA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `nextHopType`<sup>Optional</sup> <a name="nextHopType" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.Initializer.parameter.nextHopType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/virtual_hub_route_table_route#next_hop_type VirtualHubRouteTableRouteA#next_hop_type}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeouts">VirtualHubRouteTableRouteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/virtual_hub_route_table_route#timeouts VirtualHubRouteTableRouteA#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.resetNextHopType">resetNextHopType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.putTimeouts"></a>

```java
public void putTimeouts(VirtualHubRouteTableRouteTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeouts">VirtualHubRouteTableRouteTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.resetId"></a>

```java
public void resetId()
```

##### `resetNextHopType` <a name="resetNextHopType" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.resetNextHopType"></a>

```java
public void resetNextHopType()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a VirtualHubRouteTableRouteA resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.isConstruct"></a>

```java
import io.cdktn.providers.azurerm.virtual_hub_route_table_route.VirtualHubRouteTableRouteA;

VirtualHubRouteTableRouteA.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.isTerraformElement"></a>

```java
import io.cdktn.providers.azurerm.virtual_hub_route_table_route.VirtualHubRouteTableRouteA;

VirtualHubRouteTableRouteA.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.isTerraformResource"></a>

```java
import io.cdktn.providers.azurerm.virtual_hub_route_table_route.VirtualHubRouteTableRouteA;

VirtualHubRouteTableRouteA.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.generateConfigForImport"></a>

```java
import io.cdktn.providers.azurerm.virtual_hub_route_table_route.VirtualHubRouteTableRouteA;

VirtualHubRouteTableRouteA.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),VirtualHubRouteTableRouteA.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a VirtualHubRouteTableRouteA resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the VirtualHubRouteTableRouteA to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing VirtualHubRouteTableRouteA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/virtual_hub_route_table_route#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the VirtualHubRouteTableRouteA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference">VirtualHubRouteTableRouteTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.destinationsInput">destinationsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.destinationsTypeInput">destinationsTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.nextHopInput">nextHopInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.nextHopTypeInput">nextHopTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.routeTableIdInput">routeTableIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeouts">VirtualHubRouteTableRouteTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.destinations">destinations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.destinationsType">destinationsType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.nextHop">nextHop</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.nextHopType">nextHopType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.routeTableId">routeTableId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.timeouts"></a>

```java
public VirtualHubRouteTableRouteTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference">VirtualHubRouteTableRouteTimeoutsOutputReference</a>

---

##### `destinationsInput`<sup>Optional</sup> <a name="destinationsInput" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.destinationsInput"></a>

```java
public java.util.List<java.lang.String> getDestinationsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `destinationsTypeInput`<sup>Optional</sup> <a name="destinationsTypeInput" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.destinationsTypeInput"></a>

```java
public java.lang.String getDestinationsTypeInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `nextHopInput`<sup>Optional</sup> <a name="nextHopInput" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.nextHopInput"></a>

```java
public java.lang.String getNextHopInput();
```

- *Type:* java.lang.String

---

##### `nextHopTypeInput`<sup>Optional</sup> <a name="nextHopTypeInput" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.nextHopTypeInput"></a>

```java
public java.lang.String getNextHopTypeInput();
```

- *Type:* java.lang.String

---

##### `routeTableIdInput`<sup>Optional</sup> <a name="routeTableIdInput" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.routeTableIdInput"></a>

```java
public java.lang.String getRouteTableIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.timeoutsInput"></a>

```java
public IResolvable|VirtualHubRouteTableRouteTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeouts">VirtualHubRouteTableRouteTimeouts</a>

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.destinations"></a>

```java
public java.util.List<java.lang.String> getDestinations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `destinationsType`<sup>Required</sup> <a name="destinationsType" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.destinationsType"></a>

```java
public java.lang.String getDestinationsType();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nextHop`<sup>Required</sup> <a name="nextHop" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.nextHop"></a>

```java
public java.lang.String getNextHop();
```

- *Type:* java.lang.String

---

##### `nextHopType`<sup>Required</sup> <a name="nextHopType" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.nextHopType"></a>

```java
public java.lang.String getNextHopType();
```

- *Type:* java.lang.String

---

##### `routeTableId`<sup>Required</sup> <a name="routeTableId" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.routeTableId"></a>

```java
public java.lang.String getRouteTableId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### VirtualHubRouteTableRouteAConfig <a name="VirtualHubRouteTableRouteAConfig" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig.Initializer"></a>

```java
import io.cdktn.providers.azurerm.virtual_hub_route_table_route.VirtualHubRouteTableRouteAConfig;

VirtualHubRouteTableRouteAConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .destinations(java.util.List<java.lang.String>)
    .destinationsType(java.lang.String)
    .name(java.lang.String)
    .nextHop(java.lang.String)
    .routeTableId(java.lang.String)
//  .id(java.lang.String)
//  .nextHopType(java.lang.String)
//  .timeouts(VirtualHubRouteTableRouteTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig.property.destinations">destinations</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/virtual_hub_route_table_route#destinations VirtualHubRouteTableRouteA#destinations}. |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig.property.destinationsType">destinationsType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/virtual_hub_route_table_route#destinations_type VirtualHubRouteTableRouteA#destinations_type}. |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/virtual_hub_route_table_route#name VirtualHubRouteTableRouteA#name}. |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig.property.nextHop">nextHop</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/virtual_hub_route_table_route#next_hop VirtualHubRouteTableRouteA#next_hop}. |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig.property.routeTableId">routeTableId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/virtual_hub_route_table_route#route_table_id VirtualHubRouteTableRouteA#route_table_id}. |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/virtual_hub_route_table_route#id VirtualHubRouteTableRouteA#id}. |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig.property.nextHopType">nextHopType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/virtual_hub_route_table_route#next_hop_type VirtualHubRouteTableRouteA#next_hop_type}. |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeouts">VirtualHubRouteTableRouteTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig.property.destinations"></a>

```java
public java.util.List<java.lang.String> getDestinations();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/virtual_hub_route_table_route#destinations VirtualHubRouteTableRouteA#destinations}.

---

##### `destinationsType`<sup>Required</sup> <a name="destinationsType" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig.property.destinationsType"></a>

```java
public java.lang.String getDestinationsType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/virtual_hub_route_table_route#destinations_type VirtualHubRouteTableRouteA#destinations_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/virtual_hub_route_table_route#name VirtualHubRouteTableRouteA#name}.

---

##### `nextHop`<sup>Required</sup> <a name="nextHop" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig.property.nextHop"></a>

```java
public java.lang.String getNextHop();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/virtual_hub_route_table_route#next_hop VirtualHubRouteTableRouteA#next_hop}.

---

##### `routeTableId`<sup>Required</sup> <a name="routeTableId" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig.property.routeTableId"></a>

```java
public java.lang.String getRouteTableId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/virtual_hub_route_table_route#route_table_id VirtualHubRouteTableRouteA#route_table_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/virtual_hub_route_table_route#id VirtualHubRouteTableRouteA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `nextHopType`<sup>Optional</sup> <a name="nextHopType" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig.property.nextHopType"></a>

```java
public java.lang.String getNextHopType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/virtual_hub_route_table_route#next_hop_type VirtualHubRouteTableRouteA#next_hop_type}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig.property.timeouts"></a>

```java
public VirtualHubRouteTableRouteTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeouts">VirtualHubRouteTableRouteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/virtual_hub_route_table_route#timeouts VirtualHubRouteTableRouteA#timeouts}

---

### VirtualHubRouteTableRouteTimeouts <a name="VirtualHubRouteTableRouteTimeouts" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeouts.Initializer"></a>

```java
import io.cdktn.providers.azurerm.virtual_hub_route_table_route.VirtualHubRouteTableRouteTimeouts;

VirtualHubRouteTableRouteTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/virtual_hub_route_table_route#create VirtualHubRouteTableRouteA#create}. |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/virtual_hub_route_table_route#delete VirtualHubRouteTableRouteA#delete}. |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/virtual_hub_route_table_route#read VirtualHubRouteTableRouteA#read}. |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/virtual_hub_route_table_route#update VirtualHubRouteTableRouteA#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/virtual_hub_route_table_route#create VirtualHubRouteTableRouteA#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/virtual_hub_route_table_route#delete VirtualHubRouteTableRouteA#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/virtual_hub_route_table_route#read VirtualHubRouteTableRouteA#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/virtual_hub_route_table_route#update VirtualHubRouteTableRouteA#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VirtualHubRouteTableRouteTimeoutsOutputReference <a name="VirtualHubRouteTableRouteTimeoutsOutputReference" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.virtual_hub_route_table_route.VirtualHubRouteTableRouteTimeoutsOutputReference;

new VirtualHubRouteTableRouteTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeouts">VirtualHubRouteTableRouteTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|VirtualHubRouteTableRouteTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeouts">VirtualHubRouteTableRouteTimeouts</a>

---



