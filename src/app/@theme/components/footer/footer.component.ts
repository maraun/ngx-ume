import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">Создан с ♥ <b><a href="https://semeymedicaluniversity.kz/o-nas/struktura/departament-akademicheskoj-raboty/otdel-cifrovyh-tehnologij/" target="_blank">ОЦТ</a></b> 2019</span>
    <div class="socials">
      <a href="https://semeymedicaluniversity.kz" target="_blank" class="ion ion-ios-location"></a>
      <a href="https://keyps.semeymedicaluniversity.kz" target="_blank" class="ion ion-ios-bookmarks"></a>
      <a href="https://newjournal.ssmu.kz/" target="_blank" class="ion ion-ios-book"></a>
      <a href="https://dl.ssmu.kz/" target="_blank" class="ion ion-android-globe"></a>
    </div>
  `,
})
export class FooterComponent {
}
