### PageHeader
Several header colors are available for use. The standard will be blue, but depending on the scenario, the colors gold, brand-blue, gray and purple may be used.

```jsx
import Breadcrumbs from "./Breadcrumbs";
import BreadCrumbLinkItem from "./BreadCrumbLinkItem";

const breadCrumbs = () => (
  <Breadcrumbs>
    <BreadCrumbLinkItem
      text="Departments"
      title="This is a title"
      link="/departments"
    />
    <BreadCrumbLinkItem
      text="Department of Health"
      title="This is a title"
      link="/departments/health"
    />
    <BreadCrumbLinkItem
      className="breadcrumb-last"
      text="Adoptable Pets"
      link="/departments/health"
    />
  </Breadcrumbs>
);

<PageHeader
  Breadcrumbs={breadCrumbs}
  className="blue"
  backGroundImage="http://baltimorecountymd.gov/sebin/j/x/public-works-header.jpg"
  preTitle="Department Of"
  title="Public Works"
  deck="The Department of Public Works oversees and maintains the County’s public infrastructure, including highways, utilities, and trash and recycling."
/>;
```

```jsx
import Breadcrumbs from "./Breadcrumbs";
import BreadCrumbLinkItem from "./BreadCrumbLinkItem";

const breadCrumbs = () => (
  <Breadcrumbs>
    <BreadCrumbLinkItem
      text="Departments"
      title="This is a title"
      link="/departments"
    />
    <BreadCrumbLinkItem
      text="Department of Health"
      title="This is a title"
      link="/departments/health"
    />
    <BreadCrumbLinkItem
      className="breadcrumb-last"
      text="Adoptable Pets"
      link="/departments/health"
    />
  </Breadcrumbs>
);

<PageHeader
  Breadcrumbs={breadCrumbs}
  className="brand-blue"
  backGroundImage="http://baltimorecountymd.gov/sebin/j/x/public-works-header.jpg"
  preTitle="Department Of"
  title="Public Works"
  deck="The Department of Public Works oversees and maintains the County’s public infrastructure, including highways, utilities, and trash and recycling."
/>;
```

```jsx
import Breadcrumbs from "./Breadcrumbs";
import BreadCrumbLinkItem from "./BreadCrumbLinkItem";

const breadCrumbs = () => (
  <Breadcrumbs>
    <BreadCrumbLinkItem
      text="Departments"
      title="This is a title"
      link="/departments"
    />
    <BreadCrumbLinkItem
      text="Department of Health"
      title="This is a title"
      link="/departments/health"
    />
    <BreadCrumbLinkItem
      className="breadcrumb-last"
      text="Adoptable Pets"
      link="/departments/health"
    />
  </Breadcrumbs>
);

<PageHeader
  Breadcrumbs={breadCrumbs}
  className="purple"
  backGroundImage="http://baltimorecountymd.gov/sebin/j/x/public-works-header.jpg"
  preTitle="Department Of"
  title="Public Works"
  deck="The Department of Public Works oversees and maintains the County’s public infrastructure, including highways, utilities, and trash and recycling."
/>;
```

```jsx
import Breadcrumbs from "./Breadcrumbs";
import BreadCrumbLinkItem from "./BreadCrumbLinkItem";

const breadCrumbs = () => (
  <Breadcrumbs>
    <BreadCrumbLinkItem
      text="Departments"
      title="This is a title"
      link="/departments"
    />
    <BreadCrumbLinkItem
      text="Department of Health"
      title="This is a title"
      link="/departments/health"
    />
    <BreadCrumbLinkItem
      className="breadcrumb-last"
      text="Adoptable Pets"
      link="/departments/health"
    />
  </Breadcrumbs>
);

<PageHeader
  Breadcrumbs={breadCrumbs}
  className="gold"
  backGroundImage="http://baltimorecountymd.gov/sebin/j/x/public-works-header.jpg"
  preTitle="Department Of"
  title="Public Works"
  deck="The Department of Public Works oversees and maintains the County’s public infrastructure, including highways, utilities, and trash and recycling."
/>;
```
```jsx
import Breadcrumbs from "./Breadcrumbs";
import BreadCrumbLinkItem from "./BreadCrumbLinkItem";

const breadCrumbs = () => (
  <Breadcrumbs>
    <BreadCrumbLinkItem
      text="Departments"
      title="This is a title"
      link="/departments"
    />
    <BreadCrumbLinkItem
      text="Department of Health"
      title="This is a title"
      link="/departments/health"
    />
    <BreadCrumbLinkItem
      className="breadcrumb-last"
      text="Adoptable Pets"
      link="/departments/health"
    />
  </Breadcrumbs>
);

<PageHeader
  Breadcrumbs={breadCrumbs}
  className="gray"
  backGroundImage="http://baltimorecountymd.gov/sebin/j/x/public-works-header.jpg"
  preTitle="Department Of"
  title="Public Works"
  deck="The Department of Public Works oversees and maintains the County’s public infrastructure, including highways, utilities, and trash and recycling."
/>;
```

Html Snippet:

```html
<div class="dg_page-header blue">
  <img
    class="dg_page-header__backgroundImage"
    src="http://baltimorecountymd.gov/sebin/j/x/public-works-header.jpg"
    aria-hidden="true"
  />
  <div class="dg_page-header__container">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="dg_breadcrumbs">
            <a
              class="breadcrumb breadcrumb-first"
              href="https://beta.baltimorecountymd.gov/prototyping/"
              >Home</a
            >
            <a
              class="breadcrumb"
              href="https://beta.baltimorecountymd.gov/prototyping/"
              >prototyping</a
            >
            <a
              class="breadcrumb breadcrumb-last"
              href="https://beta.baltimorecountymd.gov/prototyping/index.html"
              >Prototyping Homepage</a
            >
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-lg-5 col-xl-6">
          <h1>
            <span class="dg_page-header__pre-title">Department Of</span>
            <span class="dg_page-header__title">Public Works </span>
          </h1>
        </div>
        <div class="col-12 col-lg-7 col-xl-6">
          <p class="dg_page-header__deck">
            The Department of Public Works oversees and maintains the County’s
            public infrastructure, including highways, utilities, and trash and
            recycling.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
```
