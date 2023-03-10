import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  credentials: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password  : new FormControl('', [Validators.required, Validators.pattern(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
    ),])
  })


  constructor(private fb:FormBuilder,
    private loadingController:LoadingController,
    private alertController:AlertController,
    private authService:AuthService,
    private router:Router) { }

  ngOnInit() {
  }
  async register(){
    const loading = await this.loadingController.create();
		await loading.present();

		const user = await this.authService.register(this.credentials.value);
		await loading.dismiss();

		if (user) {
			this.router.navigateByUrl('/tabs', { replaceUrl: true });
		} else {
			this.showAlert('Registration failed', 'Please try again!');
		}
  }
  async showAlert(header:string, message:string) {
		const alert = await this.alertController.create({
			header,
			message,
			buttons: ['OK']
		});
		await alert.present();
	}

}
