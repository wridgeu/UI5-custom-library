# UI5 Library Playground

This is a playground repository for learning (learning-by-doing) and understanding UI5 libraries. To be more specific custom UI5 control libraries.

When creating this monorepository I have looked through several resources mainly [@vobus](https://github.com/vobu) [ui5-webcomponent-showcase](https://github.com/vobu/ui5-webcomponents-showcase). As this is the first real monorepository of mine it was a bit of a learning curve but I enjoyed it.

In a few examples from [@vobu](https://github.com/vobu) or [@matz3](https://github.com/matz3/) you can see them use yarn (for workspace linking) and it works quite well. If you're unsure whether or not the UI5 tooling is picking up on your dependencies, execute the `ui5 tree` command and check if your dependency gets picked up.

I'm well aware that it does look a bit like a copy of [@vobus](https://github.com/vobu) showcase repository (it isn't, I actually created the files myself 👀). I used it as main example and wanted to learn not only [yarn](https://yarnpkg.com/) but also [rollup.js](https://rollupjs.org/guide/en/) and the combination of [ui5 webcomponents](https://sap.github.io/ui5-webcomponents/) with [ui5 custom controls](https://sapui5.hana.ondemand.com/#/topic/8dcab0011d274051808f959800cabf9f) and [ui5 custom libraries](https://github.com/SAP/openui5/blob/dc225e1c87bcdfe64e6c67972f6a7bd561cc00d7/docs/controllibraries.md). Of course ... mainly the library part but it was the mixture of everything combined that made it enjoyable to learn. In addition to that it was the first time using "basic" things like `npm-watch`. Sounds basic? What can I say, I didn't know it exists and mainly develop in ABAP during the daytime. 😂 

There are a few other ways to get external resources working in your application. 

- For example using the `resourceRoots` attribute within the `manifest.json` or `index.html` file. This is especially then useful when you added the external library/dependency as actual files into your application folder (e.g. actually creating a `thirdparty` folder and putting the files in there).

- Another option of adding external (non-UI5) dependencies would be via the usage of [Project-Shims](https://sap.github.io/ui5-tooling/pages/extensibility/ProjectShims/) in tandem to adding the dependencies to the `package.json` as seen in this [example](https://github.com/matz3/ui5con20-ui5-tooling/blob/master/demo-project/packages/library/ui5.yaml). You can additionally make use of the (`sap.ui.loader.config`)(https://openui5.hana.ondemand.com/api/sap.ui.loader#overview) to provide the shim before your actual `sap.ui.require` statement as seen [here](https://github.com/matz3/ui5con20-ui5-tooling/blob/master/demo-project/packages/library/src/ui5con20/library/Chart.js).

## Q: Why are there different `.yaml` files in the `ui5-library` folder?
> The `ui5.yaml` is the file that gets pulled in (read) by the UI5 tooling. In there we specify which resources we want the UI5 tooling to use. Those are the final, built resources (the ones you'd share via npm for example). While the `ui5-dev.yaml` is being used to create the library build.

## Q: Why do we need rollup.js in the library?
> Someone has to resolve the ES6 modules for us and pre-bundle them so they're ready for consumption via UI5. Ever tried using ES6 modules without a bundler? Check out this [blog post](https://blogs.sap.com/2020/12/30/using-ui5-web-components-without-any-framework) by [@christian ](https://github.com/christianp86).

## Q: Why didn't you add a theme or explicit renderer.js file to the library?
> I didn't want to. Plus, there is no need for an explicit `<Control>Renderer.js`, especially not with this minimum example I made. Head over to [ui5-webcomponent-showcase](https://github.com/vobu/ui5-webcomponents-showcase) for a more elaborate example.

## Q: How did the yarn linking (workspace) work?
> It only works for private packages so you have to define the `private` attribute in all of your `package.json` files. Having done that, you define the `workspace` attribute in the root of your poject. After that you should be all set and just typing in `yarn` should do the trick for ya.

## Q: Why are the project-, module- and application IDs so ... weird?
> Well... I do suck at naming things... so ... there is that. I mean come on ... `libraryconsumption`, `applibraryconsumption`, `ui5-library`, `ui5lib` and `ui5-library-consumption` aren't that bad, are they? 😜😂

## TODO

- [ ] Adjust some scripts
- [ ] Adjust the readme
- [ ] Check messagebundles & manifest (add to readme if necessary)
- [ ] Add testing (☢)
- [ ] Try to add Asset.js or generic Icon bundling with rollup (`@ui5/webcomponents/dist/Assets.js`)

## Thanks...
I really highly appreciate all the examples out there. Sadly a lot of information regarding libraries are quite outdated so some of it can feel a bit of detective work, especially when you want to get it "right". Therefore I linked lots of resources that I used right below 🔽🔽. I'm definitely not saying that I'm currently doing it right, there is lots of room for improvement - don't get me wrong. ☺
## Credits / Resources
- The UI5 app was generated with [easy-ui5](https://github.com/SAP)
- [Develop custom UI5 libraries UI5Con2020 @YT](https://www.youtube.com/watch?v=g3Zskx4MKI0)
- [UI5 Tooling 2020 @YT](https://www.youtube.com/watch?v=8IHoVJLKN34)
  - [Demo-Repository](https://github.com/matz3/ui5con20-ui5-tooling/tree/master/demo-project)
- [UI5-WebComponents-Showcase @Vobu](https://github.com/vobu/ui5-webcomponents-showcase)
  - [SAP Blog](https://blogs.sap.com/2020/03/06/ui5-with-ui5-web-components/)
- [UI5 Control Libraries @Github](https://github.com/SAP/openui5/blob/dc225e1c87bcdfe64e6c67972f6a7bd561cc00d7/docs/controllibraries.md)
- [Developing Controls UI5 Documentation](https://sapui5.hana.ondemand.com/#/topic/8dcab0011d274051808f959800cabf9f)
- [The Library.js File UI5 Documentation](https://sapui5.hana.ondemand.com/#/topic/bd039ed5f99e4d3f8d020b0da62f9d85)
- [Custom Control Library by milannankov](https://github.com/milannankov/sap-ui5-custom-control-library-seed)
- [UI5Lab.io How To Consume a Library](https://ui5lab.io/docs/#/how_to/consume_library)
- [UI5Lab Library overview](https://ui5lab.io/browser/index.html)
- [UI5Lab Library Sample @NPM](https://www.npmjs.com/package/ui5lab-library-simple)
- [UI5Lab Library Sample @Github](https://github.com/UI5Lab/UI5Lab-library-simple)
- [Custom Library CRUD by mauriciolauffer](https://github.com/mauriciolauffer/openui5-model-json-crud)
- [UI5 WebComponents Public Module Imports](https://sap.github.io/ui5-webcomponents/playground/docs/public-module-imports/#internationalization)
- [Efficient Asset Bundling with UI5 WebComponents](https://github.com/SAP/ui5-webcomponents/blob/master/docs/Assets.md#bundling)
