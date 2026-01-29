// $lib/server/domain/prospect.ts
export interface ProspectProps {
	name: string;
	email: string;    // make it required in your domain if you want
	message: string;
}

export class Prospect {
	constructor(private props: ProspectProps) {}

	// getters keep the rest of your app from mutating internals
	get name() { return this.props.name; }
	get email() { return this.props.email; }
	get message() { return this.props.message; }

	// example domain methods
	get isValidEmail() {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.props.email);
	}

	get preview() {
		return this.props.message.length > 120
			? this.props.message.slice(0, 117) + '...'
			: this.props.message;
	}

	// factory: normalize + enforce invariants once, here
	static fromForm(data: FormData): Prospect | null {
		const name = data.get('name')?.toString().trim() ?? '';
		const email = data.get('email')?.toString().trim().toLowerCase() ?? '';
		const message = data.get('message')?.toString().trim() ?? '';

		if (!name || !email || !message) return null;

		const p = new Prospect({ name, email, message });
		if (!p.isValidEmail) return null;

		return p;
	}
}
