import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AlertController,LoadingController } from '@ionic/angular';
import { ShowEvent } from 'src/app/interfaces';
import { AuthService } from 'src/app/services/auth.service';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  credentials: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password  : new FormControl('', [Validators.required, Validators.pattern(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
    ),])
  });
  events:ShowEvent[]=[];

  constructor(private fb:FormBuilder,
    private loadingController:LoadingController,
    private alertController:AlertController,
    private authService:AuthService,
    private router:Router,
    private eventServices: EventService) { 
      
  }
  get email() {
		return this.credentials.get('email');
	}
  get password() {
		return this.credentials.get('password');
	}

  initForms(){
    this.credentials.setValue({
      email: '',
      password: ''
    })
  }

  ngOnInit():void {
    this.eventServices.getEvents().subscribe(events=>{
      console.log(events);
    })
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
  async login() {
		const loading = await this.loadingController.create();
		await loading.present();
		const user = await this.authService.login(this.credentials.value);
		await loading.dismiss();

		if (user) {
			this.router.navigateByUrl('/tabs', { replaceUrl: true });
		} else {
			this.showAlert('Login failed', 'Please try again!');
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
