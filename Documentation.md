# ReactFrost Documentation

> [!note]  
> All Components accept React Events unless explicitly mentioned otherwise in the params.

> [!warning]
> All styles that have been listed here are tested to work without breaking the UI Components/Pages. You *can* use other styling properties but it is not recommended as they have not been tested and might cause the element to be unreliable.

## Button

Params:

1. `id` : `string` → ID of the Component
2. `label` : `string` → Takes the text to be displayed inside the button
3. `design`: `string` → Accepts a string with either `glossy` or `flat` . 
4. `type` : `string` → (Only works for `3D` mode) Accepts a string with either `normal` or `cancel`.
5. `className` : `string` → Takes a CSS class.
6. `style` : `Object` → Takes an object which overrides certain in-built CSS in the component.
    
    The keys are :
    
    1. `position`
    2. `height`
    3. `width`
    4. `minWidth`
    5. `minHeight`
    6. `backgroundColor`  (only if type is `flat`)
    7. `right`
    8. `left`
    9. `top`
    10. `bottom`
    11. `transform`
    12. `color`                   (only if type is `flat`)
    13. `borderColor`         (only if type is `flat`)

## Dialog

Params:

1. `id` : `string` → ID of the Component
2. `title` : `string` → Takes the text to be displayed in the title
3. `body` : `string` → Takes the text to be displayed in the body
4. `buttons` : `Button Object Array` → Takes an array of Button Objects to be displayed in the dialog box.
5. `mode` : `string` → Takes a string, `light` or `dark` and sets whether the component needs to be rendered in light mode or dark mode.
6. `className` : `string` → Takes a CSS class.
7. `style` : `Object` → Takes an object which overrides certain in-built CSS in the component.
    
    The keys are :
    
    1. `position`
    2. `height`
    3. `width`
    4. `minWidth`
    5. `minHeight`
    6. `right`
    7. `left`
    8. `top`
    9. `bottom`
    10. `transform`

## Slider

Params:

1. `id` : `string` → ID of the Component
2. `min` : `number` → Minimum value of slider.
3. `max` : `number` → Maximum value of slider.
4. `step` : `number` → Minimum value that the slider can increase.
5. `type` : string → Accepts either `thin` or `broad`.
6. `className` : `string` → Takes a CSS class.
7. `style` : Object → Takes an object which overrides certain in-built CSS in the component
    
    The keys are: 
    
    1. `width`
    2. `minWidth`
    3. `position`
    4. `right`
    5. `left`
    6. `top`
    7. `bottom`
    8. `transform`

## Radio Button Group

Params:

1. `id` : `string` → ID of the Component
2. `onInteracted()` : `Function` → Callback function that gives details of the selected radio button, includes parameters `value`, `label` & `index`. This replaces the default React Events `onChange()` and `onSubmit()`
3. `className` : `string` → Takes a CSS class.
4. `style` : Object → Takes an object which overrides certain in-built CSS in the component
    
    The keys are: 
    
    1. `width`
    2. `minWidth`
    3. `height`
    4. `minHeight`
    5. `position`
    6. `right`
    7. `left`
    8. `top`
    9. `bottom`
    10. `transform`
    11. `color`          ( Sets color of label )

## Pane

Params:

1. `id` : `string` → ID of the Component
2. `mode` : `string` → Takes a string, `light` or `dark` and sets whether the component needs to be rendered in light mode or dark mode.
3. `className` : `string` → Takes a CSS class.
4. `style` : `Object` → Takes an object which overrides certain in-built CSS in the component.
    
    The keys are :
    
    1. `position`
    2. `display`
    3. `height`
    4. `width`
    5. `minWidth`
    6. `minHeight`
    7. `right`
    8. `left`
    9. `top`
    10. `bottom`
    11. `transform`
    12. `padding`
    13. `text-align`
    14. `font-family`
    15. `font-weight`
    16. `font-size`
    17. `font-weight`
    18. `line-height`
    19. `list-style`
    20. `overflow`
    21. `margin`
    22. `flex-direction`
    23. `flex-wrap`
    24. `justify-content`
    25. `align-content`
    26. `align-items`
    27. `flex`
    28. `grid-template-columns`
    29. `grid-template-rows`
    30. `grid-template-areas`
    31. `grid-gap`
    32. `grid-column-gap`
    33. `grid-row-gap`
    34. `grid-auto-columns`
    35. `grid-auto-rows`
    36. `grid-auto-flow`
    37. `grid`
    38. `border-collapse`
    39. `border-spacing`
    40. `caption-side`
    41. `empty-cells`
    42. `table-layout`
    43. `cursor`

