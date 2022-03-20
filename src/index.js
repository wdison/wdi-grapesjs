import grapesjs from 'grapesjs';
import gjsPresetWebpage from 'grapesjs-preset-webpage';


function WdiContainer(editor) {
    editor.BlockManager.add('wdi-container-block', {
        label: 'Container',
        category: 'Wdi Pro 1.0',
        attributes: { class: 'gjs-fonts gjs-f-b1' },
        content: '<div class="container"><p>Container</p><p>Text2</p></div>',
    });
}
function WdiMenu(editor) {
    editor.BlockManager.add('wdi-menu-block', {
        label: 'Menu',
        category: 'Wdi Pro 1.0',
        content: '<div class="menu"><ul><li>Menu 1</li><li>Menu 2</li><li>Menu 3</li></ul></div>',
    });
}
function WdiInput(editor) {
    editor.BlockManager.add('wdi-input-block', {
        label: 'Input',
        category: 'Wdi Pro 1.0',
        content: '<input type="text"/>',
    });
}

//function WdiComponent(editor){
// 	editor.DomComponents.addType('input', {
// 		isComponent: el => el.tagName == 'INPUT',
// 		model: {
// 			defaults: {
// 				traits: [
//         					// Strings are automatically converted to text types
//         					'name', // Same as: { type: 'text', name: 'name' }
//         					'placeholder',
//         					{
//           					type: 'select', // Type of the trait
//           					label: 'Type', // The label you will see in Settings
//           					name: 'type', // The name of the attribute/property to use on component
//           					options: [
//           					{ id: 'text', name: 'Text'},
//           					{ id: 'email', name: 'Email'},
//           					{ id: 'password', name: 'Password'},
//           					{ id: 'number', name: 'Number'},
//           					]
//           				}, {
//           					type: 'checkbox',
//           					name: 'required',
//           				}],
//       					// As by default, traits are binded to attributes, so to define
//       					// their initial value we can use attributes
//       					attributes: { type: 'text', required: true },
//       				},
//       			},
//       		});
// }

const editor = grapesjs.init({
    container: '#gjs',
    components: '<div class="txt-red">Edite-me!</div>',
    style: '.txt-red{color: red}',
    plugins: [gjsPresetWebpage]
    , pluginsOpts: {
        WdiContainer: {
            customField: 'customValue'
        }
    }
});
