import { NgModule, ValueProvider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RichTextEditorComponent } from './richtexteditor.component';
import { RichTextEditorModule } from './richtexteditor.module';
import {Toolbar, Link, Image, Count, QuickToolbar, HtmlEditor, MarkdownEditor, Table} from '@syncfusion/ej2-richtexteditor'


export const ToolbarService: ValueProvider = { provide: 'RichTextEditorToolbar', useValue: Toolbar};
export const LinkService: ValueProvider = { provide: 'RichTextEditorLink', useValue: Link};
export const ImageService: ValueProvider = { provide: 'RichTextEditorImage', useValue: Image};
export const CountService: ValueProvider = { provide: 'RichTextEditorCount', useValue: Count};
export const QuickToolbarService: ValueProvider = { provide: 'RichTextEditorQuickToolbar', useValue: QuickToolbar};
export const HtmlEditorService: ValueProvider = { provide: 'RichTextEditorHtmlEditor', useValue: HtmlEditor};
export const MarkdownEditorService: ValueProvider = { provide: 'RichTextEditorMarkdownEditor', useValue: MarkdownEditor};
export const TableService: ValueProvider = { provide: 'RichTextEditorTable', useValue: Table};

/**
 * NgModule definition for the RichTextEditor component with providers.
 */
@NgModule({
    imports: [CommonModule, RichTextEditorModule],
    exports: [
        RichTextEditorModule
    ],
    providers:[
        ToolbarService,
        LinkService,
        ImageService,
        CountService,
        QuickToolbarService,
        HtmlEditorService,
        MarkdownEditorService,
        TableService
    ]
})
export class RichTextEditorAllModule { }