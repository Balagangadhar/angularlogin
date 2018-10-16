import { NgModule } from '@angular/core';

import { AngularloginSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [AngularloginSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [AngularloginSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class AngularloginSharedCommonModule {}
