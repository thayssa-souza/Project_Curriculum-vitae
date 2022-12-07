import { Component, Input } from '@angular/core';
import { Footer } from 'src/models/footer.models';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  @Input() public dataFooter!: Footer;
}
