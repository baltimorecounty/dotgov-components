```jsx
const collapseItems = [
  {
    id: 1,
    header: "Accordion Item #1",
    subheader: "This is a subheader",
    content: <h2>Test Heading Level 2</h2>
  },
  {
    id: 2,
    header: "Accordion Item #2",
    subheader: "",
    content: (
      <p>
        Lorem ipsum dolor amet live-edge laborum ullamco hot chicken do,{" "}
        <a href="#">tilde sint dolore anim enamel</a> pin tumeric try-hard yr
        echo park thundercats. Enim next level keffiyeh ramps.
      </p>
    )
  },
  {
    id: 3,
    header: "Accordion Item #3",
    subHeader: "",
    content: (
      <ul>
        <li>Vexillologist</li>
        <li>Etsy four dollar toast</li>
        <li>
          Gochujang minim pitchfork cliche sriracha distillery taiyaki et hoodie
          copper mug ethical normcore labore ennui
        </li>
      </ul>
    )
  },
  {
    id: 4,
    header: "Accordion Item #4",
    subheader: "",
    content: (
      <img
        width="300"
        height="200"
        alt="Stuff goes here"
        src="//baltimorecountymd.gov/sebin/t/t/homepage-county-executive.jpg"
        border="0"
        vspace="0"
        hspace="0"
      />
    )
  },
  {
    id: 5,
    header: "Accordion Item #5",
    subheader: "",
    content: <h3>90's prism seitan</h3>
  },
  {
    id: 6,
    header: "Accordion Item #6",
    subheader: "",
    content: (
      <p>
        <strong>Gluten-free, green juice four dollar toast</strong> hashtag
        quinoa occupy tofu chia officia banh mi.
      </p>
    )
  },
  {
    id: 7,
    header: "Accordion Item #7",
    subheader: "",
    content: <h3>Plaid knausgaard slow-carb</h3>
  },
  {
    id: 8,
    header: "Accordion Item #8",
    subheader: "",
    content: (
      <p>
        Pour-over sartorial fashion axe, qui normcore biodiesel post-ironic.
        Taxidermy paleo thundercats air plant brunch whatever. Hell of
        vexillologist semiotics, portland hella tattooed beard celiac eu craft
        beer. Gentrify farm-to-table humblebrag anim knausgaard. Sint organic
        voluptate, craft beer.
      </p>
    )
  },
  {
    id: 9,
    header: "Accordion Item #9",
    subheader: "",
    content: <p>Jean shorts plaid food truck austin leggings fashion axe.</p>
  },
  {
    id: 10,
    header: "Accordion Item #10",
    subheader: "",
    content: (
      <button type="button" class="dg_button">
        Click Me
      </button>
    )
  }
];

import Section from "../basic/containers/Section";
<Section>
  <Accordion collapseItems={collapseItems} />
</Section>;
```

### Accordion Dark

