console.log("extension:sdvx-quick-launch")

const retryCount = 15
const retryInterval = 200 // ms

const start = (retry) => {
	if (retry <= 0) 
		return

	const buttons = document.getElementsByClassName("link-btn")
	console.log(retry, buttons)
	if (buttons.length > 0) {
		const button = buttons[0]
		const url = button.href
		window.location.href = url
		window.close()
		return
	}

	setTimeout(() => start(retry - 1), retryInterval);
}

start(retryCount)