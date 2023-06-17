import { Component, Optional } from '@angular/core';
import { hasValue } from 'src/app/shared/empty.util';
import { KlaroService } from 'src/app/shared/cookies/klaro.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'ds-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  dateObj: number = Date.now();

  /**
   * A boolean representing if to show or not the top footer container
   */
  showTopFooter = true;
  showPrivacyPolicy = environment.info.enablePrivacyStatement;
  showEndUserAgreement = environment.info.enableEndUserAgreement;

  constructor(@Optional() private cookies: KlaroService) {
  }

  showCookieSettings() {
    if (hasValue(this.cookies)) {
      this.cookies.showSettings();
    }
    return false;
  }
}