```jsx
const collapseItems = [
  {
    id: 1,
    header: "Accordion Item #1",
    subheader: "This is a subheader",
    content: <h2>Test Heading Level 2</h2>
  },
  {
    id: 2,
    header: "Accordion Item #2",
    subheader: "",
    content: (
      <p>
        Lorem ipsum dolor amet live-edge laborum ullamco hot chicken do,{" "}
        <a href="#">tilde sint dolore anim enamel</a> pin tumeric try-hard yr
        echo park thundercats. Enim next level keffiyeh ramps.
      </p>
    )
  },
  {
    id: 3,
    header: "Accordion Item #3",
    subHeader: "",
    content: (
      <ul>
        <li>Vexillologist</li>
        <li>Etsy four dollar toast</li>
        <li>
          Gochujang minim pitchfork cliche sriracha distillery taiyaki et hoodie
          copper mug ethical normcore labore ennui
        </li>
      </ul>
    )
  },
  {
    id: 4,
    header: "Accordion Item #4",
    subheader: "",
    content: (
      <img
        width="300"
        height="200"
        alt="Stuff goes here"
        src="//baltimorecountymd.gov/sebin/t/t/homepage-county-executive.jpg"
        border="0"
        vspace="0"
        hspace="0"
      />
    )
  },
  {
    id: 5,
    header: "Accordion Item #5",
    subheader: "",
    content: <h3>90's prism seitan</h3>
  },
  {
    id: 6,
    header: "Accordion Item #6",
    subheader: "",
    content: (
      <p>
        <strong>Gluten-free, green juice four dollar toast</strong> hashtag
        quinoa occupy tofu chia officia banh mi.
      </p>
    )
  },
  {
    id: 7,
    header: "Accordion Item #7",
    subheader: "",
    content: <h3>Plaid knausgaard slow-carb</h3>
  },
  {
    id: 8,
    header: "Accordion Item #8",
    subheader: "",
    content: (
      <p>
        Pour-over sartorial fashion axe, qui normcore biodiesel post-ironic.
        Taxidermy paleo thundercats air plant brunch whatever. Hell of
        vexillologist semiotics, portland hella tattooed beard celiac eu craft
        beer. Gentrify farm-to-table humblebrag anim knausgaard. Sint organic
        voluptate, craft beer.
      </p>
    )
  },
  {
    id: 9,
    header: "Accordion Item #9",
    subheader: "",
    content: <p>Jean shorts plaid food truck austin leggings fashion axe.</p>
  },
  {
    id: 10,
    header: "Accordion Item #10",
    subheader: "",
    content: (
      <button type="button" class="dg_button">
        Click Me
      </button>
    )
  }
];

import Section from "../basic/containers/Section";
<Section className="dark">
  <Accordion collapseItems={collapseItems} />
</Section>;
```

Html Snippet:

```html
<!--Remove/Add class canHaveMultiplePanelsOpen to toggle all can be opened together or one at a time open-->
<div class="dg_accordion canHaveMultiplePanelsOpen" id="accordionExample1">
  <button class="dg_allitems dg_button-link" id="menuActionButton1">
    Open All
  </button>
  <div class="collapsed dg_accordion__collapsible">
    <button
      class="dg_accordion-btn"
      type="button"
      data-toggle="collapse"
      data-target="#collapseOne1"
      aria-expanded="true"
      aria-controls="collapseOne"
      style="text-align: left; width:100%;"
    >
      <span class="dg_accordion_buttontext-holder">
        Collapsible Group Item #1
      </span>
    </button>
    <div
      id="collapseOne1"
      class="multi-collapse collapse"
      data-parent="#accordionExample1"
    >
      <div class="dg_accordion-item-body">
        occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt
        you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
  <div class="collapsed dg_accordion__collapsible">
    <button
      class="dg_accordion-btn"
      type="button"
      data-toggle="collapse"
      data-target="#collapseTwo2"
      aria-expanded="false"
      aria-controls="collapseTwo"
      style="text-align: left; width: 100%;"
    >
      <span class="dg_accordion_buttontext-holder">
        Collapsible Group Item #2
      </span>
    </button>
    <div>
      This is a sub header
    </div>
    <div
      id="collapseTwo2"
      class="multi-collapse collapse"
      data-parent="#accordionExample1"
    >
      <div class="dg_accordion-item-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
      </div>
    </div>
  </div>
  <div class="collapsed dg_accordion__collapsible">
    <button
      class="dg_accordion-btn"
      type="button"
      data-toggle="collapse"
      data-target="#collapseThree3"
      aria-expanded="false"
      aria-controls="collapseThree"
      style="text-align: left; width:100%;"
    >
      <span class="dg_accordion_buttontext-holder">
        Collapsible Group Item #3
      </span>
    </button>
    <div
      id="collapseThree3"
      class="multi-collapse collapse"
      data-parent="#accordionExample1"
    >
      <div class="dg_accordion-item-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
        terry richardson ad squid. 3 wolf moon officia aute, non cupidatat you
        probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
</div>
```