### Modal

```jsx
import Button from "./Button";
import IconHeading from "./IconHeading";
import IconLink from "./IconLink";
import section from "../basic/containers/Section";

<section>
  <button
    type="button"
    className="dg_button dg_modal__open-button"
    data-target="my-accessible-dialog"
  >
    Open Modal
  </button>

  <div
    className="dg_modal hidden dark"
    id="my-accessible-dialog"
    role="dialog"
    aria-labelledby="my-accessible-dialog_label"
    aria-modal="true"
  >
    <div className="text-right">
      <IconLink
        size="tiny"
        href="#my-accessible-dialog-close"
        id="my-accessible-dialog-close"
        type="circle"
        icon="far fa-times"
        description="Close this modal window."
        className="dg_modal__close-button"
      />
    </div>
    <IconHeading
      id="my-accessible-dialog_label"
      text="Heading"
      icon="fas fa-star"
    />
    <p>
      This is content that lives inside of a dialog box. It's fully accessible
      which makes our users happy. And because it's inside of a dialog that pops
      up, it makes our designers and UX people happy as well.
    </p>
  </div>
</section>;
```
For usage guidelines please visit our [modal docs](https://github.com/baltimorecounty/dotgov-javascript/blob/integration/src/components/Modal.md).
