import { Directive, ViewContainerRef, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';



let input: string[] = ['field', 'format', 'label', 'operators', 'step', 'template', 'type', 'validation', 'values'];
let outputs: string[] = [];
/**
 * `e-column` directive represent a column of the Angular QueryBuilder. 
 * It must be contained in a QueryBuilder component(`ejs-querybuilder`). 
 * ```html
 * <ejs-querybuilder [dataSource]='data'> 
 *   <e-columns>
 *    <e-column field='ID' label='ID' type='number'></e-column>
 *    <e-column field='Date' label='Date' type='date' format='dd/MM/yyyy'></e-column>
 *   </e-columns>
 * </ejs-querybuilder>
 * ```
 */
@Directive({
    selector: 'ejs-querybuilder>e-columns>e-column',
    inputs: input,
    outputs: outputs,    
    queries: {

    }
})
export class ColumnDirective extends ComplexBase<ColumnDirective> {


    /** 
     * Specifies the types in columns field
     * @default null
     */
    public type: any;
    /** 
     * Specifies the fields in columns.
     * @default null
     */
    public field: any;
    /** 
     * Specifies the date format for columns.
     * @default null
     */
    public format: any;
    /** 
     * Specifies the labels name in columns
     * @default null
     */
    public label: any;
    /** 
     * Specifies the operators in columns.
     * @default null
     */
    public operators: any;
    /** 
     * Specifies the step value(numeric textbox) for columns.
     * @default null
     */
    public step: any;
    /** 
     * Specifies the template for value field such as slider or any other widgets.
     * @default null
     */
    public template: any;
    /** 
     * Specifies the validation for columns (text, number and date).
     * @default null
     */
    public validation: any;
    /** 
     * Specifies the values in columns or bind the values from sub controls.
     * @default null
     */
    public values: any;

    constructor(private viewContainerRef:ViewContainerRef) {
        super();
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
    }
}

/**
 * Column Array Directive
 * @private
 */
@Directive({
    selector: 'ejs-querybuilder>e-columns',
    queries: {
        children: new ContentChildren(ColumnDirective)
    },
})
export class ColumnsDirective extends ArrayBase<ColumnsDirective> {
    constructor() {
        super('columns');
    }
}