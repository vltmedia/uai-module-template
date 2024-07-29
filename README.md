# UAI Module Template
This is a template for creating a new UAI module. It includes a basic structure for the module, as well as an example of how to preview the module.

## Getting Started
To get started, you can either clone this repository or download the files. You can then modify the files to create your own module.

### Prerequisites
You will need to have the following installed:
- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)

### Installing
To install the dependencies, run the following command:
```bash
npm install
```

### Creating a Module
You can just modify a few files to create a new module. Here are the files you will need to modify:
- `src\module\index.jsx`: This is the main file for the module.
  - `src\module\index.jsx : view` : This is the view for the module. This will be rendered in most UAI applications, if not the schema will handle the rendering via the `subWindows` object.
  - `src\module\index.jsx : operation` : This is the view for the module. This will be rendered in most UAI applications, if not the schema will handle the rendering via the `subWindows` object.
  - `src\module\index.jsx : schema` : This is the schema for the module.It defines the metadata of the module such as name, title, description, inputs, outputs, etc.The subwindows field defines the settings of the module that will be displayed in the UAI platform.
- `webpack.plugin.js`: This is the webpack plugin that will be used to build the module. You should modify this file to edit the module name and other settings.
  - `module.exports.entry`: Edit the key to match the name of your module. UAI will use this name to load and call the module.
  - `module.exports.output.library`: Edit the name of the library to match the name of your module. UAI will use this name to load and call the module.
- `index.html`: This is the file that will be used to preview the module. You can modify this file to include the module and test it.

### Building the Module
To build the module, run the following command:
```bash
npm run build
```
This will create a `dist` folder with the module files. You can then upload this folder to the UAI platform.

### Previewing the Module
To preview the module, you can open the index.html file and attempt to load the module.