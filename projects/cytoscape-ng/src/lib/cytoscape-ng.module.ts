import { NgModule } from '@angular/core';
import { CytoscapeGraphComponent } from './cytoscape-ng.component'
import { CytoscapeGraphToolbarComponent } from './cytoscape-graph-toolbar/cytoscape-graph-toolbar.component'
import {
  ButtonModule,
  DropdownModule,
  FieldsetModule,
  InputSwitchModule,
  OverlayPanelModule,
  TooltipModule
} from 'primeng'
import { FormsModule } from '@angular/forms'
import { CytoscapeLayoutToolComponent } from './cytoscape-layout-tool/cytoscape-layout-tool.component'
import { FluidFormInputGroupComponent } from './fluid-form-input-group/fluid-form-input-group.component';
import { GenericInputComponentComponent } from './generic-input-component/generic-input-component.component'
import { CommonModule } from '@angular/common'
import { CytoscapeStyleToolComponent } from './cytoscape-style-tool/cytoscape-style-tool.component'

@NgModule({
  declarations: [
    CytoscapeGraphComponent,
    CytoscapeGraphToolbarComponent,
    CytoscapeLayoutToolComponent,
    FluidFormInputGroupComponent,
    GenericInputComponentComponent,
    CytoscapeStyleToolComponent
  ],
  imports: [
    FieldsetModule,
    InputSwitchModule,
    FormsModule,
    DropdownModule,
    OverlayPanelModule,
    TooltipModule,
    CommonModule,
    ButtonModule
  ],
  exports: [
    CytoscapeGraphComponent,
    CytoscapeGraphToolbarComponent,
    CytoscapeLayoutToolComponent,
    CytoscapeStyleToolComponent
  ]
})
export class CytoscapeNgModule { }