import { NgModule, ValueProvider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewDirective, ViewsDirective } from './views.directive';
import { ResourceDirective, ResourcesDirective } from './resources.directive';
import { HeaderRowDirective, HeaderRowsDirective } from './headerrows.directive';
import { ScheduleComponent } from './schedule.component';
import { ScheduleModule } from './schedule.module';
import {Day, Week, WorkWeek, Month, Agenda, MonthAgenda, TimelineViews, TimelineMonth, Resize, DragAndDrop} from '@syncfusion/ej2-schedule'


export const DayService: ValueProvider = { provide: 'ScheduleDay', useValue: Day};
export const WeekService: ValueProvider = { provide: 'ScheduleWeek', useValue: Week};
export const WorkWeekService: ValueProvider = { provide: 'ScheduleWorkWeek', useValue: WorkWeek};
export const MonthService: ValueProvider = { provide: 'ScheduleMonth', useValue: Month};
export const AgendaService: ValueProvider = { provide: 'ScheduleAgenda', useValue: Agenda};
export const MonthAgendaService: ValueProvider = { provide: 'ScheduleMonthAgenda', useValue: MonthAgenda};
export const TimelineViewsService: ValueProvider = { provide: 'ScheduleTimelineViews', useValue: TimelineViews};
export const TimelineMonthService: ValueProvider = { provide: 'ScheduleTimelineMonth', useValue: TimelineMonth};
export const ResizeService: ValueProvider = { provide: 'ScheduleResize', useValue: Resize};
export const DragAndDropService: ValueProvider = { provide: 'ScheduleDragAndDrop', useValue: DragAndDrop};

/**
 * NgModule definition for the Schedule component with providers.
 */
@NgModule({
    imports: [CommonModule, ScheduleModule],
    exports: [
        ScheduleModule
    ],
    providers:[
        DayService,
        WeekService,
        WorkWeekService,
        MonthService,
        AgendaService,
        MonthAgendaService,
        TimelineViewsService,
        TimelineMonthService,
        ResizeService,
        DragAndDropService
    ]
})
export class ScheduleAllModule { }