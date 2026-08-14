# `ephemeralAzurermKeyVaultCertificate` Submodule <a name="`ephemeralAzurermKeyVaultCertificate` Submodule" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralAzurermKeyVaultCertificate <a name="EphemeralAzurermKeyVaultCertificate" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/ephemeral-resources/key_vault_certificate azurerm_key_vault_certificate}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.Initializer"></a>

```python
from cdktn_provider_azurerm import ephemeral_azurerm_key_vault_certificate

ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate(
  scope: Construct,
  id: str,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformEphemeralResourceLifecycle = None,
  provider: TerraformProvider = None,
  key_vault_id: str,
  name: str,
  version: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.Initializer.parameter.keyVaultId">key_vault_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/ephemeral-resources/key_vault_certificate#key_vault_id EphemeralAzurermKeyVaultCertificate#key_vault_id}. |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/ephemeral-resources/key_vault_certificate#name EphemeralAzurermKeyVaultCertificate#name}. |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.Initializer.parameter.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/ephemeral-resources/key_vault_certificate#version EphemeralAzurermKeyVaultCertificate#version}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `key_vault_id`<sup>Required</sup> <a name="key_vault_id" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.Initializer.parameter.keyVaultId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/ephemeral-resources/key_vault_certificate#key_vault_id EphemeralAzurermKeyVaultCertificate#key_vault_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/ephemeral-resources/key_vault_certificate#name EphemeralAzurermKeyVaultCertificate#name}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.Initializer.parameter.version"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/ephemeral-resources/key_vault_certificate#version EphemeralAzurermKeyVaultCertificate#version}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.toTerraform">to_terraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.resetVersion">reset_version</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this ephemeral resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_version` <a name="reset_version" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.resetVersion"></a>

```python
def reset_version() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.isTerraformEphemeralResource">is_terraform_ephemeral_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.isConstruct"></a>

```python
from cdktn_provider_azurerm import ephemeral_azurerm_key_vault_certificate

ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.is_construct(
  x: typing.Any
)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.isTerraformElement"></a>

```python
from cdktn_provider_azurerm import ephemeral_azurerm_key_vault_certificate

ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_ephemeral_resource` <a name="is_terraform_ephemeral_resource" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.isTerraformEphemeralResource"></a>

```python
from cdktn_provider_azurerm import ephemeral_azurerm_key_vault_certificate

ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.is_terraform_ephemeral_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.certificateCount">certificate_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.expirationDate">expiration_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.hex">hex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.notBeforeDate">not_before_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.pem">pem</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.keyVaultIdInput">key_vault_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.keyVaultId">key_vault_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.version">version</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.lifecycle"></a>

```python
lifecycle: TerraformEphemeralResourceLifecycle
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `certificate_count`<sup>Required</sup> <a name="certificate_count" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.certificateCount"></a>

```python
certificate_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `expiration_date`<sup>Required</sup> <a name="expiration_date" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.expirationDate"></a>

```python
expiration_date: str
```

- *Type:* str

---

##### `hex`<sup>Required</sup> <a name="hex" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.hex"></a>

```python
hex: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `not_before_date`<sup>Required</sup> <a name="not_before_date" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.notBeforeDate"></a>

```python
not_before_date: str
```

- *Type:* str

---

##### `pem`<sup>Required</sup> <a name="pem" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.pem"></a>

```python
pem: str
```

- *Type:* str

---

##### `key_vault_id_input`<sup>Optional</sup> <a name="key_vault_id_input" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.keyVaultIdInput"></a>

```python
key_vault_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `key_vault_id`<sup>Required</sup> <a name="key_vault_id" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.keyVaultId"></a>

```python
key_vault_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.version"></a>

```python
version: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralAzurermKeyVaultCertificateConfig <a name="EphemeralAzurermKeyVaultCertificateConfig" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificateConfig.Initializer"></a>

```python
from cdktn_provider_azurerm import ephemeral_azurerm_key_vault_certificate

ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificateConfig(
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformEphemeralResourceLifecycle = None,
  provider: TerraformProvider = None,
  key_vault_id: str,
  name: str,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificateConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificateConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificateConfig.property.keyVaultId">key_vault_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/ephemeral-resources/key_vault_certificate#key_vault_id EphemeralAzurermKeyVaultCertificate#key_vault_id}. |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificateConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/ephemeral-resources/key_vault_certificate#name EphemeralAzurermKeyVaultCertificate#name}. |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificateConfig.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/ephemeral-resources/key_vault_certificate#version EphemeralAzurermKeyVaultCertificate#version}. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificateConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformEphemeralResourceLifecycle
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `key_vault_id`<sup>Required</sup> <a name="key_vault_id" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificateConfig.property.keyVaultId"></a>

```python
key_vault_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/ephemeral-resources/key_vault_certificate#key_vault_id EphemeralAzurermKeyVaultCertificate#key_vault_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificateConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/ephemeral-resources/key_vault_certificate#name EphemeralAzurermKeyVaultCertificate#name}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultCertificate.EphemeralAzurermKeyVaultCertificateConfig.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/ephemeral-resources/key_vault_certificate#version EphemeralAzurermKeyVaultCertificate#version}.

---