## Switcher

<aside>
⚠️ Please do NOT adjust height or width of this component. The CSS should be only for positioning this component.

</aside>

Params: 

1. `id` : `string` → ID of the Component
2. `mode` : `string` → Takes a string, `light` or `dark` and sets whether the component needs to be rendered in light mode or dark mode.
3. `className` : `string` → Takes a CSS class.
4. `onSwitch()` : `Function` → Gives the state of the switcher in either `true` or `false` in the param `switchValue`. Replaces the default React events `onChange()` and `onClick()`.
5. `defaultState` : `boolean` → Defines the state of the switcher on load.
6. `style` : `Object` → Takes an object which overrides certain in-built CSS in the component.
    
    The keys are :
    
    1. `position`
    2. `left`
    3. `right`
    4. `top`
    5. `bottom`
    6. `margin`
    7. `margin-left`
    8. `margin-right`
    9. `margin-top`
    10. `margin-bottom`

## Loader

### Bar

<aside>
⚠️ Please do NOT adjust height or width of this component. The CSS should be only for positioning this component.

</aside>

Params: 

1. `id` : `string` → ID of the Component
2. `mode` : `string` → Takes a string, `light` or `dark` and sets whether the component needs to be rendered in light mode or dark mode.
3. `className` : `string` → Takes a CSS class.
4. `completionPercentage` : `number` → Defines the percentage of the loading.
5. `style` : `Object` → Takes an object which overrides certain in-built CSS in the component.
    
    The keys are :
    
    1. `position`
    2. `left`
    3. `right`
    4. `top`
    5. `bottom`
    6. `margin`
    7. `margin-left`
    8. `margin-right`
    9. `margin-top`
    10. `margin-bottom`

## Input Components

<aside>
⚠️ These components are supposed to be embedded in a Pane or in any other custom page with a layout. Please do NOT use `position : absolute`

</aside>

### Alphanumeric/Password Field

Params:

1. `id` : `string` → ID of the Component
2. `type` : `string` → Takes the type of the component, `text`, `password` and `number`.
3. `responsive` : `boolean` → Controls whether the text field gives text inputted into it either live or on pressing the `ENTER` key.
4. `validator` : `Object` → This can be used when you have a `password` field. This object contains two keys: 
    1. `charLimit` : `number` → The number of characters you want to allow before validation is run.
    2. `correctString` : `string` → Your correct password.
5. `onEdited()` : `Function` → Gives the value inside the text field, in the param `text`. Replaces the following React Events `onChange()`, `onKeyPress()`, `onKeyDown()`, `onKeyUp()` & `onInput()`.
6. `placeholder` : `string` → Takes the placeholder for the text field.
7. `className` : `string` → Takes a CSS class.
8. `style` : `Object` → Takes an object which overrides certain in-built CSS in the component.
    
    The keys are :
    
    1. `position`
    2. `text-align`
    3. `font-family`
    4. `line-height`
    5. `font-family`
    6. `font-weight`
    7. `font-size`
    8. `cursor`

### Search Field

Params:

1. `id` : `string` → ID of the Component.
2. `searchItems` : `string[]` → Takes an array of strings and searches through it.
3. `onEdited()` : `Function` → Gives the value inside the text field, in the param `text`. Replaces the following React Events `onChange()`, `onKeyPress()`, `onKeyDown()`, `onKeyUp()` & `onInput()`.
4. `placeholder` : `string` → Takes the placeholder for the text field.
5. `className` : `string` → Takes a CSS class.
6. `style` : `Object` → Takes an object which overrides certain in-built CSS in the component.
    
    The keys are :
    
    1. `position`
    2. `text-align`
    3. `font-family`
    4. `line-height`
    5. `font-family`
    6. `font-weight`
    7. `font-size`
    8. `cursor`
