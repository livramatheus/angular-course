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

## Modules

- Used to create subsections/subfolders. (Admin, Product, Client, Reports...)
- `export class AppModule`. `AppModule` is the app's root module.
- The `src\app\app.module.ts` file holds all the imports, so there is no need to import components on each file. This file will also hold all the necessary dependencies.
- To create a module inside a module, run: `ng g c module/submodule-name`

### Generating modules

1. Run `ng g m module-name`. This will generate a new module template inside the app folder
2. Run `ng g c module-name`. This will generate the remaining files inside folder with the same name as `module-nane`
3. Step 2 might generate unwanted data under `app.module.ts`. As `module-name` is a submodule, remove the component from `declarations` attribute and move it to the `module-name.ts`, under the same `declarations` attribute.
4. As this is a component inside a new module, it needs to be exposed, by adding `exports: [NameComponent]` to the module file
5. The child module should be imported under the parent module: `imports: [NameModule]`

## Templates

- `.html` files the view. On these files html and js are coded.
- Inserting dynamic data into templates:
1. Add data into the component:
```js
export class CursosComponent {
  portalName: string;
  courses: string[] = ["Java", "Ext JS", "Angular"];

  constructor() {
    this.portalName = "https://livramento.dev"
  }
}
```

2. Fetch the data in the html file:

Scalar Values:

`{{ portalName }}`

Arrays (uses ngFor):
```js
<ul>
    <li *ngFor="let course of courses">
        {{course}}
    </li>
</ul>
```

## Services

- Services are a separate layer of the application that is in charge of fetching data from the back-end and delivering it to the front end
- To create a service template, just run `ng g s folder/servicename`. If folder is ommited, the service will be generated directly under `/app`
- The service will be auto injected in the component's constructor:

```javascript
constructor(private cursosService: CursosService) {
  this.courses = this.cursosService.getCursos();
}
```

## Data Binding

- Associate template to component
- Variables and function returns from the class component can be binded to the html file
- HTML tags properties can also be binded

## Event Binding

- Can be done by passing the whole event as param (remember `$`)
`(keyup)="onKeyUp($event)"`

- Can be done by creating a local variable (remember `#`)
```javascript
<input
    type="text"
    (keyup.enter)="saveValue(inputField.value)"
    (blur)="saveValue(inputField.value)"
    #inputField
/>
```

- There is also another way to set event, preceding it with "on-".
`(blur)="saveValue(inputField.value)"` is the same as `on-blur="saveValue(inputField.value)"`

## Styles

- There are three ways of seting styles:
1. Global styles, on `src\styles.css`
2. Component only styles, `src\app\module-name\comp-name.component.css`
3. Inside the component itself, under `@Component` object.