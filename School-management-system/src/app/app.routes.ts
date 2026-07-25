import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Message } from './message/message';
import { Staff } from './staff/staff';
import { Parent } from './parent/parent';
import { Pupil } from './pupil/pupil';
import { Class } from './class/class';
import { Record } from './record/record';
import { Announcement } from './announcement/announcement';
import { About } from './about/about';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
  { path: '', component: Dashboard },
  { path: 'dashboard', component: Dashboard },
  { path: 'message', component: Message },
  { path: 'staff', component: Staff },
  { path: 'parent', component: Parent },
  { path: 'pupil', component: Pupil },
  { path: 'class', component: Class },
  { path: 'record', component: Record },
  { path: 'announcement', component: Announcement },
  { path: 'about', component: About },
  { path: '**', component: NotFound },
];
