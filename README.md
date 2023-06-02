# Angular Training

## Setting Up

- Install Node
- Install TypeScript globally: `npm install -g typescript`
- Install angular cli: `npm install -g @angular/cli`
To check if angular cli was properly installed, run: `ng version`

## Creating a Angular project

- Run `ng new project-name`
- Starting up the project `ng serve`

## Components

- Components should sit under `src/app`
- Components should be named with "-". (`my-first.component.ts`)
- Class naming convention for this component would be `MyFirstComponent`
- The `src\app\app.module.ts` file holds all the imports, so there is no need to import components on each file

### Generating components

1. Run `ng g c component-name`. This will generate a few files related to the component in order to be edited

Note: `selector` is how the component will be called later on (`<my-second-component></my-second-component>`)

```javascript
@Component({
  selector: 'my-second-component',
  templateUrl: './my-second.component.html',
  styleUrls: ['./my-second.component.css']
})
```