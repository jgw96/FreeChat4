export class ModalService {
	element: any;
	
	constructor() {
		this.element = <HTMLElement>document.querySelector("#addNewSection");
	}
	
	open() {
		if (this.element.classList.contains("slideOutDown")) {
		    this.element.classList.remove("slideOutDown");
		}

		this.element.style.display = "block";
		this.element.style.bottom = "0px";
		this.element.style.height = "100%";
		this.element.classList.add("slideInUp");
	}
	
	close() {
		this.element.classList.remove("slideInUp");
        this.element.classList.add("slideOutDown");

        setTimeout(() => {
            this.element.style.display = "none"
        }, 800)
	}
}