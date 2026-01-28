<div>
	<form class="mx-auto max-w-xl space-y-6 rounded-lg bg-white p-6 shadow" method="POST">
		<h2 class="text-2xl font-bold text-gray-800">Contact Me</h2>

		<!-- Name -->
		<div>
			<label for="name" class="block text-sm font-medium text-gray-700"> Name </label>
			<input
				id="name"
				type="text"
				name="name"
				required
				class="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
			/>
		</div>

		<!-- Email -->
		<div>
			<label for="email" class="block text-sm font-medium text-gray-700"> Email </label>
			<input
				id="email"
				name="email"
				required
				type="email"
				class="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
			/>
		</div>

		<!-- Message -->
		<div>
			<label for="message" class="block text-sm font-medium text-gray-700"> Message </label>
			<textarea
				id="message"
				rows="6"
				name="message"
				required
				class="mt-1 w-full resize-y rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
				placeholder="Write your message here..."
			></textarea>
		</div>

		<!-- Submit -->
		<div>
			<button
				type="submit"
				class="inline-flex items-center rounded-md bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
			>
				Send Message
			</button>
		</div>
	</form>
</div>
