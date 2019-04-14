# Intern

This project was generated using [Nx](https://nx.dev).

## Development server

Run `ng serve myapp` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name --project=myapp` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

```
ng g @nestjs/schematics:module game --path app --source-root apps/intern-api/src
ng g @nestjs/schematics:controller match --path app/game  --source-root apps/intern-api/src
ng g @nestjs/schematics:service match --path app/game --source-root apps/intern-api/src
ng g @nestjs/schematics:class match/match.entity --path app/game --source-root apps/intern-api/src --spec
```

## Build

Run `ng build myapp` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Jest](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Cypress](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
