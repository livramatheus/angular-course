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

## Two-way data binding

- Is a two-way communication between the template and the class
- Is mostly used on forms, because the class has always access to the most recent data that is present in the fields
- The communication is set by [(ngModel)] attribute
- This is basically the same as a useState from react, where the current value from state is always present in the field

- Referencing scalar values from class
```javascript
<input type="text" [(ngModel)]="name">
```

- Referencing objects from class
```javascript
<input type="text" [(ngModel)]="person.name">
<input type="text" [(ngModel)]="person.age">
```

## Output Properties

- There is a way for the parent component to listen for changes in the child component
- On **child class component**, create a new emmitter: `@Output() valueChanged = new EventEmitter();`
- Trigger the emmitter when needed: `this.valueChanged.emit({ newValue: this.value });`
- Any value can be passed as params for the `emit` function
- `@Output` is required to expose the emitter
- Remember to import `@Output` from core
- On **parent class component**, declare a function that will receive and handle what is being emitted
- On **parent template file**, call the function declared on parent class component (onValueChanged) and use parenthesis to bind the emitter name that was declared on **child class component** (valueChanged)

Example:
`<counter [value]="initialValue" (valueChanged)="onValueChanged($event)"></counter>`

## Life Cycle Hooks

- They are defined on the class component. Is a good practice to import them, even though that is not required.
1. `ngOnChanges` - Before #2 and when the value from property-binding gets updated
2. `ngOnInit` - When the component is initializated
3. `ngDoCheck` - Every update check cycle
4. `ngAfterContentInit` - After inserting external data into the view
5. `ngAfterContentChecked` - After every content checking
6. `ngAfterViewChecked` - After every content checking / child content
7. `ngOnDestroy` - Before destroying the component

## Direct access to DOM elements

- Similar to useRef from React
- Is a direct access to the dom properties
- Give a name to the field `<input type="text" readonly #inputField>`
- Declare the variable on the class `@ViewChild('inputField', {static: false}) fieldInputValue!: ElementRef;`

## Angular CLI Commands

- `ng lint` verifies the entire code and lists everything that is not properly formatted
- `ng test` run all `.spec.ts` files
- `ng build` builds the app. Still a debug version that can be changed
- `ng build --prod` builds the app for production (all files are minified here)

## Installing and Configuring Bootstrap

- Run `npm install --save bootstrap`
- On the global css file, import Bootstrap styles `@import "~bootstrap/dist/css/bootstrap.css";`
- On `angular.json`, import bootstrap scripts. Add the script to the scripts array:

```javascript
"./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js
```

## Directives

### `*ngIf`
- Is a regular conditional
- There is no if and else. The else statement should be done manually
- Under class: `courseList: string[] = ["Angular 2"];`
- On template file: 
```javascript
    <div *ngIf="this.courseList.length > 0">
        These are the courses
    </div>

    <div *ngIf="this.courseList.length == 0">
        No Courses Available
    </div>
```

### `*ngSwitch`
- Regular switch statement
- It maps to attributes declared on component class (tab, in this case)
```javascript
<div [ngSwitch]="tab">
    <p *ngSwitchCase="'map'">Map!</p>
    <p *ngSwitchCase="'list'">List!</p>
    <p *ngSwitchDefault>Home!</p>
</div>
```

### `*ngFor`
- Regular for statement
- Also maps to attributes declared on class component (in this case, courses)
```javascript
<ul>
    <li *ngFor="let course of courses, let i = index">
        {{ i }} - {{ course }}
    </li>
</ul>
```

### `ngClass`
- With this directive you can add/remove classes from an element
- `favorite` is mapping to an attribute defined on the component class

```javascript
<h1>
    <i
        class="icon" [ngClass]="{
            'icon-empty': !favorite,
            'icon-full': favorite
        }"
        (click)="favoriteItem()"
    ></i>
</h1>
```

### `ngStyle`
- Similar to `ngClass` but this one is used to set inline css based on component class attributes
- In the following example, the styles are being applied based on `active` and `sizeOne` class attributes
```javascript
<button
    [ngStyle]="{
        'color': (active ? 'white' : 'black'),
        'fontWeight': (active ? 'bold' : 'normal'),
        'fontSize': sizeOne + 'px'
    }"
>
    Click Me
</button>
```

### `ng-content`
- It's like a template for dynamic data, for example, let's say that we have a parent and a child component.
- On child component, declare the `ng-content` where you want to place dynamic data later on. Set the `select` in order to overwrite the correct data.
```javascript
<div class="panel">
    <ng-content select=".body"></ng-content>
</div>
```

- On parent component:
```javascript
<div class="body">
    Content that will be placed on the ng
</div>
```

*Note that class body matches select attribute*
