import { Component } from '@angular/core';

import {
  LucideAngularModule,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter
} from 'lucide-angular';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    LucideAngularModule
  ],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {

  readonly MapPin = MapPin;
  readonly Phone = Phone;
  readonly Mail = Mail;
  readonly Facebook = Facebook;
  readonly Instagram = Instagram;
  readonly Twitter = Twitter;

}