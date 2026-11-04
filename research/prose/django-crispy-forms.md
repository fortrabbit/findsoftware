django-crispy-forms renders Django forms as configurable HTML through a |crispy filter and a {% crispy %} tag. Layouts are built in Python from reusable components, so the markup comes from the template pack a project selects rather than from hand-written form templates. The pack chooses the CSS framework the output targets.

## Worth knowing

The core package ships no static files. The stylesheet and scripts of the chosen CSS framework are added to the site separately, and the Bootstrap 5 pack is a separate package.
