import type { Locator, Page } from '@playwright/test';

export class Registration {
	private readonly page: Page;

	constructor(page: Page) {
		this.page = page;
	}

	get btnSubmit(): Locator {
		return this.page.locator('role=button[name="Submit"]');
	}

	get btnLogin(): Locator {
		return this.page.locator('role=button[name="Login"]');
	}

	get goToRegister(): Locator {
		return this.page.locator('role=link[name="Register"]');
	}

	get main(): Locator {
		return this.page.locator('role=main[name="Home"]');
	}

	get backToLogin(): Locator {
		return this.page.locator('role=link[name="Back to Login"]');
	}

	get btnRegister(): Locator {
		return this.page.locator('role=button[name="Register"]');
	}

	get btnRegisterConfirmUsername(): Locator {
		return this.page.locator('button[data-loading-text=" Please_wait ..."]');
	}

	get btnForgotPassword(): Locator {
		return this.page.locator('role=link[name="Forgot your password?"]');
	}

	get username(): Locator {
		return this.page.locator('role=textbox[name=/username/i]');
	}

	get inputName(): Locator {
		return this.page.locator('[name=name]');
	}

	get inputEmail(): Locator {
		return this.page.locator('role=textbox[name=/Email/]');
	}

	get inputPassword(): Locator {
		return this.page.locator('[name=password]');
	}

	get inputReason(): Locator {
		return this.page.locator('role=textbox[name=/Reason/]');
	}

	get inputPasswordConfirm(): Locator {
		return this.page.locator('[name=passwordConfirmation]');
	}

	// get textErrorPasswordConfirm(): Locator {
	// 	return this.page.locator('[name=confirm-pass]~.input-error');
	// }

	get forgotPasswordEmailCallout(): Locator {
		return this.page.locator('role=status');
	}

	get registrationDisabledCallout(): Locator {
		return this.page.locator('role=status >> text=/New user registration is currently disabled/');
	}
}
