### Default Icon Heading

```jsx
<section  style={{ padding: '15px' }}>
    <IconHeading text="Latest Headlines" icon="fas fa-star" />
</section>
```

### H1 Icon Heading

```jsx
<section class="dg_section" style={{ padding: '15px' }}>
    <IconHeading level="1" text="Latest Headlines" icon="fas fa-star" />
</section>
```

### Icon Heading on a Light Background

```jsx
<section class="dg_section light" style={{ padding: '15px' }}>
    <IconHeading text="Latest Headlines" icon="fas fa-star" />
</section>
```

### Icon Heading on a Dark Background

```jsx
<section class="dg_section dark" style={{ padding: '15px' }}>
    <IconHeading text="Latest Headlines" icon="fas fa-star" />
</section>
```

Html Snippet:

```html
<div class="dg_icon-heading__container">
    <i class="fas fa-star" aria-hidden="true"></i>
    <h2 class="dg_icon-heading">Latest Headlines</h2>
</div>
```

### Icon Heading with Image

```jsx
<section  style={{ padding: '15px' }}>
    <IconHeading text="Latest Headlines" image="http://staging.baltimorecountymd.gov/sebin/h/i/seal-color-74.png" />
</section>
```

Html Snippet:

```html
<div class="dg_icon-heading__container">
    <div class="dg_icon-heading__image-container">
        <img src="http://staging.baltimorecountymd.gov/sebin/h/i/seal-color-74.png">
    </div>
    <h2 class="dg_icon-heading">Latest Headlines</h2>
</div>
```